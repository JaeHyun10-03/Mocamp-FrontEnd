interface LabeledBoxProps {
  label: string;
  description?: string;
  children: React.ReactNode;
  isError?: boolean;
}

const LabeledBox = ({ label, description, isError = false, children }: LabeledBoxProps) => {
  const parts = label.split('*');

  return (
    <div className="flex flex-col gap-[10.67px] text-[12.8px] lg:gap-[15px] lg:text-lg xl:gap-5 xl:text-2xl">
      <div className="flex h-[15px] items-center gap-[5.333px] lg:h-[21px] lg:gap-[7.5px] xl:h-[28px] xl:gap-[10px]">
        <span className="text-gray9 font-semibold">
          {parts[0].trim()}
          {label.includes('*') && <span className="text-primary"> *</span>}
        </span>
        <span
          className={`text-[8.533px] font-medium lg:text-xs xl:text-lg ${isError ? 'text-red' : 'text-gray6'}`}
        >
          {description}
        </span>
      </div>
      {children}
    </div>
  );
};

export default LabeledBox;
