// 사이드바 - 인원수 표시
interface SidebarParticipantsProps {
  participants: number;
}

const SidebarParticipants = ({ participants }: SidebarParticipantsProps) => {
  return (
    <div className="absolute top-[225.07px] left-[13.3px] flex h-fit w-20 flex-col justify-center gap-[10px] rounded-[10px] border border-[#E8E8E8] bg-white p-[10.67px] lg:top-[316.5px] lg:left-[18.75px] lg:w-[112.5px] lg:p-[15px] xl:top-[422px] xl:left-[25px] xl:w-[150px] xl:p-5">
      <div className="flex items-center justify-between text-[10.667px] lg:text-[15px] xl:text-xl">
        <span className="font-pre font-semibold text-[#27CFA5]">참여 인원</span>
        <span className="font-pre font-medium text-[#555555]">{participants}</span>
      </div>
    </div>
  );
};
export default SidebarParticipants;
