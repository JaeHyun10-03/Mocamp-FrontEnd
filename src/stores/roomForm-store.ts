import { create } from 'zustand';

interface RoomFormData {
  roomId?: string;
  roomName: string;
  capacity: number;
  duration: string;
  micAvailability: boolean;
  micTurnedOn: boolean;
  camTurnedOn: boolean;
  image: File;
  initialPreviewUrl?: string;
  startedAt: string;
}

interface RoomFormStore {
  formData: RoomFormData;
  setFormData: (data: RoomFormData) => void;
  resetFormData: () => void;
}

export const useRoomFormStore = create<RoomFormStore>((set) => ({
  formData: {
    roomId: '',
    roomName: '',
    capacity: 1,
    duration: '',
    micAvailability: true,
    micTurnedOn: true,
    camTurnedOn: true,
    image: new File([], ''),
    initialPreviewUrl: '',
    startedAt: '',
  },
  setFormData: (data) => set({ formData: data }),
  resetFormData: () =>
    set({
      formData: {
        roomId: '',
        roomName: '',
        capacity: 1,
        duration: '',
        micAvailability: true,
        micTurnedOn: true,
        camTurnedOn: true,
        image: new File([], ''),
        initialPreviewUrl: '',
        startedAt: '',
      },
    }),
}));
