import { loginout } from '@/apis/myhome';
import { useCategoryStore } from '@/stores/category-store';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface SideBarProps {
  profileImage: string;
  username: string;
  isProfileModal: boolean;
}

const SideBar = ({ profileImage, username }: SideBarProps) => {
  const { category, setCategory, setIsProfileModal } = useCategoryStore();
  const router = useRouter();

  const handleLogout = () => {
    loginout();
    localStorage.removeItem('accessToken');
    router.push('/');
    alert('로그아웃 완료');
  };

  return (
    <div className="relative flex h-[55rem] min-w-[18rem] flex-col items-center overflow-hidden rounded-[1.25rem] bg-white">
      {/* 사이드바 헤더 */}
      <div className="flex h-[3.75rem] w-full items-center justify-center rounded-t-[1.25rem] bg-[#27CFA5]">
        <p className="text-xl font-semibold text-white">마이페이지</p>
      </div>

      <div className="relative mt-[3.125rem] flex h-[12.5rem] w-[12.5rem] items-center justify-center rounded-full border-2 border-[#27CFA5]">
        <Image
          src={profileImage.length > 0 ? profileImage : '/defaultProfile2.png'}
          width={200}
          height={197}
          alt="프로필 사진"
          className="aspect-square rounded-full object-cover"
        />
      </div>
      <p className="mt-[1.875rem] cursor-default text-[1.75rem] font-semibold text-[#555555]">
        {username}
      </p>

      <div className="mt-[1.875rem] flex h-[188px] w-[14.25rem] flex-col justify-between rounded-[0.625rem] border border-[#e8e8e8] bg-white p-[1.25rem]">
        <p
          onClick={() => {
            setIsProfileModal(true);
          }}
          className={`hover:text-subhead text-body1 text-gray9 cursor-pointer font-medium hover:text-[#27cfa5]`}
        >
          나의 프로필
        </p>
        <hr className="border-[#e8e8e8]" />

        <p
          onClick={() => {
            setCategory('PARTICIPANTED_MOCAMP');
          }}
          className={`hover:text-subhead text-body1 cursor-pointer font-medium hover:text-[#27cfa5] ${
            category === 'PARTICIPANTED_MOCAMP' ? 'text-subhead text-[#27cfa5]' : 'text-[#555555]'
          }`}
        >
          참여한 모캠프
        </p>
        <hr className="border-[#e8e8e8]" />
        <p
          onClick={() => {
            setCategory('MOCAMP_USAGE_TREND');
          }}
          className={`hover:text-subhead text-body1 cursor-pointer font-medium hover:text-[#27cfa5] ${
            category === 'MOCAMP_USAGE_TREND' ? 'text-subhead text-[#27cfa5]' : 'text-[#555555]'
          }`}
        >
          모캠프 사용 추이
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="mt-[121px] h-[4.375rem] w-[14.25rem] cursor-pointer rounded-[0.625rem] border border-[#e8e8e8] bg-white text-xl font-semibold text-[#555555] hover:text-[#27cfa5]"
      >
        로그아웃
      </button>
    </div>
  );
};

export default SideBar;
