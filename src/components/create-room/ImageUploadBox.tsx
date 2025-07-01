import { useRef, useState, useEffect } from 'react';
import CameraIcon from '@/public/svgs/cameraIcon.svg';

interface ImageUploadBoxProps {
  label: string;
  onImageSelect: (file: File | null) => void;
  errorMessage?: string;
}

const ImageUploadBox = ({ label, onImageSelect, errorMessage }: ImageUploadBoxProps) => {
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
    <div className="flex flex-col gap-[10.67px] lg:gap-[15px] xl:gap-5">
      <div className="flex items-center gap-[5.333px] lg:gap-[7.5px] xl:gap-[10px]">
        <span className="text-gray9 h-[15px] text-[12.8px] font-semibold lg:h-[21px] lg:text-lg xl:h-[28px] xl:text-2xl">
          {mainLabel}
          {isRequired && <span className="text-primary"> *</span>}
        </span>

        {errorMessage && (
          <span className="text-red xl:text-body3 text-[8px] font-medium lg:text-xs">
            {errorMessage}
          </span>
        )}
      </div>

      <div
        className={`flex h-[106.133px] w-[298.667px] items-center justify-center rounded-[5.333px] lg:h-[149.25px] lg:w-[420px] lg:rounded-[7.5px] xl:h-[199px] xl:w-[560px] xl:rounded-[10px] ${
          previewUrl ? 'bg-transparent' : 'bg-gray3'
        } ${errorMessage ? 'border-red border' : 'border border-transparent'}`}
      >
        {previewUrl ? (
          <div className="relative h-[106.667px] w-[106.667px] lg:h-[150px] lg:w-[150px] xl:h-[200px] xl:w-[200px]">
            <img
              src={previewUrl}
              alt="미리보기 이미지"
              className="h-full w-full rounded-[5.333px] object-cover lg:rounded-[7.5px] xl:rounded-[10px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-[5.333px] rounded-[10px] bg-black/85 opacity-0 transition-opacity hover:opacity-100 lg:gap-[7.5px] xl:gap-[10px]">
              <button
                type="button"
                onClick={handleResetToDefault}
                className="bg-gray9/70 hover:bg-primary xl:text-body3 cursor-pointer rounded-[2.67px] px-[10.67px] py-[5.333px] text-[8.533px] font-medium text-white lg:rounded-[3.75px] lg:px-[15px] lg:py-[7.5px] lg:text-xs xl:rounded-[5px] xl:px-5 xl:py-[10px]"
              >
                기본 이미지 적용
              </button>
              <button
                type="button"
                onClick={handleReSelect}
                className="bg-gray9/70 hover:bg-primary xl:text-body3 cursor-pointer rounded-[2.67px] px-[10.67px] py-[5.333px] text-[8.533px] font-medium text-white lg:rounded-[3.75px] lg:px-[15px] lg:py-[7.5px] lg:text-xs xl:rounded-[5px] xl:px-5 xl:py-[10px]"
              >
                다른 이미지 선택
              </button>
            </div>
          </div>
        ) : (
          <label
            htmlFor="image-upload-input"
            className="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-[5.333px] lg:gap-[7.5px] xl:gap-[10px]"
          >
            <CameraIcon className="h-8 w-8 lg:h-[45px] lg:w-[45px] xl:h-[60px] xl:w-[60px]" />
            <div className="text-gray6 h-8 pb-[5px] text-center text-[12.8px] leading-[150%] font-semibold lg:h-[46.67px] lg:text-[15px] xl:h-15 xl:text-xl">
              <p> 여기를 눌러</p>
              <p> 이미지를 삽입하세요</p>
            </div>
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
