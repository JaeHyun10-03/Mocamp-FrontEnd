import { OpenVidu } from 'openvidu-browser';
import { useOpenViduStore } from '@/stores/openViduStore';

const OV = new OpenVidu();

export const useOpenViduControls = () => {
  const {
    session,
    publisher,
    isCameraOn,
    isMicOn,
    setPublisher,
    setIsCameraOn,
    setIsMicOn,
  } = useOpenViduStore();

  const recreatePublisher = async (
    publishVideo: boolean,
    publishAudio: boolean,
  ) => {
    if (!session) return;

    if (publisher) {
      session.unpublish(publisher);
    }

    const newPublisher = await OV.initPublisherAsync(undefined, {
      audioSource: undefined,
      videoSource: undefined,
      publishAudio,
      publishVideo,
      mirror: true,
    });

    session.publish(newPublisher);
    setPublisher(newPublisher);
  };

  const toggleCam = async () => {
    const newStatus = !isCameraOn;
    setIsCameraOn(newStatus);
    recreatePublisher(newStatus, isMicOn);
  };

  const toggleMic = async () => {
    const newStatus = !isMicOn;
    setIsMicOn(newStatus);
    recreatePublisher(isCameraOn, newStatus);
  };

  return {
    toggleCam,
    toggleMic,
    isCameraOn,
    isMicOn,
  };
};
