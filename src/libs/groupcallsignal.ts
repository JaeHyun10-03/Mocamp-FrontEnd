import { getAccessToken } from '@/utils/token';


const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const WS_URL_KURENTO = BACKEND_URL?.startsWith('https://')
  ? BACKEND_URL.replace(/^https:\/\//, 'wss://') + '/groupcall'
  : undefined;

if (!WS_URL_KURENTO) {
  console.error('[Kurento WebSocket] BACKEND_URL이 유효하지 않습니다:', BACKEND_URL);
}

export class KurentoSignalingSocket {
  private ws: WebSocket | null = null;
  private connected = false;
  private sendQueue: Array<{ method: string; payload: any }> = [];
  private messageHandlers: Map<string, Array<(data: any) => void>> = new Map();
  private onOpenCallback: (() => void) | null = null;
  private heartbeatInterval: NodeJS.Timeout | null = null;

  constructor() {}

  private startHeartbeat = () => {
    this.heartbeatInterval = setInterval(() => {
      if (this.isConnected()) {
        this.send('ping', {});
      }
    }, 10000);
  };


    private stopHeartbeat = () => {
    if (this.heartbeatInterval) clearInterval(this.heartbeatInterval);
  };

  private setupWebSocketHandlers = () => {
    if (!this.ws) return;

    this.ws.onopen = () => {
      console.log('[Kurento WebSocket] 연결 성공');
      this.connected = true;
      this.processQueue();
      this.startHeartbeat();
      this.onOpenCallback?.();
    };

  this.ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        console.log('[Kurento WebSocket] 메시지 수신:', message);
        this.handleIncomingMessage(message);
      } catch (error) {
        console.error('[Kurento WebSocket] 메시지 파싱 오류:', error);
      }
    };

  this.ws.onclose = (event) => {
      console.log('[Kurento WebSocket] 연결 끊김:', event.code, event.reason);
      this.connected = false;
      this.stopHeartbeat();
      this.clearHandlers();

      if (event.code === 1006) {
        console.warn('[Kurento WebSocket] 비정상 종료. 3초 후 재연결 시도');
        setTimeout(() => this.connect(), 3000);
      }
    };

  this.ws.onerror = (event) => {
      console.error('[Kurento WebSocket] 오류 발생:', event);
      this.connected = false;
    };
  };

  private processQueue = () => {
    while (this.sendQueue.length > 0 && this.connected) {
      const { method, payload } = this.sendQueue.shift()!;
      this.send(method, payload);
    }
  };


  
  public connect = () => {
    if (!WS_URL_KURENTO) {
      console.error('[Kurento WebSocket] 연결 주소가 정의되지 않았습니다.');
      return;
    }

    if (
      this.ws &&
      (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING)
    ) {
      console.log('[Kurento WebSocket] 이미 연결 중입니다.');
      return;
    }

    if (typeof window !== 'undefined') {
      const token = getAccessToken();
      let url = WS_URL_KURENTO;

      if (token) {
        url += `?token=${token}`;
      } else {
        console.warn('[Kurento WebSocket] 토큰 없이 연결 시도');
      }

      console.log('[Kurento WebSocket] 연결 URL:', url);
      this.ws = new WebSocket(url);
      this.setupWebSocketHandlers();
    } else {
      console.warn('[Kurento WebSocket] 브라우저 환경이 아님');
    }
  };


  public send = (method: string, payload: any = {}) => {
    if (!this.ws) {
      console.warn('[Kurento WebSocket] 아직 초기화되지 않음. 큐에 추가');
      this.sendQueue.push({ method, payload });
      return;
    }

    const message = { id: method, ...payload };

    if (!this.connected || this.ws.readyState !== WebSocket.OPEN) {
      console.log('[Kurento WebSocket] 연결 안됨. 큐에 메시지 추가:', message);
      this.sendQueue.push({ method, payload });
      return;
    }

    try {
      this.ws.send(JSON.stringify(message));
      console.log('[Kurento WebSocket] 전송:', message);
    } catch (err) {
      console.error('[Kurento WebSocket] 전송 실패:', err);
    }
  };

  public on = (type: string, handler: (data: any) => void) => {
    if (!this.messageHandlers.has(type)) {
      this.messageHandlers.set(type, []);
    }
    this.messageHandlers.get(type)?.push(handler);
  };

  public off = (type: string, handler: (data: any) => void) => {
    const handlers = this.messageHandlers.get(type);
    if (handlers) {
      this.messageHandlers.set(
        type,
        handlers.filter((h) => h !== handler)
      );
    }
  };


  private handleIncomingMessage = (message: any) => {
    const messageId = message.id;
    const handlers = this.messageHandlers.get(messageId);
    if (handlers) {
      handlers.forEach((handler) => handler(message));
    } else {
      console.warn(`[Kurento WebSocket] 핸들러 없음: ${messageId}`);
    }
  };

   public setOnOpenCallback = (callback: () => void) => {
    this.onOpenCallback = callback;
  };

  public isConnected = (): boolean => {
    return this.connected && this.ws?.readyState === WebSocket.OPEN;
  };

 public close = () => {
    this.clearHandlers();
    this.stopHeartbeat();
    this.sendQueue = [];
    this.ws?.close();
    this.ws = null;
    this.connected = false;
    console.log('[Kurento WebSocket] 연결 종료됨');
  };

  private clearHandlers = () => {
    this.messageHandlers.clear();
  };
}