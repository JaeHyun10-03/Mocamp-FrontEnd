'use client';

import { ReactNode, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import MocampIcon from '@/public/svgs/MocampIcon.svg';

interface ResponsiveLayoutProps {
  children: ReactNode;
}

const ResponsiveLayout = ({ children }: ResponsiveLayoutProps) => {
  const [hydrated, setHydrated] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsMobileDevice(isMobile);
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  if (isMobileDevice) {
    return (
      <div className="flex h-screen w-screen items-center justify-center px-4 text-center">
        <div className="flex flex-col items-center justify-center gap-7.5">
          <MocampIcon className="h-[48.431px] w-[120px]" />
          <div className="flex flex-col gap-2.5">
            <h2 className="text-gray9 text-2xl font-semibold tracking-[-0.48px]">
              모바일은 준비중이에요
            </h2>
            <span className="text-gray7 w-[276px] text-base tracking-[-0.32px]">
              모캠프는 현재 PC 환경에 최적화 되어있어요
              <br />
              보다 원활한 사용을 위해 PC로 접속해 주세요!
            </span>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ResponsiveLayout;
