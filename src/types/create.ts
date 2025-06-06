// 방 생성 Form 데이터
export interface CreateRoomFormData {
  roomName: string;
  capacity: number;
  description: string;
  duration: string;
  micAvailability: boolean;
  micTurnedOn: boolean;
  camTurnedOn: boolean;
  image: File;
}
