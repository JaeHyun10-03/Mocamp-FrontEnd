import { create } from 'zustand';

import { Publisher } from 'openvidu-browser';
interface OpenViduState {
  publisher: Publisher | null;
  setPublisher: (publisher: Publisher) => void;
}

export const useOpenViduStore = create<OpenViduState>((set) => ({
  publisher: null,
  setPublisher: (publisher) => set({ publisher }),
}));
