import { OpenVidu } from 'openvidu-browser';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const OPENVIDU_WSS = process.env.NEXT_PUBLIC_OPENVIDU_WSS;

if (!BACKEND_URL || !OPENVIDU_WSS) {
  throw new Error('BACKEND_URL or OPENVIDU_WSS is not defined in env');
}

export const OPENVIDU_URL = `${BACKEND_URL}:443`;
let ovInstance: OpenVidu | null = null;

export const initOpenVidu = () => {
  ovInstance = new OpenVidu();
  return ovInstance;
};

export const getOVInstance = () => ovInstance;
