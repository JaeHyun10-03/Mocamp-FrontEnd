/* 마이홈 상태 관리 */
import { ChartType } from '@/types/myhome';
import { create } from 'zustand';

export interface Myhome {
  profileImage: string;
  username: string;
  roomList: Room[];
  setMyhome: (data: Myhome) => void;
}

export interface DropDown {
  selectedType: ChartType;
  setSelectedType: (selectedType: ChartType) => void;
}

export interface Room {
  status: boolean; // isComplete : true or false
  room_name: string;
  started_at: string;
  duration: string;
}

export const useMyhomeStore = create<Myhome>((set) => ({
  profileImage: '',
  username: '',
  roomList: [],
  setMyhome: (data) =>
    set(() => ({
      profileImage: data.profileImage,
      username: data.username,
      roomList: data.roomList,
    })),
}));

export const useDropDown = create<DropDown>((set) => ({
  selectedType: '목표 달성 수',
  setSelectedType: (selectedType: ChartType) => set({ selectedType }),
}));
