import { z } from 'zod';

export const roomFormSchema = z
  .object({
    roomName: z.string().min(1, '방 이름을 입력해주세요.').max(20, '최대 20자 이내'),
    hour: z.string(),
    minute: z.string(),
    headcount: z.string().refine((val) => Number(val) >= 1 && Number(val) <= 5, {
      message: '최대 5명 이내',
    }),
    imageFile: z
      .union([z.instanceof(File), z.null()])
      .refine((file): file is File => file instanceof File && file.size > 0, {
        message: '이미지 설정 필수',
      }),
  })
  .refine(
    ({ hour, minute }) => {
      const h = Number(hour);
      const m = minute === '' ? 0 : Number(minute);

      if (hour === '' && minute === '') return false;
      if (isNaN(h) || isNaN(m)) return false;
      if (h < 0 || m < 0 || m > 59) return false;
      if (h > 12) return false;
      if (h === 12 && m > 0) return false;

      const total = h * 60 + m;
      return total > 0;
    },
    {
      message: '최대 12시간 이내',
      path: ['minute'],
    },
  );
