import { create } from 'zustand';

interface RoomStore {
  myUserId: number | null;
  myUsername: string;
  adminUsername: string | null;
  isAdmin: boolean;
  isHost: boolean;
  setMyUserId: (id: number) => void;
  setMyUsername: (username: string) => void;
  setAdminUsername: (username: string) => void;
  setIsHost: (isHost: boolean) => void;
}

export const useRoomStoreName = create<RoomStore>((set, get) => ({
  myUserId: null,
  myUsername: '',
  adminUsername: null,
  isAdmin: false,
  isHost: false,

  setMyUserId: (id) => {
    const { adminUsername } = get();
    const isAdmin = adminUsername !== null && get().myUsername === adminUsername;
    set({ myUserId: id, isAdmin });
  },



  setMyUsername: (username) => {
    const { adminUsername } = get();
    const isAdmin = adminUsername !== null && username === adminUsername;
    set({ myUsername: username, isAdmin });
  },

  setAdminUsername: (username) => {
    const { myUsername } = get();
    const isAdmin = myUsername === username;
    set({ adminUsername: username, isAdmin });
  },

  setIsHost: (isHost) => set({ isHost }),
}));
