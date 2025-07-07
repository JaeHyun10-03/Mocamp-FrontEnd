import { useEffect, useState } from 'react';
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
  imagePreviewUrl?: string;
}

export const useRoomForm = (
  initialData?: CreateRoomFormData,
  setFormData?: (data: Partial<CreateRoomFormData>) => void,
) => {
  const { roomName, capacity, duration, image, micAvailability } = initialData || {};

  const [hour = '', minute = ''] = duration?.split(':') ?? [];

  const [micOn, setMicOn] = useState(micAvailability ?? true);
  const [imageFile, setImageFile] = useState<File | null>(() => {
    if (!image) return null;
    if (typeof image === 'string') return null;
    return image;
  });

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
    control,
    formState: { errors, isValid },
  } = form;

  useEffect(() => {
    register('imageFile');
  }, [register]);

  const toggleMic = () => setMicOn((prev) => !prev);
  const values = watch();

  const onImageSelect = (file: File | null) => {
    setImageFile(file);
    setValue('imageFile', file, { shouldValidate: true });
    form.trigger('imageFile');

    if (setFormData) {
      if (file) {
        const url = URL.createObjectURL(file);
        setFormData({
          image: file,
          initialPreviewUrl: url,
        });
      } else {
        setFormData({
          image: null as any,
          initialPreviewUrl: undefined,
        });
      }
    }
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
    control,
  };
};
