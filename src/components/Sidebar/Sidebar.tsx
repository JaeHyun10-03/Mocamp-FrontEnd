//사이드바
import Timer from '@/components/Sidebar/SidebarTimer';
import Participants from '@/components/Sidebar/SidebarParticipants';
import Exit from '@/components/Sidebar/SidebarExitButton';

interface SidebarProps {
  startTime: Date;
  endTime: Date;
  participants: number;
  onLeaveRoom: () => void; 
}

const Sidebar = ({ startTime, endTime, participants, onLeaveRoom }: SidebarProps) => {

  return (
    <aside className="w-[200px] h-[1080px] bg-white flex flex-col items-center justify-between border-r border-solid border-[#E6E6E6] relative">
      <Timer startTime={startTime} endTime={endTime} />
      <Participants participants={participants} />
      <Exit onLeaveRoom={onLeaveRoom} />
    </aside>
  );
};

export default Sidebar;

