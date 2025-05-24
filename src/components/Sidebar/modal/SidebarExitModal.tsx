// 사이드바 나가기 모달
import React from 'react';

interface SidebarExitModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const SidebarExitModal = ({ onConfirm, onCancel }: SidebarExitModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[1080px] h-[230px] rounded-bl-[20px] rounded-br-[20px] bg-white relative">
        <p className="absolute left-[50%] top-[40px] transform -translate-x-1/2 text-[28px] font-semibold text-[#555555] text-center">
          아직 목표를 다 완수하지 못했어요!
          <br />
          그래도 방을 나가실건가요?
        </p>
        <div className="absolute bottom-[30px] left-[50%] transform -translate-x-1/2 flex gap-[20px]">
          <button
            onClick={onConfirm}
            className="px-[30px] py-[15px] rounded-[10px] bg-white border border-[#27cfa5]"
          >
            <span className="text-lg font-semibold text-[#27cfa5]">
              네, 나갈래요
            </span>
          </button>
          <button
            onClick={onCancel}
            className="px-[30px] py-[15px] rounded-[10px] bg-[#27cfa5]"
          >
            <span className="text-lg font-semibold text-white">
              아니요, 계속 할래요
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarExitModal;
