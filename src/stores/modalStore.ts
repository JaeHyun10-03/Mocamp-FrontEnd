import { create } from 'zustand';

interface ModalState {
  isDelegationModalOpen: boolean;
  isNotDelegationModalOpen: boolean;
  openDelegationModal: () => void;
  closeDelegationModal: () => void;
  openNotDelegationModal: () => void;
  closeNotDelegationModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isDelegationModalOpen: false,
  isNotDelegationModalOpen: false,
  openDelegationModal: () => set({ isDelegationModalOpen: true }),
  closeDelegationModal: () => set({ isDelegationModalOpen: false }),
  openNotDelegationModal: () => set({ isNotDelegationModalOpen: true }),
  closeNotDelegationModal: () => set({ isNotDelegationModalOpen: false }),
}));
