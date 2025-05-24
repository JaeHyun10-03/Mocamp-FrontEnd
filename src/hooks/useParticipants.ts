//인원수 관리 hooks
import { useState } from 'react';

// api로 받아올 예정여기선 초기값만 사용
export function useParticipants(initialCount: number) {
const [participantsCount] = useState(initialCount);
return participantsCount;
}

//실시간 변동이 필요하면 setParticipantsCount 사용
// exprot function setParticipantsCount()