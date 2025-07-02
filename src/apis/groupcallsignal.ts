// import { getAccessToken } from '@/utils/token';
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
let WS_BASE_URL: string | undefined;

if (BACKEND_URL) {
  if (BACKEND_URL.startsWith('https://')) {
    WS_BASE_URL = BACKEND_URL.replace(/^https:\/\//, 'wss://') + '/groupcall';
  }else {
    console.error('Invalid NEXT_PUBLIC_BACKEND_URL protocol:', BACKEND_URL);
  }
}
console.log('[WebSocket 최종 연결 주소]', WS_BASE_URL);

if (!WS_BASE_URL) {
  console.error('[Kurento WebSocket] WS_BASE_URL이 정의되지 않았거나 유효하지 않습니다.');
}

export class KurentoSignalingSocket {
  private ws: WebSocket | null = null;
  private connected = false;
  private sendQueue: Array<any> = [];
  private messageHandlers: Map<string, Array<(data: any) => void>> = new Map();
  private onOpenCallback: (() => void) | null = null;
  private heartbeatInterval: NodeJS.Timeout | null = null;

  constructor() {}

  private startHeartbeat() {
    this.heartbeatInterval = setInterval(() => {
      if (this.isConnected()) {
        this.send('ping', {});
      }
    }, 10000);
  }

  private stopHeartbeat() {
    if (this.heartbeatInterval) clearInterval(this.heartbeatInterval);
  }

  private setupWebSocketHandlers() {
    if (!this.ws) return;

    this.ws.onopen = () => {
      console.log('[Kurento WebSocket] 연결 성공');
      this.connected = true;
      this.processQueue();
      this.startHeartbeat();
      if (this.onOpenCallback) {
        this.onOpenCallback();
      }
    };

    this.ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        console.log('[Kurento WebSocket] 메시지 수신:', message);
        this.handleIncomingMessage(message);
      } catch (err) {
        console.error('[Kurento WebSocket] 메시지 파싱 오류:', err);
      }
    };

    this.ws.onclose = (event) => {
      console.log('[Kurento WebSocket] 연결 끊김', event.code, event.reason);
      this.connected = false;
      this.stopHeartbeat();
      this.clearHandlers();

      if (event.code === 1006) {
        console.warn('[Kurento WebSocket] 비정상 종료됨. 3초 후 재연결 시도');
        setTimeout(() => this.connect(), 3000);
      }
    };

    //웹소켓 연결 오류 발생
    this.ws.onerror = (event) => {
      console.error('[Kurento WebSocket] 오류 발생:', event);
      this.connected = false;
    };
  }

  private processQueue() {
    while (this.sendQueue.length > 0 && this.connected) {
      const message = this.sendQueue.shift();
      this.send(message.method, message.payload);
    }
  }

  public setOnOpenCallback(callback: () => void) {
    this.onOpenCallback = callback;
  }

  on(type: string, handler: (data: any) => void) {
    if (!this.messageHandlers.has(type)) {
      this.messageHandlers.set(type, []);
    }
    this.messageHandlers.get(type)?.push(handler);
  }

  off(type: string, handler: (data: any) => void) {
    const handlers = this.messageHandlers.get(type);
    if (handlers) {
      this.messageHandlers.set(
        type,
        handlers.filter((h) => h !== handler),
      );
    }
  }

  private handleIncomingMessage(message: any) {
    const messageId = message.id;
    const handlers = this.messageHandlers.get(messageId);
    if (handlers) {
      handlers.forEach((handler) => handler(message));
    } else {
      console.warn(
        `[Kurento WebSocket] 메시지 타입 '${messageId}'에 대한 핸들러가 없습니다.`,
        message,
      );
      if (messageId === 'error') {
        this.messageHandlers.get('error')?.forEach((handler) => handler(message));
      }
    }
  }

  connect() {
    console.log('[Kurento WebSocket] 연결 시도 중...');
    if (!WS_BASE_URL) {
      console.error('[Kurento WebSocket] WS_BASE_URL이 정의되지 않았습니다.');
      return;
    }
    if (
      this.ws &&
      (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING)
    ) {
      console.log('[Kurento WebSocket] 이미 연결 완료 or 연결 중입니다.');
      return;
    }

    if (typeof window !== 'undefined') {
      // const token = getAccessToken(); //토큰 임시 주석
      // let urlWithToken = WS_BASE_URL;
      // if (token) {
      //   urlWithToken += `?token=${token}`;
      //   console.log('[Kurento WebSocket] 토큰을 QueryParam에 추가하여 연결:', urlWithToken);
      // } else {
      //   console.warn('[Kurento WebSocket] 액세스 토큰 없이 연결을 시도합니다.');
      // }
      console.warn('[Kurento WebSocket] 토큰 인증 없이 연결을 시도합니다.');
      this.ws = new WebSocket(WS_BASE_URL);
      this.setupWebSocketHandlers();
    } else {
      console.warn('[Kurento WebSocket] 브라우저 환경이 아닙니다. WebSocket 생성을 건너뜁니다.');
    }
  }

  send(method: string, payload: any = {}) {
    if (!this.ws) {
      console.error(
        '[Kurento WebSocket] WebSocket이 초기화되지 않았습니다. 먼저 connect()를 호출하세요.',
      );
      this.sendQueue.push({ method, payload });
      return;
    }

    const message = {
      id: method,
      ...payload,
    };

    if (!this.connected || this.ws.readyState !== WebSocket.OPEN) {
      console.log('[Kurento WebSocket] 연결되지 않았습니다. 메시지를 큐에 추가합니다:', message);
      this.sendQueue.push({ method, payload });
      return;
    }

    try {
      this.ws.send(JSON.stringify(message));
      console.log(`[Kurento WebSocket] 메시지 전송됨: ${method}`, message);
    } catch (err) {
      console.error('[Kurento WebSocket] 메시지 전송 오류:', err);
    }
  }

  isConnected(): boolean {
    return this.connected && this.ws?.readyState === WebSocket.OPEN;
  }

  close() {
    console.log('[Kurento WebSocket] 연결 종료 중...');
    this.clearHandlers();
    this.stopHeartbeat();
    this.sendQueue = [];
    this.ws?.close();
    this.ws = null;
    this.connected = false;
  }

  private clearHandlers() {
    this.messageHandlers.clear();
  }
}
