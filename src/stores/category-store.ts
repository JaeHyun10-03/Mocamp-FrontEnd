import { create } from 'zustand';

export interface Category {
  category: 'MYHOME_TOTAL' | 'PARTICIPANTED_MOCAMP' | 'MOCAMP_USAGE_TREND';
  isProfileModal: boolean;
}

interface MyHomeState extends Category {
  setCategory: (category: Category['category']) => void;
  resetCategory: () => void;
  setIsProfileModal: (isProfileModal: boolean) => void;
}

export const useCategoryStore = create<MyHomeState>((set) => ({
  isProfileModal: false,
  category: 'MYHOME_TOTAL',

  setIsProfileModal: (isProfileModal: boolean) => set({ isProfileModal }),
  setCategory: (category) => set({ category }),
  resetCategory: () => set({ category: 'MYHOME_TOTAL' }),
}));
