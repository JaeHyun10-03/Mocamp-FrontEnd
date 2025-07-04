/* 마이홈 상태 관리 */
import { ChartType } from '@/types/myhome';
import { create } from 'zustand';

export interface Myhome {
  profileImage: string;
  username: string;
  goalList: [];
  roomList: Room[];
  timeList: [];
  totalDurationMinute: number;
  totalNumberOfGoals: number;
  setMyhome: (data: any) => void;
}

export interface DropDown {
  selectedType: ChartType;
  setSelectedType: (selectedType: ChartType) => void;
}

export interface Room {
  roomId: number;
  duration: string;
  status: boolean;
  roomName: string;
  startedAt: string;
}

export const useMyhomeStore = create<Myhome>((set) => ({
  profileImage: '',
  username: '',
  goalList: [],
  roomList: [],
  timeList: [],
  totalDurationMinute: 0,
  totalNumberOfGoals: 0,
  setMyhome: (data) =>
    set(() => ({
      profileImage: data.profileImage,
      username: data.username,
      goalList: data.goalList,
      roomList: data.roomList,
      timeList: data.timeList,
      totalDurationMinute: data.totalDurationMinute,
      totalNumberOfGoals: data.totalNumberOfGoals,
    })),
}));

export const useDropDown = create<DropDown>((set) => ({
  selectedType: '목표 달성 수',
  setSelectedType: (selectedType: ChartType) => set({ selectedType }),
}));
