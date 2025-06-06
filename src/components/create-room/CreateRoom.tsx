import clsx from 'clsx';

import { useRoomForm, RoomFormInput } from '@/hooks/useRoomForm';
import { createRoom } from '@/apis/room';
import CloseIcon from '@/public/svgs/closeIcon.svg';

import ToggleMicButton from './ToggleMicButton';
import LabeledBox from './LabeledBox';
import NumberInput from './NumberInput';
import ImageUploadBox from './ImageUploadBox';
import { useRouter } from 'next/navigation';

interface CreateRoomProps {
  onClose: () => void;
}

const CreateRoom = ({ onClose }: CreateRoomProps) => {
  const { register, values, micOn, toggleMic, errors, isValid, handleSubmit, onImageSelect } =
    useRoomForm();
  const router = useRouter();

  const onSubmit = async (data: RoomFormInput) => {
    try {
      const payload = {
        roomName: data.roomName,
        capacity: Number(data.headcount),
        description: '',
        duration: `${data.hour.padStart(2, '0')}:${data.minute.padStart(2, '0')}`,
        micAvailability: micOn,
        micTurnedOn: true,
        camTurnedOn: true,
        image: data.imageFile!,
      };

      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        router.push('/login');
        return;
      }
      const res = await createRoom(payload, accessToken);
      router.push(`/room/${res.roomId}`);
    } catch (err) {
      alert('방 생성에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <>
      {/* 방 생성 모달 제목 */}
      <div className="flex h-[38px] items-start justify-between">
        <span className="text-title1 text-gray9 flex h-full items-center">방 생성하기</span>
        <CloseIcon className="h-[29px] w-[29px] cursor-pointer" onClick={onClose} />
      </div>

      {/* 방 이름 + 마이크 설정 */}
      <div className="mt-3 flex gap-5">
        <LabeledBox
          label="방 이름 *"
          description={errors.roomName ? errors.roomName.message : '최대 20자'}
          isError={!!errors.roomName}
        >
          <div
            className={`bg-gray3 flex h-[90px] w-[350px] items-center rounded-[10px] px-10 ${
              errors.roomName ? 'border-red border' : 'border border-transparent'
            }`}
          >
            <input
              {...register('roomName')}
              value={values.roomName}
              placeholder="방 이름을 설정해주세요"
              className={`text-body1 placeholder-gray6 w-full bg-transparent outline-none ${
                errors.roomName ? 'text-red' : 'text-gray9'
              }`}
            />
          </div>
        </LabeledBox>

        <LabeledBox label="마이크 설정">
          <div className="bg-gray3 flex h-[90px] w-[190px] items-center justify-center rounded-[10px] px-10 py-5">
            <ToggleMicButton micOn={micOn} onToggle={toggleMic} />
          </div>
        </LabeledBox>
      </div>

      {/* 진행 시간 + 인원 수 */}
      <div className="flex gap-5">
        <LabeledBox
          label="진행 시간 *"
          description={errors.minute ? errors.minute.message : '최대 12시간'}
          isError={!!errors.minute}
        >
          <div
            className={`bg-gray3 flex h-[90px] w-[350px] items-center justify-center gap-[10px] rounded-[10px] px-10 ${
              errors.minute ? 'border-red border' : 'border border-transparent'
            }`}
          >
            <NumberInput
              placeholder="00"
              value={values.hour}
              maxLength={2}
              {...register('hour')}
              containerClassName="max-w-[70px]"
              inputClassName={errors.minute ? 'text-red' : 'text-primary'}
            />
            시간
            <NumberInput
              placeholder="00"
              value={values.minute}
              maxLength={2}
              {...register('minute')}
              containerClassName="max-w-[70px]"
              inputClassName={errors.minute ? 'text-red' : 'text-primary'}
            />
            분
          </div>
        </LabeledBox>

        <LabeledBox
          label="인원 수 *"
          description={errors.headcount ? errors.headcount.message : '최대 5명'}
          isError={!!errors.headcount}
        >
          <div
            className={`bg-gray3 flex h-[90px] w-[190px] items-center justify-center gap-[10px] rounded-[10px] px-10 py-5 ${
              errors.headcount ? 'border-red border' : 'border border-transparent'
            }`}
          >
            <NumberInput
              placeholder="0"
              value={values.headcount}
              maxLength={1}
              {...register('headcount')}
              containerClassName="max-w-[55px]"
              inputClassName={clsx(errors.headcount ? 'text-red' : 'text-primary', 'min-w-[15px]')}
            />
            명
          </div>
        </LabeledBox>
      </div>

      {/* 대표 이미지 설정 */}
      <ImageUploadBox
        label="대표 이미지 설정 *"
        onImageSelect={onImageSelect}
        errorMessage={errors.imageFile?.message}
      />

      {/* 생성 버튼 */}
      <button
        onClick={handleSubmit(onSubmit)}
        className={`text-subhead h-[84px] w-[560px] shrink-0 rounded-[10px] ${
          isValid
            ? 'bg-primary cursor-pointer text-white'
            : 'bg-gray3 text-gray6 cursor-not-allowed'
        }`}
      >
        모캠프 생성하기
      </button>
    </>
  );
};

export default CreateRoom;
