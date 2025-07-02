import WebCamTile from './WebCam';
import { Participant } from '@/types/webCam';
import { useGroupCall } from '@/hooks/useGroupCall';

interface WebCamGridProps {
  participants: Participant[];
  myUserId: number;
  adminUsername: string;
  onToggleMedia: (mediaType: 'video' | 'audio', status: boolean) => void;
  onOpenDelegationModal: () => void;
  onSetWorkStatus: (status: boolean) => void;
}

const WebCamGrid = ({
  participants,
  myUserId,
  adminUsername,
  onToggleMedia,
  onOpenDelegationModal,
  onSetWorkStatus,
}: WebCamGridProps) => {
  const { setParticipantWorkStatus } = useGroupCall({
    roomId: 1,
    myUserId,
    myUsername: '',
  });

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {participants.map((participant) => (
        <WebCamTile
          key={participant.userId}
          participant={participant}
          isLocal={participant.userId === myUserId}
          onToggleMedia={onToggleMedia}
          adminUsername={adminUsername}
          onOpenDelegationModal={onOpenDelegationModal}
          onSetWorkStatus={setParticipantWorkStatus}
        />
      ))}
    </div>
  );
};

export default WebCamGrid;
