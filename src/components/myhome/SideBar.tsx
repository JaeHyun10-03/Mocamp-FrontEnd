import { loginout } from '@/apis/myhome';
import { useCategoryStore } from '@/stores/category-store';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface SideBarProps {
  profileImage: string;
  username: string;
}

const SideBar = ({ profileImage, username }: SideBarProps) => {
  const { category, setCategory } = useCategoryStore();
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

      <div className="relative mt-[3.125rem] flex h-[12.3125rem] w-[12.5rem] items-center justify-center rounded-full border-2 border-[#27CFA5]">
        <Image
          src={profileImage.length > 0 ? profileImage : '/defaultProfile.png'}
          width={200}
          height={197}
          alt="프로필 사진"
          className="rounded-full"
        />
      </div>
      <p className="mt-[1.875rem] cursor-default text-[1.75rem] font-semibold text-[#555555]">
        {username}
      </p>

      <div className="mt-[1.875rem] flex h-[126px] w-[14.25rem] flex-col gap-4 rounded-[0.625rem] border border-[#e8e8e8] bg-white p-[1.25rem]">
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
