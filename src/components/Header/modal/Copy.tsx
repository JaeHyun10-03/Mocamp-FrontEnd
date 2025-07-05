import CheckIcon from '@/public/svgs/CheckGray.svg';

const CopyComplete = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/40" onClick={onClose}>
      <div
        className="absolute top-[134px] left-1/2 z-50 flex h-[80px] w-[360px] -translate-x-1/2 items-center justify-start gap-[14px] rounded-[50px] bg-[#D9D9D9] px-[24px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 아이콘이 계속 잘려나감.. */}
        <div className="flex h-[40px] w-[40px] items-center justify-center">
          <CheckIcon className="h-full w-full" />
        </div>
        <span className="font-pre text-[20px] leading-none font-semibold whitespace-nowrap text-[#555]">
          고유 번호가 복사 되었습니다!
        </span>
      </div>
    </div>
  );
};

export default CopyComplete;