import { create } from 'zustand';
import { Publisher } from 'openvidu-browser';
import { signalingSocket } from '@/libs/socket';

interface OpenViduControlsStore {
  publisher: Publisher | null;
  isCameraOn: boolean;
  isMicOn: boolean;
  setPublisher: (publisher: Publisher) => void;
  toggleCam: () => void;
  toggleMic: () => void;
}

export const useOpenViduControlsStore = create<OpenViduControlsStore>((set, get) => ({
  publisher: null,
  isCameraOn: true,
  isMicOn: true,
  

  setPublisher: (publisher) => {
    set({ publisher });
  },

  toggleCam: () => {
    const { publisher, isCameraOn } = get();
    if (publisher) {
      publisher.publishVideo(!isCameraOn);
      set({ isCameraOn: !isCameraOn });
    }
  },

  toggleMic: () => {
    const { publisher, isMicOn } = get();
    if (publisher) {
      publisher.publishAudio(!isMicOn);
      set({ isMicOn: !isMicOn });
    }
  },
}));
