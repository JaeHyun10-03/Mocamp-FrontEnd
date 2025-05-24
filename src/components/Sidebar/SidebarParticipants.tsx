// 사이드바 - 인원수 표시
interface SidebarParticipantsProps {
    participants: number;
}

const SidebarParticipants= ({ participants }: SidebarParticipantsProps) => {
    return (
        <div className="w-[152px] h-[60px] absolute top-[350px] left-[25px] rounded-[10px] border border-[#E8E8E8] bg-white flex flex-col justify-center gap-[10px] p-[20px]">
            <div className="flex items-center justify-between">
                <span className="font-pre font-semibold text-[18px] text-[#27CFA5]">참여 인원</span>
                <span className="font-pre font-medium text-[18px] text-[#555555]">{participants}</span>
            </div>
        </div>
    );
};
export default  SidebarParticipants;