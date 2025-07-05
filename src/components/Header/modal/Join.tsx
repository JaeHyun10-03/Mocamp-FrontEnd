import { useState } from 'react';
import ModalLayout from '@/components/common/modal/ModalLayout';
import CloseButton from '@/public/svgs/CloseButton.svg';

interface JoinRoomModalProps {
  onClose: () => void;
  onJoin: (roomSeq: string) => void;
}

const JoinRoomModal = ({ onClose, onJoin }: JoinRoomModalProps) => {
  const [roomSeq, setRoomSeq] = useState('');

  const isValidSeq = roomSeq.length === 8;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomSeq(event.target.value);
  };

  const handleJoinClick = () => {
    if (isValidSeq) {
      onJoin(roomSeq);
    }
  };

  return (
    <ModalLayout onClose={onClose} className="h-[406px] w-[660px]">
      {/* 닫기 버튼 */}
      <button
        onClick={onClose}
        className="text-gray5 absolute top-[50px] right-[50px] h-[25px] w-[25px]"
      >
        <CloseButton />
      </button>

      <div className="mb-8">
        <h3 className="font-pre mb-2 text-[32px] font-semibold text-[#555]">모캠프 참여하기</h3>
        <p className="font-pre text-lg font-medium text-[#a7a7a7]">
          전달받은 고유번호를 아래 칸에 입력해주세요
        </p>
      </div>

      <input
        value={roomSeq}
        onChange={handleInputChange}
        maxLength={8}
        className="font-pre mb-6 h-[83px] w-full rounded-[10px] border border-[#e8e8e8] px-10 py-5 text-center text-xl text-[#555] placeholder-[#c4c4c4] focus:outline-none"
        placeholder="방 고유번호 입력하세요"
      />

      <button
        onClick={handleJoinClick}
        disabled={!isValidSeq}
        className={`font-pre h-[84px] w-full rounded-[10px] px-10 py-[30px] text-xl font-semibold ${
          isValidSeq ? 'bg-[#27CFA5] text-white' : 'bg-[#e9e9e9] text-[#a7a7a7]'
        }`}
      >
        참여하기
      </button>
    </ModalLayout>
  );
};

export default JoinRoomModal;