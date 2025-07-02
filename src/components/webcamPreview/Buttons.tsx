interface ButtonsProps {
  isHost: boolean;
  roomName: string;
  onEditRoom: () => void;
  onEnterRoom: () => void;
}

const Buttons = ({ isHost, roomName, onEditRoom, onEnterRoom }: ButtonsProps) => {
  if (isHost) {
    return (
      <div className="flex gap-4">
        <button
          className="font-pre border-primary bg-gray1 text-primary flex h-[44.8px] w-[133.33px] items-center justify-center rounded-[5.333px] border p-[16px_21.33px] text-[10.67px] font-semibold tracking-[-0.4px] lg:h-[63px] lg:w-[187.5px] lg:rounded-[7.5px] lg:p-[22.5px_30px] lg:text-[15px] xl:h-[84px] xl:w-[250px] xl:rounded-[10px] xl:p-[30px_40px] xl:text-[20px]"
          onClick={onEditRoom}
        >
          방 정보 수정하기
        </button>
        <button
          className="font-pre bg-primary flex h-[44.8px] w-[154.66px] items-center justify-center rounded-[5.333px] p-[16px_21.33px] text-[10.67px] font-semibold tracking-[-0.4px] text-white lg:h-[63px] lg:w-[217.5px] lg:rounded-[7.5px] lg:p-[22.5px_30px] lg:text-[15px] xl:h-[84px] xl:w-[290px] xl:rounded-[10px] xl:p-[30px_40px] xl:text-[20px]"
          onClick={onEnterRoom}
        >
          {roomName} 입장하기
        </button>
      </div>
    );
  }
  return (
    <button
      className="font-pre bg-primary flex h-[44.8px] w-[298.67px] items-center justify-center rounded-[5.333px] p-[16px_21.33px] text-[10.67px] font-semibold tracking-[-0.4px] text-white lg:h-[63px] lg:w-[420px] lg:rounded-[7.5px] lg:p-[22.5px_30px] lg:text-[15px] xl:h-[84px] xl:w-[560px] xl:rounded-[10px] xl:p-[30px_40px] xl:text-[20px]"
      onClick={onEnterRoom}
    >
      {roomName} 입장하기
    </button>
  );
};

export default Buttons;
