// 방 생성 Form 데이터
export interface CreateRoomFormData {
  roomId?: string;
  roomName: string;
  capacity: number;
  duration: string;
  micAvailability: boolean;
  micTurnedOn: boolean;
  camTurnedOn: boolean;
  image: File;
  initialPreviewUrl?: string;
}
