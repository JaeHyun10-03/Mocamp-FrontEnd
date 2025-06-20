import { useCallback, useState, useEffect, useRef } from 'react';
import ArrowDownIcon from '@/public/svgs/arrow_down_icon.svg';
import { ChartType } from '@/types/myhome';
import { useDropDown } from '@/stores/myhome-store';

const DropDown = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { selectedType, setSelectedType } = useDropDown();

  const handleDropdownToggle = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const handleOptionSelect = useCallback((option: ChartType) => {
    setSelectedType(option);
    setIsDropdownOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="relative select-none" ref={dropdownRef}>
      <div
        onClick={handleDropdownToggle}
        className="flex cursor-pointer items-center gap-2.5 rounded-[10px] border border-[#e8e8e8] bg-white p-2.5"
      >
        <p className="text-base font-semibold text-[#555]">{selectedType}</p>
        <ArrowDownIcon className={`h-3 w-4 ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </div>

      {/* 드롭다운 메뉴 */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 z-10 mt-1 w-full rounded-[10px] border border-[#e8e8e8] bg-white shadow-lg">
          <div
            onClick={() => handleOptionSelect('목표 달성 수')}
            className="cursor-pointer border-b border-[#e8e8e8] p-2.5 text-base font-semibold text-[#555] last:border-b-0 hover:bg-gray-50"
          >
            목표 달성 수
          </div>
          <div
            onClick={() => handleOptionSelect('사용시간')}
            className="cursor-pointer p-2.5 text-base font-semibold text-[#555] hover:bg-gray-50"
          >
            사용시간
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
