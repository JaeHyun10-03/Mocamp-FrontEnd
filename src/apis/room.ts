import { apiWithToken } from './axios';

import { Participant } from '@/types/room';
import { CreateRoomFormData } from '@/types/create';

// 방 생성
export const createRoom = async (payload: CreateRoomFormData, accessToken: string) => {
  try {
    const { image, ...roomPayload } = payload;
    const formData = new FormData();

    formData.append('room', new Blob([JSON.stringify(roomPayload)], { type: 'application/json' }));
    formData.append('image', payload.image);

    const response = await apiWithToken.post('/api/room/create', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.message;
  } catch (error: any) {
    console.error('방 생성 실패:', error.response?.data || error.message);
    throw error;
  }
};

// 방 입장 요청
export const enterRoom = async (
  roomId: string,
  options: { micTurnedOn: boolean; camTurnedOn: boolean },
) => {
  const res = await apiWithToken.post(`/api/room/enter/${roomId}`, {
    micTurnedOn: options.micTurnedOn,
    camTurnedOn: options.camTurnedOn,
  });
  return res.data.message;
};

// 방 정보 조회
export const fetchRoomData = async (roomId: string) => {
  const res = await apiWithToken.get(`/api/room/${roomId}`);
  return res.data.message;
};

// 방 참가자 목록 조회
export const fetchRoomParticipants = async (roomId: string): Promise<Participant[]> => {
  try {
    const res = await apiWithToken.get(`/api/room/participant/${roomId}`);
    console.log(res.data.message);

    return res.data.message;
  } catch (error: any) {
    console.error(`참가자 목록 조회 실패:`, error.response?.data || error.message);
    return [];
  }
};

// 방 퇴장 요청
export const leaveRoom = async (roomId: string) => {
  await apiWithToken.post(`/api/room/exit/${roomId}`);
  
}


