interface ToggleMicButtonProps {
  micOn: boolean;
  onToggle: () => void;
}

const ToggleMicButton = ({ micOn, onToggle }: ToggleMicButtonProps) => {
  return (
    <button
      onClick={onToggle}
      className={`text-subhead flex h-auto w-auto cursor-pointer items-center justify-center rounded-[999px] px-5 py-[10px] text-white transition-colors duration-200 ${
        micOn ? 'bg-primary' : 'bg-gray6'
      }`}
    >
      {micOn ? 'ON' : 'OFF'}
    </button>
  );
};

export default ToggleMicButton;
