import { useOpenViduStore } from '@/stores/openViduStore';

export const useOpenViduControls = () => {
  const publisher = useOpenViduStore((state) => state.publisher);

  // 마이크

  const toggleMic = () => {
    if (publisher) {
      const isAudioActive = publisher.stream.audioActive;
      publisher.publishAudio(!isAudioActive);
    }
  };

// 캠 

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
