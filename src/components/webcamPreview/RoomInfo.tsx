import { RoomInfo } from '@/types/room';

interface RoomInfoSectionProps {
  room: RoomInfo;
  isHost: boolean;
}

const RoomInfoSection = ({ room, isHost }: RoomInfoSectionProps) => {
  const formattedDate = room.startedAt ? room.startedAt.split('T')[0].replace(/-/g, '.') : '';

  const isInProgress = room.status && !isHost;
  const statusText = isHost ? '진행 전' : room.status ? '진행 중' : '진행 전';
  const statusColorClass = isInProgress ? 'text-primary' : 'text-gray6';

  return (
    <div className="box-border flex w-full flex-row items-center rounded-[5.333px] bg-white px-[21.33px] py-[21.33px] lg:rounded-[7.5px] lg:px-[30px] lg:py-[30px] xl:rounded-[10px] xl:px-[40px] xl:py-[40px]">
      {/* 대표 이미지 */}
      <div className="flex h-[48.533px] w-[48.533px] flex-shrink-0 items-center justify-center rounded-[5.333px] bg-[#D9D9D9] lg:h-[68.25px] lg:w-[68.25px] lg:rounded-[7.5px] xl:h-[91px] xl:w-[91px] xl:rounded-[10px]">
        {room.imagePath && (
          <img
            src={room.imagePath}
            alt="대표 이미지"
            className="h-full w-full rounded-[5.333px] object-cover lg:rounded-[7.5px] xl:rounded-[10px]"
          />
        )}
      </div>

      {/* 방 진행 상태 + 방 이름 + 날짜 + 설정 시간 */}
      <div className="ml-[7.47px] flex h-[48.533px] flex-col justify-center text-[10.67px] lg:ml-[10.5px] lg:h-[68.25px] lg:text-[15px] xl:ml-[14px] xl:h-[91px] xl:text-[20px]">
        <span className={`font-pre font-semibold tracking-[-0.4px] ${statusColorClass}`}>
          {statusText}
        </span>
        <span className="font-pre mt-[3px] font-semibold tracking-[-0.4px] text-[#4B4B4B] lg:mt-[4px] xl:mt-[5px]">
          {room.roomName}
        </span>
        <div className="mt-[1px] flex items-center lg:mt-[3px] xl:mt-[4px]">
          <span className="font-pre text-[20px] font-medium tracking-[-0.4px] text-[#C4C4C4]">
            {formattedDate}
          </span>
          <span className="font-pre text-gray6 ml-[12px] font-medium tracking-[-0.4px]">
            {room.duration}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RoomInfoSection;
