import { useEffect, useRef } from 'react';

interface ModalLayoutProps {
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const ModalLayout = ({ onClose, children, className }: ModalLayoutProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85">
      <div
        ref={modalRef}
        className={`relative rounded-[10.67px] bg-white p-[26.67px] lg:rounded-[15px] lg:p-[37.5px] xl:rounded-[20px] xl:p-[50px] ${className ?? ''}`}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
