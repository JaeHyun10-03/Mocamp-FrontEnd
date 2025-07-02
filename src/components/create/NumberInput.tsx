interface NumberInputProps {
  placeholder?: string;
  width?: string;
  minWidth?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput = ({
  placeholder = '',
  width = 'w-full',
  minWidth = 'min-w-[30px]',
  value,
  onChange,
}: NumberInputProps) => (
  <div
    className={`flex items-center justify-center px-5 py-[5px] bg-white rounded-[10px] border border-[#e6e6e6] ${width}`}
  >
    <input
      type="text"
      pattern="[0-9]*"
      value={value}
      inputMode="numeric"
      placeholder={placeholder}
      onChange={onChange}
      className={`placeholder-[#27cfa5] font-medium text-[#27cfa5] text-2xl outline-none bg-transparent text-center w-full appearance-none ${minWidth}`}
    />
  </div>
);

export default NumberInput;
