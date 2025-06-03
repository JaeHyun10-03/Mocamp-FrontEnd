import Link from 'next/link';
import { INQUIRY_FORM_URL, INSTAGRAM_URL } from '@/constants/link';
import { PERSONAL_POLICY_PATH, SERVICE_POLICY_PATH } from '@/constants/routes';
import MocampWhite from '@/public/svgs/MocampIconWhite.svg';

const Footer = () => {
  return (
    <footer className="w-full bg-[#27CFA5] py-12">
      <div className="max-w-[1200px] mx-auto flex justify-between">
        <div>
          {/* 로고 */}
          <MocampWhite
            className="w-[150px] h-[60.54px] mb-4 flex-shrink-0"
            style={{ aspectRatio: '150/60.54' }}
          />

          {/* 정책 */}
          <div>
            <div className="flex items-center gap-6">
              <Link href={PERSONAL_POLICY_PATH} passHref>
                <span className="text-body2 text-white/70 cursor-pointer">
                  개인정보처리방침
                </span>
              </Link>
              <Link href={SERVICE_POLICY_PATH} passHref>
                <span className="text-body2 text-white/70 cursor-pointer">
                  서비스 이용약관
                </span>
              </Link>
            </div>
            <div className="text-body2 text-white mt-2">
              © 2025 Mocamp Inc. All rights reserved.
            </div>
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex flex-col justify-end">
          <div className="flex gap-4 mt-2">
            <a
              href={INQUIRY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-[5px] border border-white/50 bg-[#27CFA5] text-body2 font-bold text-white"
            >
              문의사항
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-[5px] border border-white/50 bg-[#27CFA5] text-body2 font-bold text-white"
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