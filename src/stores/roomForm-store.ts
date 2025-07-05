import { create } from 'zustand';

interface RoomFormData {
  roomName: string;
  capacity: number;
  duration: string;
  micAvailability: boolean;
  micTurnedOn: boolean;
  camTurnedOn: boolean;
  image: File;
}

interface RoomFormStore {
  formData: RoomFormData;
  setFormData: (data: RoomFormData) => void;
  resetFormData: () => void;
}

export const useRoomFormStore = create<RoomFormStore>((set) => ({
  formData: {
    roomName: '',
    capacity: 1,
    duration: '',
    micAvailability: true,
    micTurnedOn: true,
    camTurnedOn: true,
    image: new File([], ''),
  },
  setFormData: (data) => set({ formData: data }),
  resetFormData: () =>
    set({
      formData: {
        roomName: '',
        capacity: 1,
        duration: '',
        micAvailability: true,
        micTurnedOn: true,
        camTurnedOn: true,
        image: new File([], ''),
      },
    }),
}));
