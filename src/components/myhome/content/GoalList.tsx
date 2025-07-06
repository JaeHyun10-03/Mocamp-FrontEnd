import { GoalDetail } from '@/types/myhome';
import GoalItem from './GoalItem';

interface GoalListProps {
  selectedDate: string | null;
  goals: GoalDetail[];
}

// 날짜 형식 변환 함수
const formatDate = (date: string | null): string | null => {
  if (!date) return null;

  const [month, day] = date.split('.');
  return `${month}월 ${day}일`;
};

const GoalList = ({ selectedDate, goals }: GoalListProps) => {
  const formattedDate = formatDate(selectedDate);

  return (
    <div className="border-gray4 h-[468px] w-[248px] rounded-[10px] border p-5">
      <p className="text-body1 text-gray9 mt-2.5 mb-1.25">{formattedDate}</p>
      <p className="text-gray7 mb-6.25">{formattedDate && `목표 달성 수 ${goals.length}개`}</p>
      <div
        className={`scrollbar-hide max-h-[340px] overflow-y-auto ${
          !selectedDate ? 'flex items-center justify-center' : ''
        }`}
      >
        {goals.length > 0 ? (
          goals.map((goal) => (
            <GoalItem key={goal.goalId} completed={goal.isCompleted}>
              {goal.content}
            </GoalItem>
          ))
        ) : selectedDate ? (
          <div className="text-gray6 flex h-[300px] items-center justify-center text-center">
            <div>
              <p>이 날짜에 완료된</p>
              <p>목표가 없습니다</p>
            </div>
          </div>
        ) : (
          <div className="text-gray6 flex h-[426px] flex-col items-center justify-center text-center">
            <p>막대를 클릭하여</p>
            <p>나의 성취를 확인하세요</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoalList;
