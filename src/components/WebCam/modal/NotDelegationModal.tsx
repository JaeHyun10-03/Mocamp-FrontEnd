import NoneChiefIcon from '@/public/svgs/not_chief_fire.svg';

const NotChiefNotice = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="relative w-[570px] h-[80px] rounded-[50px] bg-[#D9D9D9] flex items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-[22px] left-[23px] bottom-[23px]">
          <NoneChiefIcon width={35} height={35} />
        </div>
        <span className="ml-[70px] text-[#555] font-pretendard text-[24px] font-semibold">
          권한을 위임하는 버튼으로 방장만 접근할 수 있어요!
        </span>
      </div>
    </div>
  );
};

export default NotChiefNotice;
