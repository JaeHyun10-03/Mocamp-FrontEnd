import { useState } from 'react';
import ProgressBadge from './ProgressBadge';
import ProgressBar from './ProgressBar';
import MoreMenu from './MoreMenu';
import GoalModalWrapper from '@/components/todo/modal/GoalModalWrapper';
import CommonModal from '@/components/common/modal/CommonModal';
import { Todo } from '@/types/todo';

interface ProgressCardProps {
  done: number;
  total: number;
  todos: Todo[];
  onUpdateTodos: (updatedTodos: Todo[]) => void;
}

const ProgressCard = ({
  done,
  total,
  todos,
  onUpdateTodos,
}: ProgressCardProps) => {
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [showCommitmentModal, setShowCommitmentModal] = useState(false);
  const [todayCommitment, setTodayCommitment] = useState('');
  const progress = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div className="flex h-[150.38px] w-[480px] flex-col justify-between rounded-[20px] bg-[#FEFEFE] px-[30px] py-[30.48px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <ProgressBadge done={done} total={total} />
          <span className="ml-5 text-xl font-medium text-[#555555]">
            {todayCommitment.trim() !== ''
              ? todayCommitment
              : '오늘의 다짐을 작성해주세요'}
          </span>
        </div>
        <MoreMenu
          onEditCommitment={() => setShowCommitmentModal(true)}
          onEditGoal={() => setShowGoalModal(true)}
        />
      </div>
      <ProgressBar value={progress} />

      {showGoalModal && (
        <GoalModalWrapper
          onClose={() => setShowGoalModal(false)}
          mode="edit"
          todos={todos}
          onSubmit={onUpdateTodos}
        />
      )}

      {showCommitmentModal && (
        <CommonModal
          onClose={() => setShowCommitmentModal(false)}
          title="오늘의 다짐"
          description="오늘의 다짐이나 포부를 한 줄로 작성할 수 있어요"
          placeholder="다짐 쓰기를 통해 꿈을 이루기 위한 첫 걸음을 내딛으세요"
          onSubmit={(value) => {
            setTodayCommitment(value);
            setShowCommitmentModal(false);
          }}
        />
      )}
    </div>
  );
};

export default ProgressCard;
