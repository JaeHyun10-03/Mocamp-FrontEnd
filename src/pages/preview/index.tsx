import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import WebCamPreviewModal from '@/components/webcamPreview/WebCamPreview';
import CreateJoinHeader from '@/components/Header/CreateJoinHeader';
import CardPageLayout from '@/components/common/CardPageLayout';

import { fetchMyhome } from '@/apis/myhome';
import { createRoom, enterRoom } from '@/apis/room';

import { UserInfo } from '@/types/room';
import { useRoomFormStore } from '@/stores/roomForm-store';

const WebCamPreviewPage = () => {
  const router = useRouter();

  const getRoomId = (raw: string | string[] | undefined): string | undefined => {
    if (!raw) return undefined;
    return Array.isArray(raw) ? raw[0] : raw;
  };

  const isRouterReady = router.isReady; // router 준비 여부
  const from = router.query.from as string | undefined; // 'create' | 'join' | undefined
  const previewRoomId = getRoomId(router.query.roomId); // string | undefined

  const isHost = useMemo(() => (from === 'create' ? true : from === 'join' ? false : null), [from]);

  const [user, setUser] = useState<UserInfo | null>(null);
  const { formData, resetFormData } = useRoomFormStore();

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
      } catch (e) {
        console.error('유저 정보 불러오기 실패', e);
      }
    };
    loadUser();
  }, []);

  const handleEnterRoom = useCallback(
    async ({ camStatus, micStatus }: { camStatus: boolean; micStatus: boolean }) => {
      try {
        let roomId: string;

        if (isHost) {
          roomId = await createRoom(formData);
          await enterRoom(roomId, { camTurnedOn: camStatus, micTurnedOn: micStatus });
        } else {
          if (!previewRoomId) {
            alert('유효하지 않은 방 ID');
            return;
          }
          roomId = previewRoomId;
          await enterRoom(roomId, { camTurnedOn: camStatus, micTurnedOn: micStatus });
        }

        resetFormData();
        router.push({
          pathname: `/room/${roomId}`,
          query: { from: isHost ? 'create' : 'join', cam: camStatus, mic: micStatus },
        });
      } catch (e) {
        console.error('방 생성/입장 실패', e);
        alert('방 생성/입장에 실패했습니다.');
      }
    },
    [isHost, previewRoomId, formData, router, resetFormData],
  );

  const isLoading =
    !isRouterReady || isHost === null || (!isHost && !previewRoomId) || user === null;

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <p className="font-pre text-gray7">정보를 불러오는 중입니다...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen flex-col bg-[#e6e6e6]">
      <CreateJoinHeader />
      <main className="flex flex-1 flex-col items-center justify-center">
        <CardPageLayout>
          <WebCamPreviewModal
            roomId={previewRoomId ?? ''}
            user={user}
            isHost={isHost}
            onClose={() => router.back()}
            onEnterRoom={handleEnterRoom}
          />
        </CardPageLayout>
      </main>
    </div>
  );
};

export default WebCamPreviewPage;
