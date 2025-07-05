import { useState } from 'react';
import clsx from 'clsx';
import ModalLayout from './ModalLayout';
import CloseButton from '@/public/svgs/CloseButton.svg';

interface CommonModalProps {
  onClose: () => void;
  title: string;
  description: string;
  placeholder: string;
  onSubmit?: (value: string) => void;
  initialValue?: string;
}

const CommonModal = ({
  onClose,
  title,
  description,
  placeholder,
  onSubmit,
  initialValue,
}: CommonModalProps) => {
  const [inputValue, setInputValue] = useState<string>(initialValue ?? '');
  const isActive = inputValue.trim().length > 0;

  return (
    <ModalLayout
      onClose={onClose}
      className="h-[216.53px] w-[352px] lg:h-[304.5px] lg:w-[495px] xl:h-[406px] xl:w-[660px]"
    >
      <button
        type="button"
        onClick={onClose}
        className="text-gray5 absolute top-[26.67px] right-[26.67px] h-[25px] w-[25px] cursor-pointer lg:top-[37.5px] lg:right-[37.5px] xl:top-[50px] xl:right-[50px]"
      >
        <CloseButton className="h-[13.333px] w-[13.333px] lg:h-[18.75px] lg:w-[18.75px] xl:h-[25px] xl:w-[25px]" />
      </button>
      {/* 헤더 */}
      <div className="mb-[26.87px] flex flex-col gap-[5.6px] lg:mb-[37.25px] lg:gap-[7px] xl:mb-[50px] xl:gap-[10px]">
        <div className="flex w-full justify-between">
          <span className="text-gray9 h-5 text-[17.067px] font-semibold lg:h-[29px] lg:text-2xl xl:h-[38px] xl:text-[32px]">
            {title}
          </span>
        </div>
        <span className="xl:text-body2 text-gray7 text-[9.6px] lg:text-[13.5px]">
          {description}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-[10.67px] lg:gap-[15px] xl:gap-5">
        <input
          className="border-gray4 xl:text-body1 placeholder:text-gray6 h-[44.27px] w-[298.667px] rounded-[5.333px] border px-[21.33px] py-[10.67px] text-[10.67px] outline-none lg:h-[62.25px] lg:w-105 lg:rounded-[7.5px] lg:px-7.5 lg:py-[15px] lg:text-[15px] xl:h-[83px] xl:w-[560px] xl:rounded-[10px] xl:px-10 xl:py-5"
          placeholder={placeholder}
          maxLength={15}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className={clsx(
            'h-[44.8px] w-[298.667px] rounded-[5.333px] text-[10.67px] font-semibold transition-colors duration-200 lg:h-[63px] lg:w-105 lg:rounded-[7.5px] lg:text-[15px] xl:h-[84px] xl:w-[560px] xl:rounded-[10px] xl:text-xl',
            isActive
              ? 'bg-primary cursor-pointer text-white'
              : 'bg-gray3 text-gray6 cursor-not-allowed',
          )}
          disabled={!isActive}
          onClick={() => {
            onSubmit?.(inputValue);
            onClose();
          }}
        >
          완료하기
        </button>
      </div>
    </ModalLayout>
  );
};

export default CommonModal;
