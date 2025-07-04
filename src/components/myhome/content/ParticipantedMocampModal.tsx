import GoalDetailItem from './GoalDetailItem';
import CloseButton from '@/public/svgs/CloseButton.svg';

interface Props {
  setIsOpen: (open: boolean) => void;
}

const ParticipantedMocampModal = ({ setIsOpen }: Props) => {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85"
    >
      <div
        className="relative flex h-[880px] w-[660px] flex-col rounded-[20px] bg-white p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton
          onClick={() => setIsOpen(false)}
          className="text-gray5 absolute top-[50px] right-[50px] h-[25px] w-[25px] cursor-pointer"
        />

        <div className="mb-8">
          <h2 className="mb-3 text-[32px] font-semibold text-[#555]">세부 목표 확인</h2>
          <p className="text-lg font-medium text-[#a7a7a7]">
            은학샘과 아이들에서 설정한 목표를 확인할 수 있어요
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-5">
          <GoalDetailItem isCompleted={true}>나의 목표1</GoalDetailItem>
          <GoalDetailItem isCompleted={false}>나의 목표2</GoalDetailItem>
        </div>
      </div>
    </div>
  );
};

export default ParticipantedMocampModal;
