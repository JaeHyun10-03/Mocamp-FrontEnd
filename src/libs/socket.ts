import * as StompJs from '@stomp/stompjs';
const WS_BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL &&
  process.env.NEXT_PUBLIC_BACKEND_URL.replace(/^http/, 'ws') + '/ws';

export class SignalingSocket {
  private client: StompJs.Client;
  private connected = false;
  private sendQueue: Array<{ destination: string; body: any; headers?: any }> = [];
  private subscriptions: Map<string, (data: any) => void> = new Map();
  private activeSubscriptions: Map<string, StompJs.StompSubscription> = new Map();

  constructor(url: string, token: string) {
    this.client = new StompJs.Client({
      brokerURL: url,
      connectHeaders: {
        Authorization: token,
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      debug: (str) => console.log('[STOMP]', str),
    });

    this.client.onConnect = () => {
      console.log('[STOMP] Connected successfully');
      this.connected = true;

      this.subscriptions.forEach((handler, destination) => {
        if (!this.activeSubscriptions.has(destination)) {
          this._subscribeInternal(destination, handler);
        }
      });

      setTimeout(() => {
        this.sendQueue.forEach(({ destination, body, headers }) =>
          this._send(destination, body, headers),
        );
        this.sendQueue = [];
      }, 1000);
    };

    this.client.onDisconnect = () => {
      console.log('[STOMP] Disconnected');
      this.connected = false;
      this.activeSubscriptions.forEach((sub) => sub.unsubscribe());
      this.activeSubscriptions.clear();
    };

    this.client.onStompError = (frame) => {
      console.error('[STOMP] Broker error:', frame.headers['message']);
      console.error('[STOMP] Additional details:', frame.body);
      console.error('[STOMP] Frame headers:', frame.headers);

      if (frame.headers['message']?.includes('Access is denied')) {
        console.error('[STOMP] Authentication failed - token may be invalid');
        this.client.deactivate();
      }
    };

    this.client.onWebSocketError = (event) => {
      console.error('[STOMP] WebSocket error:', event);
    };
  }

  connect() {
    console.log('[STOMP] Attempting to connect...');
    this.client.activate();
  }

  subscribe(destination: string, handler: (data: any) => void) {
    if (!destination.startsWith('/sub/')) {
      console.error('[STOMP] Invalid subscribe destination:', destination);
      return;
    }

    if (this.activeSubscriptions.has(destination)) {
      this.activeSubscriptions.get(destination)?.unsubscribe();
    }

    this.subscriptions.set(destination, handler);

    if (this.connected) {
      this._subscribeInternal(destination, handler);
    }
  }

  private _subscribeInternal(destination: string, handler: (data: any) => void) {
    try {
      const subscription = this.client.subscribe(destination, (message) => {
        try {
          const payload = JSON.parse(message.body);
          console.log(`[STOMP] Received message from ${destination}:`, payload);
          handler(payload);
        } catch (err) {
          console.error('[STOMP] Message parsing error:', err);
        }
      });

      this.activeSubscriptions.set(destination, subscription);
      console.log(`[STOMP] Successfully subscribed to: ${destination}`);
    } catch (err) {
      console.error(`[STOMP] Subscription error for ${destination}:`, err);
    }
  }

  send(destination: string, body: any, headers?: any) {
    if (!destination.startsWith('/pub/')) {
      console.error('[STOMP] Invalid send destination:', destination);
      return;
    }

    if (!this._validateBody(destination, body)) {
      return;
    }

    if (!this.connected) {
      console.log('[STOMP] Not connected, queuing message');
      this.sendQueue.push({ destination, body, headers });
      return;
    }

    this._send(destination, body, headers);
  }

  private _validateBody(destination: string, body: any): boolean {
    if (!body) {
      console.error('[STOMP] Body is required');
      return false;
    }

    if (destination.includes('/rtc/offer/')) {
      if (typeof body.sdpOffer !== 'string') {
        console.error('[STOMP] Invalid body for RTC offer: sdpOffer 필드 필요', body);
        return false;
      }
    }

    if (destination.includes('/rtc/ice/')) {
      if (typeof body.candidate !== 'string') {
        console.error('[STOMP] Invalid body for RTC ICE: candidate 필드 필요', body);
        return false;
      }
    }

    return true;
  }

  private _send(destination: string, body: any, headers?: any) {
    try {
      const currentToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : '';

      if (!currentToken) {
        console.error('[STOMP] No access token available');
        return;
      }

      this.client.publish({
        destination,
        body: JSON.stringify(body),
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${currentToken}`,
          ...headers,
        },
      });

      console.log(`[STOMP] Message sent to ${destination}:`, body);
    } catch (err) {
      console.error('[STOMP] Send error:', err);
    }
  }

  isConnected(): boolean {
    return this.connected;
  }

  updateToken(newToken: string) {
    if (this.client.connectHeaders) {
      this.client.connectHeaders.Authorization = `Bearer ${newToken}`;
    }
    if (!this.connected) {
      this.connect();
    }
  }

  close() {
    console.log('[STOMP] Closing connection...');
    this.activeSubscriptions.forEach((subscription) => subscription.unsubscribe());
    this.activeSubscriptions.clear();
    this.subscriptions.clear();
    this.sendQueue = [];
    this.client.deactivate();
  }
}

const getAccessToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('accessToken') ?? '';
  }
  return '';
};

export const signalingSocket = new SignalingSocket(WS_BASE_URL ?? '', getAccessToken());

if (typeof window !== 'undefined') {
  const originalSetItem = localStorage.setItem;
  localStorage.setItem = function (key: string, value: string) {
    if (key === 'accessToken') {
      signalingSocket.updateToken(value);
    }
    originalSetItem.apply(this, [key, value]);
  };
}
