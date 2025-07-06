import CloseButton from '@/public/svgs/CloseButton.svg';
import { useState, useRef } from 'react';
import { updateProfile } from '@/apis/myhome';

interface ProfileModalProps {
  username: string;
  profileImage: string;
  onClose: () => void;
}

const ProfileModal = ({ username, profileImage, onClose }: ProfileModalProps) => {
  const [newUsername, setNewUsername] = useState<string>(username);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // 파일 크기 체크 (5MB 제한)
      if (file.size > 5 * 1024 * 1024) {
        alert('파일 크기는 5MB 이하여야 합니다.');
        return;
      }

      // 이미지 파일 타입 체크
      if (!file.type.startsWith('image/')) {
        alert('이미지 파일만 업로드 가능합니다.');
        return;
      }

      // File 객체 저장 (API 전송용)
      setSelectedFile(file);

      // 미리보기용 base64 문자열 생성
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    try {
      const usernameToSend = newUsername !== username ? newUsername : null;
      await updateProfile(usernameToSend, selectedFile);
      onClose();
    } catch (error) {
      console.error('프로필 수정 실패:', error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 반투명 배경 */}
      <div onClick={handleOverlayClick} className="absolute inset-0 bg-black opacity-50" />

      {/* 모달 내용 */}
      <div className="relative z-10 flex h-[736px] w-[660px] flex-col rounded-[20px] border border-[#e8e8e8] bg-white p-12">
        {/* 헤더 : "프로필 수정하기" + 닫기 버튼 */}
        <div className="mb-8">
          <h1 className="text-gray9 mb-2 text-[32px] font-semibold">프로필 수정하기</h1>
          <CloseButton
            className="text-gray5 absolute top-[50px] right-[50px] w-[25px] cursor-pointer transition-colors hover:text-gray-700"
            onClick={onClose}
          />
        </div>

        {/* 사용자 이름 섹션 */}
        <div className="mb-[30px]">
          <div className="mb-[25px] flex items-center gap-2.5">
            <h2 className="text-gray9 text-2xl font-semibold">사용자 이름</h2>
            <p className="text-base font-medium text-[#c4c4c4]">최대 20자</p>
          </div>
          <input
            className="text-body1 text-gray9 flex h-[90px] w-full items-center rounded-[10px] bg-[#f2f2f2] px-10 py-6 outline-none"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            maxLength={20}
            placeholder="사용자 이름을 입력하세요"
          />
        </div>

        {/* 프로필 이미지 섹션 */}
        <div className="mb-8 flex-1">
          <h2 className="text-gray9 mb-[25px] text-2xl font-semibold">프로필 이미지 설정</h2>
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={selectedImage || profileImage}
                className="h-[200px] w-[200px] cursor-pointer rounded-[10px] border border-[#e8e8e8] object-cover transition-opacity hover:opacity-80"
                alt="프로필 이미지"
                onClick={handleImageClick}
              />
              <div
                className="bg-gray6 absolute inset-0 flex cursor-pointer items-center justify-center rounded-[10px] opacity-0 transition-opacity hover:opacity-100"
                onClick={handleImageClick}
              >
                <span className="text-sm font-medium text-white">이미지 변경</span>
              </div>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </div>

        {/* 수정 버튼 */}
        <div className="mt-auto">
          <button
            onClick={handleSubmit}
            className="flex w-full items-center justify-center rounded-[10px] bg-[#27cfa5] py-[28px] transition-colors hover:bg-[#22b894]"
          >
            <p className="text-xl font-semibold text-white">프로필 수정하기</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
