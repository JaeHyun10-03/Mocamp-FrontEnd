import { useState, useEffect } from 'react';
import WebCamMedia from './WebCamMedia';
import WebcamCamera from '@/public/svgs/webcamcamera.svg';
import VoiceIcon from '@/public/svgs/VoiceIcon.svg';
import { UserInfo } from '@/types/room';

interface CamProps {
  user: UserInfo;
  stream: MediaStream | null;
  error?: string | null;
  onStatusChange: (status: { camStatus: boolean; micStatus: boolean }) => void;
}

const WebCamSection = ({ user, stream, error, onStatusChange }: CamProps) => {
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
          <WebCamMedia stream={stream} isMirror={true} />
        </div>
      )}

      {!camStatus && (
        <span className="font-pre pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[10.67px] font-semibold tracking-[-0.4px] text-[rgba(255,255,255,0.20)] select-none lg:text-[15px] xl:text-[20px]">
          카메라가 꺼져있습니다
        </span>
      )}
      <div className="absolute bottom-0 left-0 box-border flex w-full items-center px-[20px] pb-[16px] lg:px-[40px] lg:pb-[24px] xl:px-[50px] xl:pb-[33px]">
        {/* 유저 닉네임 */}
        <span className="font-pre flex-shrink-0 text-[14px] font-semibold tracking-[-0.4px] text-white lg:text-[18px] xl:text-[20px]">
          {user.nickname}
        </span>

        {/* 작업 중 뱃지 + 버튼 */}
        <div className="ml-auto flex items-center gap-[6px] lg:gap-[10px] xl:gap-[15px]">
          {user.isWorking && (
            <span className="font-pre flex h-[24px] w-[72px] items-center justify-center rounded-[3.5px] bg-[rgba(39,207,165,0.80)] text-[12px] font-semibold tracking-[-0.24px] text-white backdrop-blur-[2px] lg:h-[30px] lg:w-[90px] lg:text-[14px] lg:tracking-[-0.28px] xl:h-[40px] xl:w-[107px] xl:text-[16px] xl:tracking-[-0.32px]">
              작업 중
            </span>
          )}

          {/* 카메라 버튼 */}
          <button
            onClick={toggleCamera}
            className="flex h-[30px] w-[30px] items-center justify-center rounded bg-[rgba(95,95,95,0.50)] backdrop-blur-[2px] lg:h-[36px] lg:w-[36px] xl:h-[40px] xl:w-[40px]"
          >
            <WebcamCamera
              width={20}
              height={20}
              className="lg:h-[22px] lg:w-[22px] xl:h-[24px] xl:w-[24px]"
              style={{ opacity: camStatus ? 1 : 0.2 }}
            />
          </button>

          {/* 마이크 버튼 */}
          <button
            onClick={toggleMic}
            className="flex h-[30px] w-[30px] items-center justify-center rounded bg-[rgba(95,95,95,0.50)] backdrop-blur-[2px] lg:h-[36px] lg:w-[36px] xl:h-[40px] xl:w-[40px]"
          >
            <VoiceIcon
              width={14}
              height={20}
              className="translate-x-[2px] translate-y-[2px] lg:h-[22px] lg:w-[16px] xl:h-[24px] xl:w-[20px]"
              style={{ opacity: micStatus ? 1 : 0.2 }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebCamSection;
