import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { CreateRoomFormData } from '@/types/create';
import { roomFormSchema } from 'src/schemas/roomFormSchema';

export interface RoomFormInput {
  roomName: string;
  hour: string;
  minute: string;
  headcount: string;
  imageFile: File | null;
}

export const useRoomForm = (initialData?: CreateRoomFormData) => {
  const { roomName, capacity, duration, image, micAvailability } = initialData || {};

  const [hour = '', minute = ''] = duration?.split(':') ?? [];

  const [micOn, setMicOn] = useState(micAvailability ?? true);
  const [imageFile, setImageFile] = useState<File | null>(image ?? null);

  const form = useForm<RoomFormInput>({
    resolver: zodResolver(roomFormSchema),
    mode: 'onChange',
    defaultValues: {
      roomName: roomName || '',
      headcount: capacity ? String(capacity) : '',
      hour,
      minute,
      imageFile: image ?? null,
    },
  });

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const toggleMic = () => setMicOn((prev) => !prev);
  const values = watch();

  const onImageSelect = (file: File | null) => {
    setImageFile(file);
    setValue('imageFile', file, { shouldValidate: true });
  };

  return {
    register,
    values,
    setValue,
    errors,
    micOn,
    toggleMic,
    isValid,
    onImageSelect,
    handleSubmit,
  };
};
