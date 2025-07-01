'use client';

import { useRouter } from 'next/navigation';
import CreateRoom from '@/components/create-room/CreateRoom';
import CardPageLayout from '@/components/common/CardPageLayout';
import CreateJoinHeader from '@/components/Header/CreateJoinHeader';

const Create = () => {
  const router = useRouter();

  return (
    <div className="flex h-screen flex-col">
      <CreateJoinHeader />
      <main className="flex flex-1">
        <CardPageLayout>
          <CreateRoom onClose={() => router.back()} />
        </CardPageLayout>
      </main>
    </div>
  );
};

export default Create;
