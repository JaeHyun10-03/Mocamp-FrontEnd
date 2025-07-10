import { OpenVidu } from 'openvidu-browser';

let ovInstance: OpenVidu | null = null;

export const initOpenVidu = () => {
  ovInstance = new OpenVidu();
  return ovInstance;
};

export const getOVInstance = () => ovInstance;
