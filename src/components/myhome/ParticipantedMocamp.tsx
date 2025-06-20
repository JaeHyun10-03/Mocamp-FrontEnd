import DropDown from './content/DropDown';
import GoalGraph from './content/GoalGraph';

const ParticipantedMocamp = () => {
  return (
    <div className="flex h-[880px] w-[982px] flex-col rounded-[20px] bg-[#ffffff] p-8">
      {/* 드롭다운 : 모캠프 사용 추이 | 목표 달성 수 */}
      <div className="mb-[35px] flex items-center gap-5">
        <p className="cursor-default text-2xl font-semibold text-[#4b4b4b]">모캠프 사용 추이</p>
        <DropDown />
      </div>

      <div className="flex h-[50px] w-[882px] items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-[#27cfa5]">
        <p className="text-base text-white">주은님이 그동안 집중한 시간은?</p>
      </div>
      <div className="flex h-[117px] w-[882px] items-center justify-center rounded-br-[10px] rounded-bl-[10px] border border-[#e8e8e8] bg-white">
        <p className="text-[28px] font-semibold text-[#555555]">
          그동안 주은님은 123분 동안 작업했어요!
        </p>
      </div>

      <div className="flex cursor-default flex-col gap-4 rounded-[10px] border border-[#e8e8e8] bg-white p-6">
        <GoalGraph />
      </div>
    </div>
  );
};

export default ParticipantedMocamp;
