import { create } from 'zustand';

interface Tutorial {
  step: number; // string에서 number로 변경
  startTutorial: () => void;
  nextTutorial: () => void;
  endTutorial: () => void;
}

export const useTutorial = create<Tutorial>((set) => ({
  step: 0,
  startTutorial: () => set({ step: 1 }),
  nextTutorial: () => set((state) => ({ step: state.step + 1 })),
  endTutorial: () => set({ step: 0 }),
}));
