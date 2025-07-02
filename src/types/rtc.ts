export interface StatusMessage {
  status: "ON" | "OFF";
}

export interface SdpOfferRequest {
  sdpOffer: string;
}

export interface SdpAnswerResponse {
  sdpAnswer: string;
  userId: number;
}

export interface IceCandidateDto {
  candidate: string;
  sdpMid: string;
  sdpMLineIndex: number;
  userId: number;
}
