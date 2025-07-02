export interface Participant {
  userId: number;
  username: string;
  stream?: MediaStream | null;
  isAdmin: boolean;
  camStatus: boolean;
  micStatus: boolean;
  isWorking: boolean;
}


export interface GroupCallState {
  participants: Participant[];
  streams: { [userId: number]: MediaStream | null };
  localStream: MediaStream | null;
  roomId: number;
  myUserId: number;
}

