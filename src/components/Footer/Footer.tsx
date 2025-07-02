import Link from 'next/link';
import { INQUIRY_FORM_URL, INSTAGRAM_URL } from '@/constants/link';
import { PERSONAL_POLICY_PATH, SERVICE_POLICY_PATH } from '@/constants/routes';
import MocampWhite from '@/public/svgs/MocampIconWhite.svg';

const Footer = () => {
  return (
    <footer className="bg-primary w-screen py-[26.87px] lg:py-[37.25px] xl:py-12">
      <div className="mx-auto flex w-full justify-center gap-[153.67px] lg:gap-[215.75px] xl:gap-72">
        <div>
          {/* 로고 */}
          <MocampWhite
            className="mb-4 h-[32.287px] w-20 flex-shrink-0 lg:mb-7 lg:h-[45.404px] lg:w-[112.5px] xl:mb-[37.46px] xl:h-[60.54px] xl:w-[150px]"
            style={{ aspectRatio: '150/60.54' }}
          />

          {/* 정책 */}
          <div>
            <div className="xl:text-body2 flex items-center gap-[9.73px] text-[9.6px] lg:gap-[14.5px] lg:text-[13.5px] xl:gap-5">
              <Link href={PERSONAL_POLICY_PATH} passHref>
                <span className="cursor-pointer text-white/70">개인정보처리방침</span>
              </Link>
              <Link href={SERVICE_POLICY_PATH} passHref>
                <span className="cursor-pointer text-white/70">서비스 이용약관</span>
              </Link>
            </div>
            <div className="mt-[5.53px] text-white lg:mt-[7.25px] xl:mt-2.5">
              © 2025 Mocamp Inc. All rights reserved.
            </div>
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex flex-col justify-end">
          <div className="xl:text-body2 mt-2 flex gap-4 text-[9.6px] lg:text-[13.5px]">
            <a
              href={INQUIRY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[5px] border border-white/50 bg-[#27CFA5] px-[10.67px] py-[5.33px] font-bold text-white lg:px-[15px] lg:py-[7.5px] xl:px-5 xl:py-2.5"
            >
              문의사항
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[5px] border border-white/50 bg-[#27CFA5] px-[10.67px] py-[5.33px] font-bold text-white lg:px-[15px] lg:py-[7.5px] xl:px-5 xl:py-2.5"
            >
              인스타그램
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
