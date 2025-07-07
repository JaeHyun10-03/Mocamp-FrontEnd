'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

import CreateRoom from '@/components/create-room/CreateRoom';
import CardPageLayout from '@/components/common/CardPageLayout';
import CreateJoinHeader from '@/components/Header/CreateJoinHeader';
import { useRoomFormStore } from '@/stores/roomForm-store';
import { CreateRoomFormData } from '@/types/create';

const Create = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get('from');
  const isEdit = from === 'edit';
  const { formData: storedFormData, setFormData } = useRoomFormStore();

  const [formData, setLocalFormData] = useState<CreateRoomFormData>(
    storedFormData ?? {
      roomId: '',
      roomName: '',
      capacity: 1,
      duration: '',
      micAvailability: true,
      micTurnedOn: true,
      camTurnedOn: true,
      image: null as unknown as File,
      initialPreviewUrl: '',
    },
  );

  const hasOngoingRoom = false;

  useEffect(() => {
    if (hasOngoingRoom && !isEdit) {
      alert('진행 중인 방이 있어 방 생성이 불가능합니다.');
      router.replace('/');
    }
  }, [hasOngoingRoom, isEdit]);

  return (
    <div className="flex h-screen flex-col">
      <CreateJoinHeader />
      <main className="flex flex-1">
        <CardPageLayout>
          <CreateRoom
            formData={formData}
            setFormData={(next) => setLocalFormData((prev) => ({ ...prev, ...next }))}
            onClose={() => router.back()}
          />
        </CardPageLayout>
      </main>
    </div>
  );
};

export default Create;
