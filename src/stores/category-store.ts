import { create } from 'zustand';

export interface Category {
  category: 'MYHOME_TOTAL' | 'PARTICIPANTED_MOCAMP' | 'MOCAMP_USAGE_TREND';
}

interface MyHomeState extends Category {
  setCategory: (category: Category['category']) => void;
  resetCategory: () => void;
}

export const useCategoryStore = create<MyHomeState>((set) => ({
  category: 'MYHOME_TOTAL',

  setCategory: (category) => set({ category }),
  resetCategory: () => set({ category: 'MYHOME_TOTAL' }),
}));
