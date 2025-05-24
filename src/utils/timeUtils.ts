export const formatTime = (date: Date): string => {
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    return `${hour}:${minute}`;
};
export const getRemainingTime = (endTime: Date): number => {
    const now = new Date();
    return Math.max(0, endTime.getTime() - now.getTime());
};
export const formatRemainingTime = (remainingTime: number): string => {
    const totalSeconds = Math.floor(remainingTime / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    return `${hours.toString().padStart(2, '0')}시간 ${minutes
        .toString()
        .padStart(2, '0')}분`;
};
