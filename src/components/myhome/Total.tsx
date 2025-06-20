import ParticipatedCard from './content/ParticipatedCard';
import Achievement from './content/Achievement';
import GoalGraph from './content/GoalGraph';
import TimeGraph from './content/TimeGraph';
import { useDropDown } from '@/stores/myhome-store';
import DropDown from './content/DropDown';

const Total = () => {
  const { selectedType, setSelectedType } = useDropDown();
  const isCompleted: boolean = false;
  const roomName: string = '은학샘과 아이들';
  const createdAt: string = '2025.04.27';
  const time: string = '3h 30m';

  return (
    <div className="flex h-[880px] w-[982px] flex-col rounded-[20px] bg-[#ffffff] p-8">
      <div className="mb-[30px]">
        <p className="mb-[30px] text-2xl font-semibold text-[#4b4b4b]">참여한 모캠프</p>
        <div className="flex items-center gap-5">
          <ParticipatedCard
            size="lg"
            isCompleted={isCompleted}
            roomName={roomName}
            createdAt={createdAt}
            time={time}
          />
          <ParticipatedCard
            size="lg"
            isCompleted={true}
            roomName={roomName}
            createdAt={createdAt}
            time={time}
          />
        </div>
      </div>

      {/* 드롭다운 : 모캠프 사용 추이 | 목표 달성 수 */}
      <div className="mb-[35px] flex items-center gap-5">
        <p className="cursor-default text-2xl font-semibold text-[#4b4b4b]">모캠프 사용 추이</p>
        <DropDown />
      </div>

      {/* 목표 달성 요약 & 그래프 */}
      <div className="flex cursor-default flex-col gap-4 rounded-[10px] border border-[#e8e8e8] bg-white p-6">
        <div className="flex items-start gap-[65px]">
          {selectedType === '목표 달성 수' ? (
            <>
              <Achievement type="Goal" GoalNumber={123} />
              <GoalGraph />
            </>
          ) : (
            <>
              <Achievement type="Time" TimeNumber={123} />
              <TimeGraph />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Total;
