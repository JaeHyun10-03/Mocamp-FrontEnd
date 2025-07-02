import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import WebCamPreviewModal from '@/components/webcamPreview/WebCamPreview';
import { UserInfo, RoomInfo } from '@/types/preview';
import CreateJoinHeader from '@/components/Header/CreateJoinHeader';
import CardPageLayout from '@/components/common/CardPageLayout';
import { enterRoom } from '@/apis/room';

import { getUserFromToken } from '@/utils/decode';

const WebCamPreviewPage = () => {
  const router = useRouter();

  const { id } = router.query;
  const roomId = Array.isArray(id) ? Number(id[0]) : Number(id);

  const [user, setUser] = useState<UserInfo | null>(null);

  // 유저 정보 가져오기 - 추후 마이홈 api로 바꿀 예정
  useEffect(() => {
    const user = getUserFromToken();
    if (user) {
      setUser(user);
    } else {
      console.error('토큰에서 유저 정보 가져오기 실패');
    }
  }, []);


  const handleEnterRoom = async ({ camStatus, micStatus }: { camStatus: boolean; micStatus: boolean }) => {
      try {
        await enterRoom(String(roomId), {
      micTurnedOn: micStatus,
      camTurnedOn: camStatus,
    });

        router.push(`/room/${roomId}`);
      } catch (err) {
        alert('방 입장 실패! 다시 시도해주세요.');
      }
    };

  if (!roomId || !user) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <p className="text-gray7 font-pre">정보를 불러오는 중입니다...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#FAFAFA]">
      <CreateJoinHeader />
      <main className="flex flex-1">
        <CardPageLayout>
          <WebCamPreviewModal
            roomId={roomId}
            user={user}
            isHost={true}
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
