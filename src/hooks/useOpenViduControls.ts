import { useOpenViduStore } from '@/stores/openViduStore';

export const useOpenViduControls = () => {
  const publisher = useOpenViduStore((state) => state.publisher);

  const toggleMic = () => {
    if (publisher) {
      const isAudioActive = publisher.stream.audioActive;
      publisher.publishAudio(!isAudioActive);
    }
  };

  const toggleCam = () => {
    if (publisher) {
      const isVideoActive = publisher.stream.videoActive;
      publisher.publishVideo(!isVideoActive);
    }
  };

  return {
    toggleMic,
    toggleCam,
  };
};
