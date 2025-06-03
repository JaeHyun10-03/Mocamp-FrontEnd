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
    className={`border-gray4 flex items-center justify-center rounded-[10px] border bg-white px-5 py-[5px] ${containerClassName}`}
  >
    <input
      type="text"
      pattern="[0-9]*"
      inputMode="numeric"
      placeholder={placeholder}
      className={`text-primary placeholder-primary w-full min-w-[30px] appearance-none bg-transparent text-center text-2xl font-medium outline-none ${inputClassName}`}
      {...rest}
    />
  </div>
);

export default NumberInput;
