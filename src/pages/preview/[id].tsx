import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import WebCamPreviewModal from '@/components/webcamPreview/WebCamPreview';
import CreateJoinHeader from '@/components/Header/CreateJoinHeader';
import CardPageLayout from '@/components/common/CardPageLayout';

import { fetchMyhome } from '@/apis/myhome';
import { enterRoom } from '@/apis/room';

import { UserInfo } from '@/types/room';

const WebCamPreviewPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const roomId = Array.isArray(id) ? Number(id[0]) : Number(id);

  const [user, setUser] = useState<UserInfo | null>(null);
  const [isHost, setIsHost] = useState<boolean | null>(null);

  useEffect(() => {
    if (!router.isReady) return;
    const from = router.query.from;
    setIsHost(from === 'create');
  }, [router.isReady, router.query.from]);

  // 유저 정보 불러오기
  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await fetchMyhome();
        setUser({
          userId: data.userId,
          nickname: data.username,
          isWorking: true,
          camStatus: true,
          micStatus: true,
        });
      } catch (error) {
        console.error('유저 정보 불러오기 실패', error);
      }
    };

    loadUser();
  }, []);

  // 방 입장 API 호출
  const handleEnterRoom = async ({
  camStatus,
  micStatus,
}: {
  camStatus: boolean;
  micStatus: boolean;
}) => {
  try {
    if (!isHost) {
      await enterRoom(String(roomId), {
        micTurnedOn: micStatus,
        camTurnedOn: camStatus,
      });
    }

    router.push({
      pathname: `/room/${roomId}`,
      query: {
        from: isHost ? 'create' : 'join',
        cam: String(camStatus),
        mic: String(micStatus),
      },
    });
  } catch (err) {
    alert('방 입장 실패');
  }
};


  if (!user || !roomId || isHost === null) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <p className="text-gray7 font-pre">정보를 불러오는 중입니다...</p>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-[#e6e6e6]">
      <CreateJoinHeader />
      <main className="mt-[50px] flex flex-1 flex-col items-center justify-center">
        <CardPageLayout>
          <WebCamPreviewModal
            roomId={roomId}
            user={user}
            isHost={isHost}
            onClose={() => router.back()}
            onEditRoom={() => {}} 
            onEnterRoom={handleEnterRoom}
          />
        </CardPageLayout>
      </main>
    </div>
  );
};

export default WebCamPreviewPage;
