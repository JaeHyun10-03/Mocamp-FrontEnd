import { OpenVidu } from 'openvidu-browser';
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

if (!BACKEND_URL) {
  throw new Error('BACKEND_URL is not defined in env (.env.local)');
}
export const OPENVIDU_URL = `${BACKEND_URL}:443`;
// export const OPENVIDU_WSS = BACKEND_URL.replace(/^https/, 'wss');

let ovInstance: OpenVidu | null = null;

export const initOpenVidu = () => {
  ovInstance = new OpenVidu();
  return ovInstance;
};

export const getOVInstance = () => ovInstance;
