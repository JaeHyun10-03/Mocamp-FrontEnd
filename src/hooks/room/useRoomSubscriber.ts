import { useEffect } from 'react';
import { signalingSocket } from '@/libs/socket';

interface RoomSubscriberHandlers {
  onUserUpdate?: (payload: any) => void;
  onUserLeave?: (payload: any) => void;
  onCompleteUpdate?: (payload: any) => void;
  onListUpdate?: (payload: any) => void;
  onNoticeUpdate?: (payload: any) => void;
  onResolutionUpdate?: (payload: any) => void;
  onAdminUpdate?: (payload: any) => void;
  onAlertUpdate?: (payload: any) => void;
}

export const useRoomSubscriber = (roomId: string | null, handlers: RoomSubscriberHandlers) => {
  useEffect(() => {
    if (!roomId) return;

    const destination = `/sub/data/${roomId}`;

    const handleMessage = (data: any) => {
      console.log('📩 서버로부터 받은 메시지:', data);

      switch (data.type) {
        case 'USER_ENTER_UPDATED':
          handlers.onUserUpdate?.(data);
          break;
        case 'USER_EXIT_UPDATED':
          handlers.onUserLeave?.(data);
          break;
        case 'GOAL_COMPLETE_UPDATED':
          handlers.onCompleteUpdate?.(data);
          break;
        case 'GOAL_LIST_UPDATED':
          handlers.onListUpdate?.(data);
          break;
        case 'NOTICE_UPDATED':
          handlers.onNoticeUpdate?.(data);
        case 'RESOLUTION_UPDATED':
          handlers.onResolutionUpdate?.(data);
          break;
        case 'ADMIN_UPDATED':
          handlers.onAdminUpdate?.(data);
          break;
        case 'ROOM_END_ALERT':
          handlers.onAlertUpdate?.(data);
          break;
        default:
          console.warn('알 수 없는 메시지 타입:', data.type);
      }
    };

    // 구독 등록
    signalingSocket.subscribe(destination, handleMessage);

    // 연결 시도
    if (!signalingSocket.isConnected()) {
      signalingSocket.connect();
    }

    return () => {
      signalingSocket.close(); // 전체 연결 종료
      console.log('소켓 해제');
    };
  }, [roomId]);
};
