import { useCategoryStore } from '@/stores/category-store';
import Image from 'next/image';

const SideBar = () => {
  const { category, setCategory } = useCategoryStore();

  return (
    <div className="relative flex h-[55rem] w-[18rem] flex-col items-center overflow-hidden rounded-[1.25rem] bg-white">
      {/* 사이드바 헤더 */}
      <div className="flex h-[3.75rem] w-full items-center justify-center rounded-t-[1.25rem] bg-[#27CFA5]">
        <p className="text-xl font-semibold text-white">마이페이지</p>
      </div>

      <div className="relative mt-[3.125rem] flex h-[12.3125rem] w-[12.5rem] items-center justify-center rounded-full border-2 border-[#27CFA5]">
        <Image
          src="/defaultProfile.png"
          width={200}
          height={197}
          alt="프로필 사진"
          className="rounded-full"
        />
      </div>
      <p className="mt-[1.875rem] cursor-default text-[1.75rem] font-semibold text-[#555555]">
        이주은님
      </p>

      <div className="mt-[1.875rem] flex h-[126px] w-[14.25rem] flex-col gap-4 rounded-[0.625rem] border border-[#e8e8e8] bg-white p-[1.25rem]">
        <p
          onClick={() => {
            setCategory('PARTICIPANTED_MOCAMP');
          }}
          className={`cursor-pointer text-xl font-medium ${
            category === 'PARTICIPANTED_MOCAMP' ? 'text-[#27cfa5]' : 'text-[#555555]'
          }`}
        >
          참여한 모캠프
        </p>
        <hr className="border-[#e8e8e8]" />
        <p
          onClick={() => {
            setCategory('MOCAMP_USAGE_TREND');
          }}
          className={`cursor-pointer text-xl font-medium ${
            category === 'MOCAMP_USAGE_TREND' ? 'text-[#27cfa5]' : 'text-[#555555]'
          }`}
        >
          모캠프 사용 추이
        </p>
      </div>

      <button className="mt-[121px] h-[4.375rem] w-[14.25rem] rounded-[0.625rem] border border-[#e8e8e8] bg-white text-xl font-semibold text-[#555555]">
        로그아웃
      </button>
    </div>
  );
};

export default SideBar;
