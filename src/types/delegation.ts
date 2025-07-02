export interface DelegationUpdateRequest {
  newAdminId: number;
}

export interface DelegationUpdateResponse {
  type: 'ADMIN_UPDATED';
  previousAdminUsername: string;
  newAdminUsername: string;
}
export interface StatusUpdateResponse {
  type: 'WORK_STATUS_UPDATED' | 'CAM_STATUS_UPDATED' | 'MIC_STATUS_UPDATED';
  userId: number;
  workStatus?: boolean; 
  camStatus?: boolean;  
  micStatus?: boolean;  
}
