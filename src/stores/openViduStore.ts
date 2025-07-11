import { create } from 'zustand';
import { Session ,Publisher } from 'openvidu-browser';

interface OpenViduState {
   session: Session | null;
   setSession: (session: Session) => void;
  publisher: Publisher | null;
  isCameraOn: boolean;
  isMicOn: boolean;
  setPublisher: (p: Publisher) => void;
  setIsCameraOn: (v: boolean) => void;
  setIsMicOn: (v: boolean) => void;
}

export const useOpenViduStore = create<OpenViduState>((set) => ({
   session: null,
     setSession: (session) => set({ session }),
  publisher: null,
  isCameraOn: true,
  isMicOn: true,
  setPublisher: (p) => set({ publisher: p }),
  setIsCameraOn: (v) => set({ isCameraOn: v }),
  setIsMicOn: (v) => set({ isMicOn: v }),
}));
