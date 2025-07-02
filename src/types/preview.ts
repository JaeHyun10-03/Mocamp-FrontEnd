export interface RoomInfo {
  roomId: number;
  name: string;
  status: '진행 전' | '진행 중';
  date: string;      
  duration: string; 
  imageUrl?: string;
}

export interface UserInfo {
  userId: number;
  nickname: string;
  isWorking: boolean;
  camStatus: boolean;
  micStatus: boolean;
  stream?: MediaStream | null;
  error?: string | null;
}


