interface LabeledBoxProps {
  label: string;
  description?: string;
  children: React.ReactNode;
}

const LabeledBox = ({ label, description, children }: LabeledBoxProps) => {
  const parts = label.split('*');

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-[10px]">
        <span className="text-2xl font-semibold text-[#555555]">
          {parts[0].trim()}
          {label.includes('*') && <span className="text-[#27cfa5]"> *</span>}
        </span>
        <span className="text-[#c4c4c4] text-base font-medium">
          {description}
        </span>
      </div>
      {children}
    </div>
  );
};

export default LabeledBox;
