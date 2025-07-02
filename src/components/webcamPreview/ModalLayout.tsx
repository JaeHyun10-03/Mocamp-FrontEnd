import { useEffect, useRef } from 'react';

interface ModalLayoutProps {
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
  height?: string;
}

const ModalLayout = ({
  onClose,
  children,
  width = '660px',
  height = '880px',
}: ModalLayoutProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-gray2)]">
      <div
        ref={modalRef}
        style={{ width, height }}
        className="relative flex-shrink-0 rounded-[20px] border border-[var(--color-gray4)] bg-[var(--color-gray1)] p-[50px]"
      >
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
