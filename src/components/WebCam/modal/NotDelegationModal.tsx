import NoneChiefIcon from '@/public/svgs/not_chief_fire.svg';

const NotChiefNotice = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40"
      onClick={onClose}
    >
      <div
        className="absolute left-1/2 top-[134px] z-50 flex h-[80px] w-[570px] -translate-x-1/2 items-center rounded-[50px] bg-[#D9D9D9]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-[22px] left-[23px] bottom-[23px]">
          <NoneChiefIcon width={35} height={35} />
        </div>
        <span className="ml-[70px] text-[#555] font-pre text-[24px] font-semibold">
          권한을 위임하는 버튼으로 방장만 접근할 수 있어요!
        </span>
      </div>
    </div>
  );
};

export default NotChiefNotice;
