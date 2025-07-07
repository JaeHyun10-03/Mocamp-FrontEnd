'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { useRoomForm, RoomFormInput } from '@/hooks/useRoomForm';

import CloseIcon from '@/public/svgs/closeIcon.svg';

import ToggleMicButton from './ToggleMicButton';
import LabeledBox from './LabeledBox';
import NumberInput from './NumberInput';
import ImageUploadBox from './ImageUploadBox';
import { useRouter } from 'next/navigation';
import { CreateRoomFormData } from '@/types/create';
import { useRoomFormStore } from '@/stores/roomForm-store';

interface CreateRoomProps {
  formData: CreateRoomFormData;
  setFormData: (data: Partial<CreateRoomFormData>) => void;

  onClose: () => void;
}

const CreateRoom = ({ formData, onClose }: CreateRoomProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, values, micOn, toggleMic, errors, isValid, handleSubmit, onImageSelect } =
    useRoomForm(formData);

  const router = useRouter();
  const { setFormData } = useRoomFormStore();

  const onSubmit = async (data: RoomFormInput) => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const payload = {
        roomName: data.roomName,
        capacity: Number(data.headcount),
        duration: `${data.hour.padStart(2, '0')}:${data.minute.padStart(2, '0')}`,
        micAvailability: micOn,
        micTurnedOn: true,
        camTurnedOn: true,
        image: data.imageFile!,
        startedAt: new Date().toISOString(),
      };

      setFormData(payload);
      router.push('/preview?from=create');
    } catch (err) {
      alert('폼 데이터 저장 실패. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* 방 생성 모달 제목 */}
      <div className="flex h-5 items-start justify-between lg:h-[29px] xl:h-[38px]">
        <span className="text-gray9 flex h-full items-center text-lg font-semibold lg:text-2xl xl:text-[32px]">
          방 생성하기
        </span>
        <CloseIcon
          className="h-[13.333px] w-[13.333px] cursor-pointer lg:h-[22.5px] lg:w-[22.5px] xl:h-[29px] xl:w-[29px]"
          onClick={onClose}
        />
      </div>

      {/* 방 이름 + 마이크 설정 */}
      <div className="mt-[6.67px] flex gap-[10.67px] lg:mt-[8.5px] lg:gap-[15px] xl:mt-3 xl:gap-5">
        <LabeledBox
          label="방 이름 *"
          description={errors.roomName ? errors.roomName.message : '최대 20자'}
          isError={!!errors.roomName}
        >
          <div
            className={`bg-gray3 flex h-12 w-[186.667px] items-center rounded-[5.333px] px-[21.33px] lg:h-[67.5px] lg:w-[262.5px] lg:rounded-[7.5px] lg:px-7.5 xl:h-[90px] xl:w-[350px] xl:rounded-[10px] xl:px-10 ${
              errors.roomName ? 'border-red border' : 'border border-transparent'
            }`}
          >
            <input
              {...register('roomName')}
              value={values.roomName}
              placeholder="방 이름을 설정해주세요"
              className={`placeholder-gray6 w-full bg-transparent text-[10.67px] font-medium outline-none lg:text-[15px] xl:text-xl ${
                errors.roomName ? 'text-red' : 'text-gray9'
              }`}
            />
          </div>
        </LabeledBox>

        <LabeledBox label="마이크 설정">
          <div className="bg-gray3 flex h-12 w-[101.333px] items-center justify-center rounded-[5.333px] px-[21.33px] py-[12.17px] lg:h-[67.5px] lg:w-[142.5px] lg:rounded-[7.5px] lg:px-7.5 lg:py-[17.25px] xl:h-[90px] xl:w-[190px] xl:rounded-[10px] xl:px-10 xl:py-5">
            <ToggleMicButton micOn={micOn} onToggle={toggleMic} />
          </div>
        </LabeledBox>
      </div>

      {/* 진행 시간 + 인원 수 */}
      <div className="flex gap-[10.67px] lg:gap-[15px] xl:gap-5">
        <LabeledBox
          label="진행 시간 *"
          description={errors.minute ? errors.minute.message : '최대 12시간'}
          isError={!!errors.minute}
        >
          <div
            className={`bg-gray3 flex h-12 w-[186.667px] items-center justify-center gap-[5.333px] rounded-[5.333px] px-[21.33px] lg:h-[67.5px] lg:w-[262.5px] lg:gap-[7.5px] lg:rounded-[7.5px] lg:px-7.5 xl:h-[90px] xl:w-[350px] xl:gap-[10px] xl:rounded-[10px] xl:px-10 ${
              errors.minute ? 'border-red border' : 'border border-transparent'
            }`}
          >
            <NumberInput
              placeholder="00"
              value={values.hour}
              maxLength={2}
              {...register('hour')}
              containerClassName="max-w-[37.333px] lg:max-w-[52px] xl:max-w-[65px]"
              inputClassName={errors.minute ? 'text-red' : 'text-primary'}
            />
            시간
            <NumberInput
              placeholder="00"
              value={values.minute}
              maxLength={2}
              {...register('minute')}
              containerClassName="max-w-[37.333px] lg:max-w-[52px] xl:max-w-[65px]"
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
            className={`bg-gray3 flex h-12 w-[101.333px] items-center justify-center gap-[10px] rounded-[5.333px] px-[21.33px] py-[12.17px] lg:h-[67.5px] lg:w-[142.5px] lg:rounded-[7.5px] lg:px-7.5 lg:py-[17.25px] xl:h-[90px] xl:w-[190px] xl:rounded-[10px] xl:px-10 xl:py-5 ${
              errors.headcount ? 'border-red border' : 'border border-transparent'
            }`}
          >
            <NumberInput
              placeholder="0"
              value={values.headcount}
              maxLength={1}
              {...register('headcount')}
              containerClassName="max-w-[29.333px] lg:max-w-[41px] xl:max-w-[55px]"
              inputClassName={clsx(
                errors.headcount ? 'text-red' : 'text-primary',
                'min-w-[8px] lg:min-w-[12px] xl:min-w-[15px]',
              )}
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
        initialPreviewUrl={formData.initialPreviewUrl}
      />

      {/* 생성 버튼 */}
      <button
        onClick={handleSubmit(onSubmit)}
        className={`h-[44.8px] w-[298.667px] shrink-0 rounded-[5.333px] text-[10.67px] font-semibold lg:h-[63px] lg:w-[420px] lg:rounded-[7.5px] lg:text-[15px] xl:h-[84px] xl:w-[560px] xl:rounded-[10px] xl:text-xl ${
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
