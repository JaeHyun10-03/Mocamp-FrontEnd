interface ToggleMicButtonProps {
  micOn: boolean;
  onToggle: () => void;
}

const ToggleMicButton = ({ micOn, onToggle }: ToggleMicButtonProps) => {
  return (
    <button
      onClick={onToggle}
      className={`flex h-auto w-auto cursor-pointer items-center justify-center rounded-[532.8px] px-[10.67px] py-[5.33px] text-[10.67px] font-semibold text-white transition-colors duration-200 lg:rounded-[749.25px] lg:px-[15px] lg:py-[7.5px] lg:text-[15px] xl:rounded-[999px] xl:px-5 xl:py-[10px] xl:text-xl ${
        micOn ? 'bg-primary' : 'bg-gray6'
      }`}
    >
      {micOn ? 'ON' : 'OFF'}
    </button>
  );
};

export default ToggleMicButton;
