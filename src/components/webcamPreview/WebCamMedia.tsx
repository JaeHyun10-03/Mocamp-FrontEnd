import React, { useRef, useEffect } from 'react';

interface WebCamMediaProps {
  stream: MediaStream | null;
}

const WebCamMedia = ({ stream }: WebCamMediaProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      muted
      style={{ width: '100%', height: '100%', borderRadius: 20, background: '#222',  transform: 'scaleX(-1)',}}
    />
  );
};

export default WebCamMedia;
