import { useEffect, useRef, useState } from 'react';
import WebcamCamera from '@/public/svgs/webcamcamera.svg';
import VoiceIcon from '@/public/svgs/VoiceIcon.svg';
import ChiefIcon from '@/public/svgs/chief_fire.svg';
import SelectIcon from '@/public/svgs/select.svg';
import NoneIcon from '@/public/svgs/none.svg';
import { Participant } from '@/types/webCam';
import WebCamMedia from '@/components/webcamPreview/WebCamMedia';

interface WebCamTileProps {
  participant: Participant;
  isLocal?: boolean;
  onToggleMedia: (mediaType: 'video' | 'audio', status: boolean) => void;
  adminUsername: string;
  onOpenDelegationModal: () => void;
  onSetWorkStatus: (status: boolean) => void;
}


const WebCamTile = ({
  participant,
  isLocal = false,
  onToggleMedia,
  adminUsername,
  onOpenDelegationModal,
  onSetWorkStatus,
}: WebCamTileProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [camStatus, setCameraOn] = useState(participant.camStatus);
  const [micStatus, setMicOn] = useState(participant.micStatus);
  const [statusOpen, setStatusOpen] = useState(false);
  const [isWorking, setIsWorking] = useState(participant.isWorking);
  const setParticipantStatus = (working: boolean) => {
    setIsWorking(working);
    participant.isWorking = working;
    setStatusOpen(false);
    onSetWorkStatus(working);
  };



  useEffect(() => {
    if (videoRef.current && participant.stream) {
      videoRef.current.srcObject = participant.stream;
    }
  }, [participant.stream]);

  useEffect(() => {
    participant.stream?.getVideoTracks().forEach((track) => {
      track.enabled = camStatus;
    });
  }, [camStatus, participant.stream]);

  useEffect(() => {
    participant.stream?.getAudioTracks().forEach((track) => {
      track.enabled = micStatus;
    });
  }, [micStatus, participant.stream]);

  const displayName = participant.username;
  const isAdmin = participant.isAdmin;
  const toggleCamera = () => {
    setCameraOn((prev) => {
      onToggleMedia('video', !prev);
      return !prev;
    });
  };

  const toggleMic = () => {
    setMicOn((prev) => {
      onToggleMedia('audio', !prev);
      return !prev;
    });
  };

  return (
    <div className="relative flex h-[270px] w-[480px] flex-shrink-0 flex-col justify-end rounded-[20px] bg-[#3D3D3D]">
      {camStatus && participant.stream ? (
        <div className="absolute inset-0 z-0" style={{ transform: 'rotateY(180deg)' }}>
          <WebCamMedia stream={participant.stream} />
        </div>
      ) : (
        <span className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20px] font-semibold tracking-[-0.4px] text-[rgba(255,255,255,0.20)] select-none">
          카메라가 꺼져있습니다
        </span>
      )}

      {isAdmin && (
  <div className="absolute top-[20px] bottom-[215px] left-[21px] flex flex-col items-center gap-[5px]">
    <button onClick={onOpenDelegationModal}>
      <ChiefIcon width={35} height={35} />
    </button>
    <span className="text-[10px] text-white">방장</span>
  </div>
) }


      <div className="absolute bottom-[30px] left-[30px] flex w-[calc(100%-60px)] items-center">
        <span className="max-w-[200px] truncate text-[20px] font-semibold text-white">
          {displayName}
        </span>

      <div className="ml-auto flex items-center">
          <div className="relative">
            <button
              onClick={() => setStatusOpen(!statusOpen)}
              className={`h-[40px] w-[107px] rounded-[5px] px-[20px] text-[16px] font-semibold backdrop-blur-[2px] ${
                isWorking
                  ? 'bg-[rgba(39,207,165,0.80)] text-white'
                  : 'bg-[rgba(95,95,95,0.50)] text-white'
              }`}
            >
              {isWorking ? '작업 중' : '자리 비움'}
            </button>
            {statusOpen && (
              <div className="absolute top-full left-0 inline-flex h-[90px] flex-col items-start justify-between gap-[16px] rounded-[10px] border border-[#E8E8E8] bg-white p-[20px]">
                <div className="flex items-center gap-[10px]">
                  <button onClick={() => setParticipantStatus(true)} className="flex items-center">
                    {isWorking ? <SelectIcon /> : <NoneIcon />}
                  </button>
                  <span className="font-pre text-[10px] font-medium whitespace-nowrap text-[#555]">
                    작업 중
                  </span>
                </div>
                <div className="flex items-center gap-[10px]">
                  <button onClick={() => setParticipantStatus(false)} className="flex items-center">
                    {!isWorking ? <SelectIcon /> : <NoneIcon />}
                  </button>
                  <span className="font-pre = text-[10px] font-medium whitespace-nowrap text-[#555]">
                    자리 비움
                  </span>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={toggleCamera}
            className="ml-[15px] flex h-[40px] w-[40px] items-center justify-center rounded bg-[rgba(95,95,95,0.50)] backdrop-blur-[2px]"
          >
            <WebcamCamera width={24} height={24} style={{ opacity: camStatus ? 1 : 0.2 }} />
          </button>


          <button
            onClick={toggleMic}
            className="ml-[10px] relative flex h-[40px] w-[40px] items-center justify-center rounded bg-[rgba(95,95,95,0.50)] backdrop-blur-[2px]"
          >
            <VoiceIcon
              width={14}
              height={20}
              className="absolute top-[10px] right-[13px] bottom-[10px] left-[13px]"
              style={{ opacity: micStatus ? 1 : 0.2 }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebCamTile;
