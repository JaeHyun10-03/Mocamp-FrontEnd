interface ToggleMicButtonProps {
  micOn: boolean;
  onToggle: () => void;
}

const ToggleMicButton = ({ micOn, onToggle }: ToggleMicButtonProps) => {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center justify-center w-auto h-auto text-white px-5 py-[10px] rounded-[999px] cursor-pointer transition-colors duration-200 ${
        micOn ? 'bg-[#27CFA5]' : 'bg-[#c4c4c4]'
      }`}
    >
      {micOn ? 'ON' : 'OFF'}
    </button>
  );
};

export default ToggleMicButton;
