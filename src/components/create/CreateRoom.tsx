import { useState } from 'react';
import CloseIcon from '@/public/svgs/closeIcon.svg';
import ToggleMicButton from './ToggleMicButton';
import LabeledBox from './LabeledBox';
import NumberInput from './NumberInput';
import ImageUploadBox from './ImageUploadBox';

interface CreateRoomProps {
  onClose: () => void;
}

const CreateRoom = ({ onClose }: CreateRoomProps) => {
  const [micOn, setMicOn] = useState(true);
  const [roomName, setRoomName] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [headcount, setHeadcount] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const isFormValid =
    roomName.trim() !== '' &&
    (parseInt(hour || '0') > 0 || parseInt(minute || '0') > 0) &&
    parseInt(headcount || '0') >= 1 &&
    imageFile !== null;

  const isValidHour = (val: string) => val === '' || (Number(val) >= 0 && Number(val) <= 12);

  const isValidMinute = (val: string) => val === '' || (Number(val) >= 0 && Number(val) <= 59);

  const isValidHeadcount = (val: string) => val === '' || (Number(val) >= 1 && Number(val) <= 5);

  const handleMicClick = () => {
    setMicOn((prev) => !prev);
  };

  return (
    <>
      {/* 방 생성 모달 제목 */}
      <div className="flex justify-between h-[38px] items-start">
        <span className="flex items-center text-[32px] leading-[38px] h-full font-semibold text-[#555555]">
          방 생성하기
        </span>
        <CloseIcon className="w-[29px] h-[29px] cursor-pointer" onClick={onClose} />
      </div>

      {/* 방 이름 + 마이크 설정 */}
      <div className="flex mt-3 gap-5">
        <LabeledBox label="방 이름 *" description="최대 20자">
          <div className="flex items-center w-[350px] h-[90px] bg-[#f2f2f2] px-10 rounded-[10px]">
            <input
              value={roomName}
              onChange={(e) => {
                if (e.target.value.length <= 20) {
                  setRoomName(e.target.value);
                }
              }}
              placeholder="방 이름을 설정해주세요"
              className="w-full bg-transparent outline-none placeholder-[#c4c4c4] text-[20px]"
            />
          </div>
        </LabeledBox>

        <LabeledBox label="마이크 설정 *">
          <div className="flex items-center justify-center w-[190px] h-[90px] bg-[#f2f2f2] px-10 py-5 rounded-[10px]">
            <ToggleMicButton micOn={micOn} onToggle={handleMicClick} />
          </div>
        </LabeledBox>
      </div>

      {/* 진행 시간 + 인원 수 */}
      <div className="flex gap-5">
        <LabeledBox label="진행 시간 *" description="최대 12시간">
          <div className="flex justify-center items-center w-[350px] h-[90px] bg-[#f2f2f2] px-10 rounded-[10px] gap-[10px]">
            <NumberInput
              placeholder="00"
              value={hour}
              onChange={(event) => {
                const value = event.target.value;
                if (isValidHour(value)) setHour(value);
              }}
              width="max-w-[70px]"
            />
            시간
            <NumberInput
              placeholder="00"
              value={minute}
              onChange={(event) => {
                const value = event.target.value;
                if (isValidMinute(value)) setMinute(value);
              }}
              width="max-w-[70px]"
            />
            분
          </div>
        </LabeledBox>

        <LabeledBox label="인원 수 *" description="최대 5명">
          <div className="flex items-center justify-center w-[190px] h-[90px] bg-[#f2f2f2] px-10 py-5 rounded-[10px] gap-[10px]">
            <NumberInput
              placeholder="0"
              value={headcount}
              onChange={(event) => {
                const value = event.target.value;
                if (isValidHeadcount(value)) setHeadcount(value);
              }}
              width="max-w-[55px]"
              minWidth="min-w-[15px]"
            />
            명
          </div>
        </LabeledBox>
      </div>

      {/* 대표 이미지 설정 */}
      <ImageUploadBox label="대표 이미지 설정 *" onImageSelect={(file) => setImageFile(file)} />

      {/* 생성 버튼 */}
      <button
        className={`w-[560px] h-[84px] shrink-0 text-[20px] font-semibold rounded-[10px] ${
          isFormValid
            ? 'bg-[#27CFA5] text-white cursor-pointer'
            : 'bg-[#f2f2f2] text-[#c4c4c4] cursor-not-allowed'
        }`}
        disabled={!isFormValid}
      >
        모캠프 생성하기
      </button>
    </>
  );
};

export default CreateRoom;
