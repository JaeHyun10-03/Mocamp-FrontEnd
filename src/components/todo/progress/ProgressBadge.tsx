interface ProgressBadgeProps {
  done: number;
  total: number;
}

const getBadgeStyle = (value: number) => {
  if (value === 100) {
    return {
      text: 'text-[#FF0000]',
      border: 'border-[#FF0000]',
      bg: 'bg-[#FAE9E9]',
    };
  }

  if (value > 0) {
    return {
      text: 'text-[#0096FF]',
      border: 'border-[#0096FF]',
      bg: 'bg-[#D7F0FF]',
    };
  }

  return {
    text: 'text-[#C4C4C4]',
    border: 'border-[#E6E6E6]',
    bg: 'bg-[#F2F2F2]',
  };
};

const ProgressBadge = ({ done, total }: ProgressBadgeProps) => {
  const progressPercent = total === 0 ? 0 : Math.round((done / total) * 100);

  const { text, border, bg } = getBadgeStyle(progressPercent);

  return (
    <div
      className={`flex h-[21.67px] w-[49.845px] items-center justify-center rounded-[10.67px] border lg:h-[31px] lg:w-[70.095px] lg:rounded-[15px] xl:h-[40.64px] xl:w-[100px] xl:rounded-[20px] ${text} ${border} ${bg}`}
    >
      <span className="text-[9.6px] font-semibold lg:text-[13.5px] xl:text-lg">
        {done} / {total}
      </span>
    </div>
  );
};

export default ProgressBadge;
