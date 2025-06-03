import ModalLayout from '@/components/Footer/ModalLayout';
import CloseButton from '@/public/svgs/CloseButton.svg';
import { useRouter } from 'next/navigation';


const TERMS = [
  {
    title: '제1조 (수집하는 개인정보 항목)',
    content: (
      <>
        은학샘과 아이들팀은 다음과 같은 정보를 수집합니다.
        <br />
        <span>- 필수 항목</span>
        : 소셜 로그인 ID(고유식별자), 프로필 이미지, 닉네임
        <br />
        <span>- 자동 수집 항목</span>: 접속 기록, 사용 시간, 목표 달성 수, 접속
        브라우저 정보
      </>
    ),
  },
  {
    title: '제2조 (개인정보 수집 및 이용 목적)',
    content: (
      <>
        은학샘과 아이들팀은 수집한 개인정보를 다음의 목적을 위해 사용합니다.
        <br />
        - 서비스 이용자 식별 및 모캠프 활동 기록 관리
        <br />
        - 사용 시간 및 목표 달성 수 통계
        <br />- 고객 문의 응대 및 운영 지원
      </>
    ),
  },
  {
    title: '제3조 (보유 및 이용기간)',
    content: (
      <>
        - 회원 탈퇴 시, 모든 개인정보는 지체 없이 파기됩니다.
        <br />- 단, 관계법령에 의해 보존이 필요한 경우에는 해당 기간 동안
        보관합니다.
      </>
    ),
  },
  {
    title: '제4조 (개인정보 제공 및 위탁)',
    content: (
      <>
        은학샘과 아이들팀은 개인정보를 제3자에게 제공하지 않으며, 향후 위탁이
        필요한 경우 관련 내용을 사전에 고지하고 동의를 받습니다.
      </>
    ),
  },
  {
    title: '제5조 (이용자의 권리와 행사방법)',
    content: (
      <>
        이용자는 언제든지 자신의 개인정보를 조회, 수정, 삭제, 처리정지를
        문의사항 작성을 통해 요청할 수 있습니다.
      </>
    ),
  },
  {
    title: '제6조 (개인정보 보호를 위한 노력)',
    content: (
      <>
        회사는 개인정보 보호를 위해 다음과 같은 노력을 기울입니다.
        <br />
        - 암호화된 저장 및 전송
        <br />- 접근 권한 최소화 및 정기 감사
      </>
    ),
  },
];

const PersonalModal = () => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div className="bg-[#f8f8f8] min-h-screen flex items-center justify-center">
      <ModalLayout onClose={handleClose}>
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-[50px] right-[50px] h-[25px] w-[25px] cursor-pointer text-[#d9d9d9]"
          aria-label="닫기"
        >
          <CloseButton />
        </button>
        <p className="font-pretendard text-[32px] font-semibold text-center text-[#555] tracking-[-0.64px] mb-[40px]">
          개인정보 수집 및 이용 동의
        </p>
        {/* 조항 */}
        <div className="h-[635px] overflow-y-auto flex flex-col gap-[36px] pr-[10px] custom-scrollbar">
          {TERMS.map(({ title, content }) => (
            <section key={title} className="w-full">
              <h3 className="font-pretendard text-[28px] font-semibold text-[#555] tracking-[-0.56px] mb-[12px]">
                {title}
              </h3>
              <p className="font-pretendard text-[20px] font-medium text-justify text-[#a7a7a7] tracking-[-0.4px] leading-[180%] whitespace-pre-line">
                {content}
              </p>
            </section>
          ))}
        </div>
      </ModalLayout>
    </div>
  );
};

export default PersonalModal;
