import ParticipatedCard from './content/ParticipatedCard';
import Achievement from './content/Achievement';
import GoalGraph from './content/GoalGraph';
import TimeGraph from './content/TimeGraph';
import { Room, useDropDown } from '@/stores/myhome-store';
import DropDown from './content/DropDown';
import { useState } from 'react';

interface TotalProps {
  roomList: Room[];
  timeList: [];
  goalList: [];
  totalDurationMinute: number;
  totalNumberOfGoals: number;
}

const Total = ({
  roomList,
  goalList,
  timeList,
  totalDurationMinute,
  totalNumberOfGoals,
}: TotalProps) => {
  const { selectedType, setSelectedType } = useDropDown();
  const [selectedDate, setSelectedDate] = useState<string>(''); // 날짜 선택 상태 추가

  // 날짜 클릭 핸들러
  const handleDateClick = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex h-[880px] w-[982px] flex-col rounded-[20px] bg-[#ffffff] p-8">
      <div className="mb-[30px]">
        <p className="mb-[30px] text-2xl font-semibold text-[#4b4b4b]">참여한 모캠프</p>
        <div className="flex items-center gap-5">
          {roomList.length > 0 ? (
            roomList
              .slice(0, 2) // 마지막 2개만 가져오기
              .map((room: Room) => (
                <ParticipatedCard
                  key={room.roomId}
                  roomId={room.roomId}
                  size="lg"
                  status={room.status}
                  roomName={room.roomName}
                  createdAt={room.startedAt}
                  time={room.duration}
                />
              ))
          ) : (
            <div className="flex h-[169px] w-full flex-col items-center justify-center gap-2 rounded-[0.625rem] border border-[#E8E8E8] bg-white px-[1.25rem] py-[2.625rem]">
              <p className="text-body1 text-gray6">모캠프 참여하기 & 생성하기</p>
              <p className="text-body1 text-gray6">버튼을 눌러 시작해보세요</p>
            </div>
          )}
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
          {roomList.length > 0 ? (
            <>
              {selectedType === '목표 달성 수' && (
                <>
                  <Achievement type="Goal" GoalNumber={totalNumberOfGoals} />
                  <GoalGraph
                    goalList={goalList}
                    onDateClick={handleDateClick}
                    selectedDate={selectedDate}
                  />
                </>
              )}
              {selectedType === '사용시간' && (
                <>
                  <Achievement type="Time" TimeNumber={totalDurationMinute} />
                  <TimeGraph
                    timeList={timeList}
                    goalList={goalList}
                    onDateClick={handleDateClick}
                    selectedDate={selectedDate}
                  />
                </>
              )}
            </>
          ) : (
            <div className="flex h-[390px] w-full items-center justify-center">
              <p className="text-gray6 text-body1">모캠프 사용 이력이 없습니다</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Total;
