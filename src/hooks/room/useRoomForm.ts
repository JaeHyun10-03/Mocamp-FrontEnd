import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { roomFormSchema } from 'src/schemas/roomFormSchema';

export interface RoomFormInput {
  roomName: string;
  hour: string;
  minute: string;
  headcount: string;
  imageFile: File | null;
}

export const useRoomForm = () => {
  const [micOn, setMicOn] = useState(true);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RoomFormInput>({
    resolver: zodResolver(roomFormSchema),
    mode: 'onChange',
    defaultValues: {
      roomName: '',
      hour: '',
      minute: '',
      headcount: '',
      imageFile: null,
    },
  });

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
