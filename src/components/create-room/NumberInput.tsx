import { InputHTMLAttributes } from 'react';

interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputClassName?: string;
  containerClassName?: string;
}

const NumberInput = ({
  placeholder = '',
  inputClassName,
  containerClassName,
  ...rest
}: NumberInputProps) => (
  <div
    className={`border-gray4 flex items-center justify-center rounded-[5.333px] border bg-white px-[10.67px] py-[2.67px] lg:rounded-[7.5px] lg:px-[15px] lg:py-[3.75px] xl:rounded-[10px] xl:px-5 xl:py-[5px] ${containerClassName}`}
  >
    <input
      type="text"
      pattern="[0-9]*"
      inputMode="numeric"
      placeholder={placeholder}
      className={`text-primary placeholder-primary w-full min-w-[30px] appearance-none bg-transparent text-center text-[12.8px] font-medium outline-none lg:text-lg xl:text-2xl ${inputClassName}`}
      {...rest}
    />
  </div>
);

export default NumberInput;
