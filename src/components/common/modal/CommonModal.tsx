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

const CommonModal = ({ onClose, title, description, placeholder, onSubmit }: CommonModalProps) => {
  const [inputValue, setInputValue] = useState('');
  const isActive = inputValue.trim().length > 0;

  return (
    <ModalLayout onClose={onClose} width="660px" height="406px">
      <button
        type="button"
        onClick={onClose}
        className="text-gray5 absolute top-[50px] right-[50px] h-[25px] w-[25px] cursor-pointer"
      >
        <CloseButton />
      </button>

      {/* 헤더 */}
      <div className="mb-[50px] flex flex-col gap-[10px]">
        <div className="flex w-full justify-between">
          <span className="text-title1 text-gray9 h-[38px]">{title}</span>
          {/* <UnsecretIcon className="w-[30px] h-[38px]" /> */}
        </div>
        <span className="text-body2 text-gray7">{description}</span>
      </div>

      <div className="flex flex-col items-center justify-center gap-5">
        <input
          className="border-gray4 text-body1 placeholder:text-gray6 h-[83px] w-[560px] rounded-[10px] border px-10 py-5 outline-none"
          placeholder={placeholder}
          maxLength={15}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className={clsx(
            'text-subhead h-[84px] w-[560px] rounded-[10px] px-10 py-[30px] text-white transition-colors duration-200',
            isActive ? 'bg-primary cursor-pointer' : 'cursor-not-allowed bg-[#e9e9e9]',
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
