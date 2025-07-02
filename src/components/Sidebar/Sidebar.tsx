import Timer from '@/components/Sidebar/SidebarTimer';
import Participants from '@/components/Sidebar/SidebarParticipants';
import Exit from '@/components/Sidebar/SidebarExitButton';
import RoomEndNotice from './RoomEndNotice';

interface SidebarProps {
  startTime: string;
  endTime: string;
  participants: number;
  onLeaveRoom: () => void;
  alertInfo?: {
    visible: boolean;
    minutesLeft: number;
  };
  onCloseAlert?: () => void;
}

const Sidebar = ({
  startTime,
  endTime,
  participants,
  onLeaveRoom,
  alertInfo,
  onCloseAlert,
}: SidebarProps) => {
  return (
    <aside className="fixed top-0 left-0 flex h-screen w-[106.667px] flex-col items-center justify-between border-r border-solid border-[#E6E6E6] bg-white lg:w-[150px] xl:w-[200px]">
      <Timer startTime={startTime} endTime={endTime} />
      <Participants participants={participants} />
      <Exit onLeaveRoom={onLeaveRoom} />
      {alertInfo?.visible && (
        <RoomEndNotice
          minutesLeft={alertInfo.minutesLeft}
          onClose={() => {
            onCloseAlert?.();
          }}
        />
      )}
    </aside>
  );
};

export default Sidebar;
