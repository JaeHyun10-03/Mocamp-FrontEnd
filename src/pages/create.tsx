'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

import CreateRoom from '@/components/create-room/CreateRoom';
import CardPageLayout from '@/components/common/CardPageLayout';
import CreateJoinHeader from '@/components/Header/CreateJoinHeader';
import { useRoomFormStore } from '@/stores/roomForm-store';
import { CreateRoomFormData } from '@/types/create';
import { createRoom } from '@/apis/room';

const Create = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get('from');
  const isEdit = from === 'edit';
  const { formData: storedFormData, setFormData } = useRoomFormStore();

  const [formData, setLocalFormData] = useState<CreateRoomFormData>(
    storedFormData ?? {
      roomName: '',
      capacity: 1,
      duration: '',
      micAvailability: true,
      micTurnedOn: true,
      camTurnedOn: true,
      image: null as unknown as File,
    },
  );

  const hasOngoingRoom = false;

  useEffect(() => {
    if (hasOngoingRoom && !isEdit) {
      alert('진행 중인 방이 있어 방 생성이 불가능합니다.');
      router.replace('/');
    }
  }, [hasOngoingRoom, isEdit]);

  const handleSubmit = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      const createdRoomId = await createRoom(formData, accessToken);
      router.push(`/preview/${createdRoomId}?from=create`);
    } catch (error) {
      console.error('방 생성 실패', error);
    }
  };

  return (
    <div className="flex h-screen flex-col">
      <CreateJoinHeader />
      <main className="flex flex-1">
        <CardPageLayout>
          <CreateRoom
            formData={formData}
            setFormData={(next) => setLocalFormData((prev) => ({ ...prev, ...next }))}
            onSubmit={handleSubmit}
            onClose={() => router.back()}
          />
        </CardPageLayout>
      </main>
    </div>
  );
};

export default Create;
