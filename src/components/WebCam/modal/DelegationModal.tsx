import { useState } from 'react';
import { Participant } from '@/types/room';
import CloseButton from '@/public/svgs/CloseButton.svg';
import SelectIcon from '@/public/svgs/select.svg';
import NoneIcon from '@/public/svgs/none.svg';
import ModalLayout from '@/components/common/modal/ModalLayout';


interface DelegationModalProps {
  participants: Participant[];
  currentUserId: number;
  selectedUserId: number | null;
  onSelect: (userId: number) => void;
  onConfirm: () => void;
  onClose: () => void;
}

const DelegationModal = ({
  participants,
  currentUserId,
  selectedUserId,
  onSelect,
  onConfirm,
  onClose,
}: DelegationModalProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const delegatableParticipants = participants.filter(
    (p: Participant) => p.userId !== currentUserId,
  );

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSelectAndClose = (userId: number) => {
    onSelect(userId);
    setIsDropdownOpen(false);
  };

  return (
    <ModalLayout onClose={onClose} className="h-[406px] w-[660px]">
      <button onClick={onClose} className="text-gray5 absolute top-[50px] right-[50px] h-[25px] w-[25px]">
        <CloseButton />
      </button>

      <div className="mb-8">
        <h3 className="mb-2 text-[32px] font-semibold text-[#555]">방장 권한 위임하기</h3>
        <p className="text-lg font-medium text-[#a7a7a7]">모캠프는 방장이 꼭 필요해요</p>
      </div>

      <div className="relative mb-6">
        <button
          type="button"
          onClick={toggleDropdown}
          className="flex h-[83px] w-full items-center justify-between rounded-[10px] border border-[#e8e8e8] bg-white px-10 py-5 text-xl font-medium focus:ring-0 focus:outline-none"
        >
          <span className={selectedUserId ? 'text-[#555]' : 'text-[#c4c4c4]'}>
            {selectedUserId
              ? delegatableParticipants.find((p) => p.userId === selectedUserId)?.username
              : '방장 권한을 위임할 사용자를 선택하세요'}
          </span>
          <span className="text-[#c4c4c4]">▼</span>
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full right-0 z-10 inline-flex max-h-[568px] w-[182px] flex-col items-start gap-[50px] overflow-y-auto rounded-[10px] border border-[#e8e8e8] bg-white p-[50px]">
            {delegatableParticipants.length > 0 ? (
              delegatableParticipants.map((p) => (
                <button
                  key={p.userId}
                  type="button"
                  onClick={() => handleSelectAndClose(p.userId)}
                  className="flex w-full items-center text-left"
                >
                  <div className="mr-4 h-[20px] w-[20px] flex-shrink-0">
                    {p.userId === selectedUserId ? (
                      <SelectIcon width={20} height={20} />
                    ) : (
                      <NoneIcon width={20} height={20} />
                    )}
                  </div>
                  <span className="text-xl font-medium whitespace-nowrap text-[#555]">
                    {p.username}
                  </span>
                </button>
              ))
            ) : (
              <p className="w-full py-4 text-center whitespace-nowrap text-[#A7A7A7]">
                참가자 없어요!
              </p>
            )}
          </div>
        )}
      </div>

      <button
        onClick={onConfirm}
        disabled={!selectedUserId}
        className={`flex h-[84px] w-full items-center justify-center rounded-[10px] px-10 py-[30px] text-xl font-semibold text-white ${
          selectedUserId ? 'bg-[#27CFA5]' : 'bg-[#e9e9e9]'
        }`}
      >
        권한 위임하기
      </button>
    </ModalLayout>
  );
};

export default DelegationModal;
