import { useState } from 'react';
import ProgressBadge from './ProgressBadge';
import ProgressBar from './ProgressBar';
import MoreMenu from './MoreMenu';
import GoalModalWrapper from '@/components/todo/modal/GoalModalWrapper';
import CommonModal from '@/components/common/modal/CommonModal';

import { useRoomPublisher } from '@/hooks/room/useRoomPublisher';
import { Goal } from '@/types/room';

interface ProgressCardProps {
  done: number;
  total: number;
  todos: Goal[];
  roomId: string;
  resolution: string;
  isMyGoal: boolean;
  isSecret: boolean;
  onUpdateTodos: (updatedTodos: Goal[]) => void;
}

const ProgressCard = ({
  done,
  total,
  todos,
  onUpdateTodos,
  roomId,
  resolution,
  isMyGoal,
  isSecret,
}: ProgressCardProps) => {
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [showCommitmentModal, setShowCommitmentModal] = useState(false);
  const [todayCommitment, setTodayCommitment] = useState(resolution);
  const progress = total === 0 ? 0 : Math.round((done / total) * 100);
  const { updateResolution } = useRoomPublisher(roomId);

  return (
    <div className="flex h-20 w-64 flex-col justify-between gap-[10.67px] rounded-[10.667px] bg-[#FEFEFE] p-4 lg:h-[112.5px] lg:w-90 lg:gap-[15px] lg:rounded-[15px] lg:p-[22.5px] xl:h-[150px] xl:w-120 xl:gap-5 xl:rounded-[20px] xl:p-[30px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <ProgressBadge done={done} total={total} />
          <span className="text-gray9 ml-[10.71px] text-[10.67px] font-medium lg:ml-[15.06px] lg:text-[15px] xl:ml-5 xl:text-xl">
            {todayCommitment.trim() !== '' ? todayCommitment : '오늘의 다짐을 작성해주세요'}
          </span>
        </div>
        {isMyGoal && (
          <MoreMenu
            onEditCommitment={() => setShowCommitmentModal(true)}
            onEditGoal={() => setShowGoalModal(true)}
          />
        )}
      </div>
      <ProgressBar value={progress} />

      {showGoalModal && (
        <GoalModalWrapper
          roomId={roomId}
          onClose={() => setShowGoalModal(false)}
          mode="edit"
          todos={todos}
          onSubmit={onUpdateTodos}
          isSecret={isSecret}
        />
      )}

      {showCommitmentModal && (
        <CommonModal
          onClose={() => setShowCommitmentModal(false)}
          title="오늘의 다짐"
          description="오늘의 다짐이나 포부를 한 줄로 작성할 수 있어요"
          placeholder="다짐 쓰기를 통해 꿈을 이루기 위한 첫 걸음을 내딛으세요"
          initialValue={resolution}
          onSubmit={(value) => {
            setTodayCommitment(value); // 로컬 상태 저장
            updateResolution(value); // pub 전송
            setShowCommitmentModal(false); // 모달 닫기
          }}
        />
      )}
    </div>
  );
};

export default ProgressCard;
