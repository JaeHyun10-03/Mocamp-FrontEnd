'use client';

import { useRouter } from 'next/navigation';
import CreateRoom from '@/components/create-room/CreateRoom';
import CardPageLayout from '@/components/common/CardPageLayout';

const Create = () => {
  const router = useRouter();

  return (
    <CardPageLayout>
      <CreateRoom onClose={() => router.back()} />
    </CardPageLayout>
  );
};

export default Create;
