interface ProgressBarProps {
  value: number;
}

const ProgressBar = ({ value }: ProgressBarProps) => {
  return (
    <div className="h-[14.99px] w-[224px] overflow-hidden rounded-[10.67px] bg-[#f2f2f2] lg:h-[21px] lg:w-[315px] lg:rounded-[15px] xl:h-[29px] xl:w-[420px] xl:rounded-[20px]">
      <div
        className="bg-primary h-full transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default ProgressBar;
