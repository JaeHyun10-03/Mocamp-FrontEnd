import { create } from 'zustand';
import { Session, Publisher } from 'openvidu-browser';

interface OpenViduState {
  session: Session | null;
  publisher: Publisher | null;
  setSession: (session: Session | null) => void;
  setPublisher: (publisher: Publisher | null) => void;
}
export const useOpenViduStore = create<OpenViduState>((set) => ({
  session: null,
  publisher: null,
  setSession: (session) => set({ session }),
  setPublisher: (publisher) => set({ publisher }),
}));
