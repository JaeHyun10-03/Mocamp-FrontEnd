import { useState, useEffect } from 'react';

export function useMocampTimer(endTime: Date) {
const getTimeString = () => {
    const now = new Date();
    const diff = endTime.getTime() - now.getTime();
    if (diff <= 0) return '종료';

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    return `${hours}시간 ${minutes}분`;
}
const [remaining, setRemaining] = useState(getTimeString());

useEffect(() => {
    const timer = setInterval(() => setRemaining(getTimeString()), 1000 * 30);
    return () => clearInterval(timer);
}, [endTime]);

return remaining;
}


