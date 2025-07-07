import React, { useRef, useEffect } from 'react';

interface WebCamMediaProps {
  stream: MediaStream | null;
  isMirror?: boolean;
}

const WebCamMedia = ({ stream, isMirror = false }: WebCamMediaProps) => {
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
      style={{ width: '100%', height: '100%', borderRadius: 20, background: '#222',  transform: isMirror ? 'scaleX(-1)' : 'none',}}
    />
  );
};

export default WebCamMedia;
