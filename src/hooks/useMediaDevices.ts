import { useEffect, useState } from 'react';

export const useMediaDevices = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getResponsiveResolution = () => {
    const width = window.innerWidth;

    if (width >= 1920) {
      return { width: 520, height: 270 };
    } else if (width >= 1440) {
      return { width: 390, height: 202 };
    } else {
      return { width: 277, height: 144 };
    }
  };

  const getMedia = async () => {
    try {
      const { width, height } = getResponsiveResolution();

      const localStream = await navigator.mediaDevices.getUserMedia({
        video: { width, height },
        audio: true,
      });

      setStream(localStream);
    } catch (err: any) {
      setError(err.message || '카메라 접근 실패');
    }
  };

  useEffect(() => {
    getMedia();

    return () => {
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  return { stream, error };
};
