import { useRef, useState, useEffect } from 'react';
import CameraIcon from '@/public/svgs/cameraIcon.svg';

interface ImageUploadBoxProps {
  label: string;
  onImageSelect: (file: File | null) => void;
}

const ImageUploadBox = ({ label, onImageSelect }: ImageUploadBoxProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const isRequired = label.includes('*');
  const mainLabel = label.replace('*', '').trim();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      onImageSelect(file);
    } else {
      alert('이미지 파일만 업로드할 수 있습니다.');
    }
  };

  const handleResetToDefault = async () => {
    try {
      const response = await fetch('/svgs/defaultProfile.svg');
      const blob = await response.blob();

      const defaultFile = new File([blob], 'defaultProfile.svg', {
        type: blob.type,
      });

      const url = URL.createObjectURL(defaultFile);
      setPreviewUrl(url);
      onImageSelect(defaultFile);

      if (inputRef.current) inputRef.current.value = '';
    } catch (error) {
      console.error('기본 이미지 적용 실패:', error);
    }
  };

  const handleReSelect = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.click();
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  return (
    <div className="flex flex-col gap-5">
      <span className="text-2xl font-semibold text-[#555555]">
        {mainLabel}
        {isRequired && <span className="text-[#27cfa5]"> *</span>}
      </span>

      <div
        className={`w-[560px] h-[199px] flex items-center justify-center rounded-[10px] ${
          previewUrl ? 'bg-transparent' : 'bg-[#f2f2f2]'
        }`}
      >
        {previewUrl ? (
          <div className="relative w-[200px] h-[200px]">
            <img
              src={previewUrl}
              alt="미리보기 이미지"
              className="w-full h-full object-cover rounded-[10px]"
            />
            <div className="absolute inset-0 bg-black/85 opacity-0 hover:opacity-100 flex flex-col items-center justify-center gap-[10px] rounded-[10px] transition-opacity">
              <button
                type="button"
                onClick={handleResetToDefault}
                className="text-white text-base font-medium px-5 py-[10px] rounded-[5px] bg-[#555555]/70 hover:bg-[#27cfa5] cursor-pointer"
              >
                기본 이미지 적용
              </button>
              <button
                type="button"
                onClick={handleReSelect}
                className="text-white text-base font-medium px-5 py-[10px] rounded-[5px] bg-[#555555]/70 hover:bg-[#27cfa5] cursor-pointer"
              >
                다른 이미지 선택
              </button>
            </div>
          </div>
        ) : (
          <label
            htmlFor="image-upload-input"
            className="flex flex-col items-center justify-center gap-[10px] w-full h-full cursor-pointer"
          >
            <CameraIcon className="w-[60px] h-[60px]" />
            <span className="text-center text-[20px] font-medium text-[#c4c4c4] pb-[5px]">
              여기를 눌러
              <br />
              이미지를 삽입하세요
            </span>
          </label>
        )}

        <input
          id="image-upload-input"
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ImageUploadBox;
