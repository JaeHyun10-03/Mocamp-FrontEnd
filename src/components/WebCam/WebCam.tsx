import { useEffect, useRef, useState } from 'react';
import WebcamCamera from '@/public/svgs/webcamcamera.svg';
import VoiceIcon from '@/public/svgs/VoiceIcon.svg';
import ChiefIcon from '@/public/svgs/chief_fire.svg';
import SelectIcon from '@/public/svgs/select.svg';
import NoneIcon from '@/public/svgs/none.svg';
import { StreamManager, Publisher } from 'openvidu-browser';
import { useRoomStoreName } from '@/stores/roomStore';
import { useOpenVidu } from '@/hooks/useOpenVidu';
import { useOpenViduControls } from '@/hooks/useOpenViduControls';
import { useRoomPublisher } from '@/hooks/room/useRoomPublisher';
import type { Participant } from '@/types/room';

interface WebCamTileProps {
  streamManager: StreamManager;
  isLocal: boolean;
  toggleCamera?: () => void;
  toggleMic?: () => void;
  roomId: string;
  myUserId: number;
  participants: Participant[];
}

const WebCamTile = ({
  streamManager,
  isLocal,
  roomId,
  myUserId,
  participants,
}: WebCamTileProps) => {
  const { toggleCam, toggleMic, isCameraOn, isMicOn } = useOpenViduControls();
  const [statusOpen, setStatusOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const adminUsername = useRoomStoreName((state) => state.adminUsername);
  const myUsername = useRoomStoreName((state) => state.myUsername);
  const [isWorking, setIsWorking] = useState(true);
  const { updateWorkStatus } = useRoomPublisher(String(roomId));
  // const [camStatus, setCamStatus] = useState(true);
  // const [micStatus, setMicStatus] = useState(true);
  const videoActive = isLocal ? isCameraOn : true;
  const audioActive = isLocal ? isMicOn : true;

  const nickname = JSON.parse(streamManager.stream.connection.data).clientData;
  const isAdmin = nickname === adminUsername;
  const isMe = nickname === myUsername;

  console.log('🔍 nickname from stream:', nickname);
  console.log('👤 myUsername from store:', myUsername);
  console.log('✅ isMe 결과:', nickname === myUsername);

  const participant = participants.find((p) => p.username === nickname);
  const peerIsWorking = participant?.isWorking ?? true;

  useEffect(() => {
    if (videoRef.current && streamManager) {
      try {
        streamManager.addVideoElement(videoRef.current);
      } catch (error) {
        console.error('Error adding video element:', error);
      }
    }

    return () => {
      if (videoRef.current && streamManager && streamManager.videos) {
        const videoElementIndex = streamManager.videos.findIndex(
          (video) => video.video === videoRef.current,
        );
        if (videoElementIndex > -1) {
          streamManager.videos.splice(videoElementIndex, 1);
        }
      }
    };
  }, [streamManager]);

  // const handleToggleCamera = () => {
  //   if (!isMe || !toggleCamera) return;
  //   toggleCamera();
  //   setCamStatus((prev) => !prev);
  // };

  // const handleToggleMic = () => {
  //   if (!isMe || !toggleMic) return;
  //   toggleMic();
  //   setMicStatus((prev) => !prev);
  // };

  const handleWorkStatus = (working: boolean) => {
    if (isWorking === working) return;
    setIsWorking(working);
    updateWorkStatus(myUserId, working);
    setStatusOpen(false);
  };

  if (!streamManager || !streamManager.stream) {
    return null;
  }

  return (
    <div className="relative flex h-[144px] w-[256px] flex-shrink-0 flex-col justify-end rounded-[20px] bg-[#3D3D3D] lg:h-[202.5px] lg:w-[360px] xl:h-[270px] xl:w-[480px]">
      {videoActive ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted={isLocal}
          className="absolute inset-0 z-0 h-full w-full rounded-[20px] object-cover"
        />
      ) : (
        <span className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10.67px] font-semibold tracking-[-0.4px] text-[rgba(255,255,255,0.20)] select-none lg:text-[15px] xl:text-[20px]">
          카메라가 꺼져있습니다
        </span>
      )}

      {isAdmin && (
        <div className="absolute top-[20px] bottom-[215px] left-[21px] flex flex-col items-center gap-[5px]">
          <button
            onClick={() => {
              if (isMe && isAdmin) {
                // 방장 위임 모달 열기 - 아이콘이 떠야 확인을 하지.
              } else {
                // 위임 불가 알림
              }
            }}
          >
            <ChiefIcon width={35} height={35} />
          </button>
          <span className="text-[10px] text-white">방장</span>
        </div>
      )}

      <div className="absolute bottom-[30px] left-[30px] flex w-[calc(100%-60px)] items-center">
        <span className="max-w-[200px] truncate text-[20px] font-semibold text-white">
          {nickname}
        </span>

        <div className="ml-auto flex items-center">
          <div className="relative">
            <button
              onClick={isMe ? () => setStatusOpen(!statusOpen) : undefined}
              disabled={!isMe}
              className={`h-[40px] w-[107px] rounded-[5px] px-[20px] text-[16px] font-semibold backdrop-blur-[2px] ${
                peerIsWorking
                  ? 'bg-[rgba(39,207,165,0.80)] text-white'
                  : 'bg-[rgba(95,95,95,0.50)] text-white'
              }`}
            >
              {peerIsWorking ? '작업 중' : '자리 비움'}
            </button>

            {isMe && statusOpen && (
              <div className="absolute top-full left-0 z-50 inline-flex h-[90px] flex-col items-start justify-between gap-[16px] rounded-[10px] border border-[#E8E8E8] bg-white p-[20px]">
                <div className="flex items-center gap-[10px]">
                  <button onClick={() => handleWorkStatus(true)} className="flex items-center">
                    {isWorking ? <SelectIcon /> : <NoneIcon />}
                  </button>
                  <span className="text-[10px] font-medium whitespace-nowrap text-[#555]">
                    작업 중
                  </span>
                </div>
                <div className="flex items-center gap-[10px]">
                  <button onClick={() => handleWorkStatus(false)} className="flex items-center">
                    {!isWorking ? <SelectIcon /> : <NoneIcon />}
                  </button>
                  <span className="text-[10px] font-medium whitespace-nowrap text-[#555]">
                    자리 비움
                  </span>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={toggleCam}
            className="ml-[15px] flex h-[40px] w-[40px] items-center justify-center rounded bg-[rgba(95,95,95,0.50)] backdrop-blur-[2px]"
          >
            <WebcamCamera width={24} height={24} style={{ opacity: videoActive ? 1 : 0.2 }} />
          </button>

          <button
            onClick={toggleMic}
            className="relative ml-[10px] flex h-[40px] w-[40px] items-center justify-center rounded bg-[rgba(95,95,95,0.50)] backdrop-blur-[2px]"
          >
            <VoiceIcon
              width={14}
              height={20}
              className="absolute top-[10px] right-[13px] bottom-[10px] left-[13px]"
              style={{ opacity: audioActive ? 1 : 0.2 }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebCamTile;
