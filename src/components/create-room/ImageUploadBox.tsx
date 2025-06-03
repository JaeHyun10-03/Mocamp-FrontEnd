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
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-[10px]">
        <span className="text-title3 text-gray9">
          {mainLabel}
          {isRequired && <span className="text-primary"> *</span>}
        </span>

        {errorMessage && <span className="text-red text-body3 font-medium">{errorMessage}</span>}
      </div>

      <div
        className={`flex h-[199px] w-[560px] items-center justify-center rounded-[10px] ${
          previewUrl ? 'bg-transparent' : 'bg-gray3'
        } ${errorMessage ? 'border-red border' : 'border border-transparent'}`}
      >
        {previewUrl ? (
          <div className="relative h-[200px] w-[200px]">
            <img
              src={previewUrl}
              alt="미리보기 이미지"
              className="h-full w-full rounded-[10px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-[10px] rounded-[10px] bg-black/85 opacity-0 transition-opacity hover:opacity-100">
              <button
                type="button"
                onClick={handleResetToDefault}
                className="bg-gray9/70 hover:bg-primary text-body3 cursor-pointer rounded-[5px] px-5 py-[10px] font-medium text-white"
              >
                기본 이미지 적용
              </button>
              <button
                type="button"
                onClick={handleReSelect}
                className="bg-gray9/70 hover:bg-primary text-body3 cursor-pointer rounded-[5px] px-5 py-[10px] font-medium text-white"
              >
                다른 이미지 선택
              </button>
            </div>
          </div>
        ) : (
          <label
            htmlFor="image-upload-input"
            className="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-[10px]"
          >
            <CameraIcon className="h-[60px] w-[60px]" />
            <span className="text-gray6 text-body1 h-15 pb-[5px] text-center leading-[150%]">
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
