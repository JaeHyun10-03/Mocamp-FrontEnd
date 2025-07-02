// 사이드바 나가기 버튼튼
import { useState } from 'react';
import SidebarExitModal from '@/components/Sidebar/modal/SidebarExitModal';
import Portal from '../common/modal/Portal';

interface SidebarExitProps {
  onLeaveRoom: () => void; //
}

const SidebarExit = ({ onLeaveRoom }: SidebarExitProps) => {
  const [isExitModalOpen, setExitModalOpen] = useState(false);

  const handleExitClick = () => setExitModalOpen(true);
  const handleConfirmExit = () => {
    onLeaveRoom();
    setExitModalOpen(false);
  };

  const handleCancelExit = () => {
    setExitModalOpen(false);
  };

  return (
    <>
      <div className="absolute bottom-[15.8px] left-[13.3px] flex max-h-[64px] w-20 items-center justify-center rounded-[10px] border border-[#E8E8E8] bg-white p-[10.67px] lg:bottom-[22.5px] lg:left-[18.75px] lg:w-[112.5px] lg:p-[15px] xl:bottom-7.5 xl:left-[25px] xl:w-[150px] xl:p-5">
        <button
          onClick={handleExitClick}
          className="font-pre flex h-fit w-full items-center justify-center rounded bg-transparent text-[10.667px] leading-[1] font-bold tracking-[-0.02em] text-[#555555] lg:text-[15px] xl:text-xl"
        >
          방 나가기
        </button>
      </div>

      {isExitModalOpen && (
        <Portal>
          <SidebarExitModal onConfirm={handleConfirmExit} onCancel={handleCancelExit} />
        </Portal>
      )}
    </>
  );
};

export default SidebarExit;
