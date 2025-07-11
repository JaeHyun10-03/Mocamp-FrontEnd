import React from 'react';

interface SidebarExitModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const SidebarExitModal = ({ onConfirm, onCancel }: SidebarExitModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center bg-[#D9D9D9]/80 pt-[58.67px] lg:pt-[82.5px] xl:pt-[110px]">
      <div className="relative h-[127px] w-[576px] rounded-br-[20px] rounded-bl-[20px] bg-white lg:h-[172.5px] lg:w-[810px] xl:h-[230px] xl:w-[1080px]">
        <div className="bg-primary h-[5.33px] w-full lg:h-[7.5px] xl:h-[10px]" />
        <p className="absolute top-[31px] left-[50%] w-full -translate-x-1/2 transform text-center text-[15px] font-semibold text-[#555555] lg:top-[43.5px] lg:text-[21px] xl:top-[58px] xl:text-[28px]">
          아직 목표를 다 완수하지 못했어요! 그래도 방을 나가실건가요?
        </p>
        <div className="absolute bottom-[31.13px] left-[50%] flex -translate-x-1/2 transform gap-[13.16px] text-[9.6px] font-semibold lg:bottom-[43.25px] lg:gap-[20px] lg:text-[13.5px] xl:bottom-[58px] xl:gap-[26px] xl:text-lg">
          <button
            onClick={onConfirm}
            className="rounded-[5.333px] border border-[#27cfa5] bg-white px-4 py-2 lg:rounded-[7.5px] lg:px-[22.5px] lg:py-[11.25px] xl:rounded-[10px] xl:px-[30px] xl:py-[15px]"
          >
            <span className="text-[#27cfa5]">네, 나갈래요</span>
          </button>
          <button
            onClick={onCancel}
            className="rounded-[5.333px] bg-[#27cfa5] px-4 py-2 lg:rounded-[7.5px] lg:px-[22.5px] lg:py-[11.25px] xl:rounded-[10px] xl:px-[30px] xl:py-[15px]"
          >
            <span className="text-white">아니요, 계속 할래요</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarExitModal;
