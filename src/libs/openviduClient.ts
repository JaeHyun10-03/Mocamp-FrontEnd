import { OpenVidu } from 'openvidu-browser';

// WSS로 배포 -> 배포시 NOT ws
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const OPENVIDU_WSS = process.env.NEXT_PUBLIC_OPENVIDU_WSS;

if (!BACKEND_URL || !OPENVIDU_WSS) {
  throw new Error('BACKEND_URL or OPENVIDU_WSS is not defined in env');
}

export const OPENVIDU_URL = `${BACKEND_URL}:443`;
let ovInstance: OpenVidu | null = null;

export const initOpenVidu = () => {
  ovInstance = new OpenVidu();

  (OpenVidu as any).websocketUri = OPENVIDU_WSS;


  return ovInstance;
};

export const getOVInstance = () => ovInstance;
