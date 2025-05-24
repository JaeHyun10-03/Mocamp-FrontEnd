import { useState } from 'react';
import clsx from 'clsx';
import UnsecretIcon from '@/public/svgs/UnsecretIcon.svg';
import ModalLayout from './ModalLayout';
import CloseButton from '@/public/svgs/CloseButton.svg';

interface CommonModalProps {
  onClose: () => void;
  title: string;
  description: string;
  placeholder: string;
  onSubmit?: (value: string) => void;
}

const CommonModal = ({
  onClose,
  title,
  description,
  placeholder,
  onSubmit,
}: CommonModalProps) => {
  const [inputValue, setInputValue] = useState('');
  const isActive = inputValue.trim().length > 0;

  return (
    <ModalLayout onClose={onClose} width="660px" height="406px">
      <button
        type="button"
        onClick={onClose}
        className="absolute right-[50px] top-[50px] h-[25px] w-[25px] cursor-pointer text-[#d9d9d9]"
      >
        <CloseButton />
      </button>

      {/* 헤더 */}
      <div className="mb-[50px] flex flex-col gap-[10px]">
        <div className="flex w-full justify-between">
          <span className="h-[38px] text-[32px] font-semibold leading-normal text-[#555555]">
            {title}
          </span>
          {/* <UnsecretIcon className="w-[30px] h-[38px]" /> */}
        </div>
        <span className="text-lg font-medium text-[#a7a7a7]">
          {description}
        </span>
      </div>

      <div className="flex flex-col items-center justify-center gap-5">
        <input
          className="h-[83px] w-[560px] rounded-[10px] border border-[#e8e8e8] px-10 py-5 text-[20px] font-medium outline-none placeholder:text-[#c4c4c4]"
          placeholder={placeholder}
          maxLength={15}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className={clsx(
            'h-[84px] w-[560px] rounded-[10px] px-10 py-[30px] text-[20px] font-semibold tracking-[-0.02em] text-white transition-colors duration-200',
            isActive
              ? 'cursor-pointer bg-[#27cfa5]'
              : 'cursor-not-allowed bg-[#e9e9e9]',
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
