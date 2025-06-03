interface LabeledBoxProps {
  label: string;
  description?: string;
  children: React.ReactNode;
  isError?: boolean;
}

const LabeledBox = ({ label, description, isError = false, children }: LabeledBoxProps) => {
  const parts = label.split('*');

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-[10px]">
        <span className="text-title3 text-gray9">
          {parts[0].trim()}
          {label.includes('*') && <span className="text-primary"> *</span>}
        </span>
        <span className={`text-body3 font-medium ${isError ? 'text-red' : 'text-gray6'}`}>
          {description}
        </span>
      </div>
      {children}
    </div>
  );
};

export default LabeledBox;
