import { Room } from '@/stores/myhome-store';
import ParticipantedMocampItem from './content/ParticipantedMocampItem';

interface ParticipantedMocampProps {
  roomList: Room[];
}

const ParticipantedMocamp = ({ roomList }: ParticipantedMocampProps) => {
  return (
    <div className="flex h-[880px] w-[982px] flex-col rounded-[20px] bg-[#ffffff] p-12.5 text-2xl">
      <p className="mb-7.5 cursor-default text-2xl font-semibold text-[#4b4b4b]">
        최근 참여한 모캠프
      </p>
      <div className="flex flex-col gap-5 overflow-y-auto">
        {roomList.length > 0 ? (
          roomList.map((room: Room, index: number) => {
            return (
              <ParticipantedMocampItem
                size="lg"
                roomId={room.roomId}
                isCompleted={room.status}
                roomName={room.roomName}
                createdAt={room.startedAt}
                time={room.duration}
              />
            );
          })
        ) : (
          <div className="text-gray6 text-body1 flex h-[736px] w-full items-center justify-center">
            <p>최근 참여한 모캠프가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParticipantedMocamp;
