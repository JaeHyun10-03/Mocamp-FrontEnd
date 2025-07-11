export interface Goal {
  goalId: number;
  content: string;
  isCompleted: boolean;
}

export interface Participant {
  userId: number;
  userSeq?: string;
  username: string;
  goals: Goal[];
  resolution: string;
  isMyGoal: boolean;
  isSecret: boolean;
  isAdmin: boolean;
  camStatus: boolean;
  micStatus: boolean;
  isWorking: boolean;
  stream?: MediaStream | null;
}

export interface RoomInfo {
  roomId: number;
  roomName: string;
  roomSeq: string;
  capacity: number;
  status: boolean;
  notice: string;
  startedAt: string;
  endedAt: string;
  duration: string;
  imagePath: string;
  micAvailability: boolean;
  adminUsername: string;
  initialPriviewUrl?: string;
}

export interface GroupCallState {
  participants: Participant[];
  streams: { [userId: number]: MediaStream | null };
  localStream: MediaStream | null;
  roomId: number;
  myUserId: number;
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


