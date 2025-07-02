import LockIcon from '@/public/svgs/LockIcon.svg';

const TodoSecretContent = () => {
  return (
    <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col items-center gap-[8.5px] rounded-[20px] pt-[139.27px] backdrop-blur-lg lg:gap-3 lg:pt-[195.75px] xl:gap-4 xl:pt-[261px]">
      <LockIcon className="h-[37.3px] w-[37.3px] lg:h-[52.5px] lg:w-[52.5px] xl:h-[70px] xl:w-[70px]" />
      <span className="text-gray9 text-base font-semibold lg:text-[22.5px] xl:text-3xl">
        비공개 목표입니다.
      </span>
    </div>
  );
};

export default TodoSecretContent;
