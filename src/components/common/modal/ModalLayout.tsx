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
  width,
  height,
}: ModalLayoutProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/85 flex justify-center items-center z-50">
      <div
        ref={modalRef}
        style={{ width, height }}
        className="relative bg-white rounded-[20px] p-[50px]"
      >
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
