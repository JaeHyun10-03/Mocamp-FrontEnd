import type { ReactNode } from 'react';

interface CardPageLayoutProps {
  children: ReactNode;
}

const CardPageLayout = ({ children }: CardPageLayoutProps) => {
  return (
    <div className="bg-gray4 fixed inset-0 z-50 flex items-center justify-center">
      <div className="flex h-[880px] w-[660px] flex-col gap-[30px] rounded-[20px] bg-white px-[50px] py-11">
        {children}
      </div>
    </div>
  );
};

export default CardPageLayout;
