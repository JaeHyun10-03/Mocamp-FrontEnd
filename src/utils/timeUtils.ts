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

  return `${hours.toString().padStart(2, '0')}시간 ${minutes.toString().padStart(2, '0')}분`;
};

// '04:30:00' → '4h 30m'
export const formatTimeString = (timeStr: string): string => {
  const [hour, minute] = timeStr.split(':');
  return `${Number(hour)}h ${minute}m`;
};

// "2025-07-02T21:04:43.972489" → "2025. 07. 02"
export const formatDateToString = (dateStr: string) => {
  const [year, month, day] = dateStr.slice(0, 10).split('-');
  return `${year}. ${month}. ${day}`;
};
