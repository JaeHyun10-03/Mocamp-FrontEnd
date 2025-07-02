import { useState, useEffect } from 'react';
import WebCamMedia from './WebCamMedia';
import WebcamCamera from '@/public/svgs/webcamcamera.svg';
import VoiceIcon from '@/public/svgs/VoiceIcon.svg';
import { UserInfo } from '../../types/preview';

interface CamProps {
  user: UserInfo;
  stream: MediaStream | null;
  error?: string | null;
  roomId: number;
  onStatusChange: (status: { camStatus: boolean; micStatus: boolean }) => void;
}

const WebCamSection = ({ user, stream, error, roomId, onStatusChange }: CamProps) => {
  const [camStatus, setCameraOn] = useState(true);
const [micStatus, setMicOn] = useState(true);


  useEffect(() => {
    stream?.getVideoTracks().forEach((track) => {
      track.enabled = camStatus;
    });
  }, [stream, camStatus]);

  useEffect(() => {
    stream?.getAudioTracks().forEach((track) => {
      track.enabled = micStatus;
    });
  }, [stream, micStatus]);

  useEffect(() => {
    onStatusChange({ camStatus, micStatus });
  }, [camStatus, micStatus]);

  const toggleCamera = () => {
    setCameraOn((prev) => !prev);
  };

  const toggleMic = () => {
    setMicOn((prev) => !prev);
  };

  return (
    <div className="relative flex h-[144px] w-[277.333px] flex-col justify-end rounded-[20px] bg-[#3D3D3D] lg:h-[202.5px] lg:w-[390px] xl:h-[270px] xl:w-[520px]">
      {camStatus && stream && (
        <div className="absolute inset-0 z-0">
          <WebCamMedia stream={stream} />
        </div>
      )}

      {!camStatus && (
        <span className="font-pre pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[20px] font-semibold tracking-[-0.4px] text-[rgba(255,255,255,0.20)] select-none">
          카메라가 꺼져있습니다
        </span>
      )}


      <div className="absolute bottom-0 left-0 box-border flex w-full items-center px-[50px] pb-[33px]">
        <span className="font-pre flex-shrink-0 text-[20px] font-semibold tracking-[-0.4px] text-white">
          {user.nickname}
        </span>

        {/* 작업중 뱃지 & 버튼들*/}
        <div className="ml-[156px] flex items-center pr-[50px]">
          {user.isWorking && (
            <span className="font-pre flex h-[40px] w-[107px] items-center justify-center rounded-[5px] bg-[rgba(39,207,165,0.80)] px-[20px] py-[10px] text-[16px] font-semibold tracking-[-0.32px] text-white backdrop-blur-[2px]">
              작업 중
            </span>
          )}

          {/* 카메라 버튼 */}
          <button
            onClick={toggleCamera}
            className="ml-[15px] flex h-[40px] w-[40px] items-center justify-center rounded bg-[rgba(95,95,95,0.50)] backdrop-blur-[2px]"
          >
            <WebcamCamera width={24} height={24} style={{ opacity: camStatus ? 1 : 0.2 }} />
          </button>

          {/* 마이크 버튼 */}
          <button
            onClick={toggleMic}
            className="relative ml-[10px] flex h-[40px] w-[40px] items-center justify-center rounded bg-[rgba(95,95,95,0.50)] backdrop-blur-[2px]"
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

export default WebCamSection;
