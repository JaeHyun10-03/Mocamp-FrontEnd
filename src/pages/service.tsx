import ModalLayout from '@/components/Footer/ModalLayout';
import CloseButton from '@/public/svgs/CloseButton.svg';
import { useRouter } from 'next/navigation';

const TERMS = [
  {
    title: '제1조 (목적)',
    content: (
      <>
        본 약관은 "모캠프"(이하 “서비스”)를 운영하는 은학샘이 아이들이 제공하는
        서비스의 이용과 관련하여, 이용자 간의 권리 및 의무 및 책임사항 등을
        규정함을 목적으로 합니다.
      </>
    ),
  },
  {
    title: '제2조 (용어 정의)',
    content: (
      <>
        1. "서비스"란, 사용자들이 시간과 목표를 설정하여 집중 작업을 진행하는
        비대면 모각작 플랫폼을 의미합니다.
        <br />
        2. "이용자"란 본 약관에 동의하고 서비스를 이용하는 모든 회원을 말합니다.
        <br />
        3. "방장"이란 모캠프를 개설하고 관리하는 권한을 가진 사용자를 말합니다.
      </>
    ),
  },
  {
    title: '제3조 (약관의 효력 및 변경)',
    content: (
      <>
        1. 본 약관은 서비스 초기 화면에 게시함으로써 효력이 발생합니다.
        <br />
        2. 은학샘과 아이들팀은 필요한 경우 약관을 변경할 수 있으며, 변경 시 사전
        고지합니다.
        <br />
        3. 변경된 약관에 동의하지 않을 경우 회원은 탈퇴할 수 있으며, 계속 이용
        시 동의한 것으로 간주합니다.
      </>
    ),
  },
  {
    title: '제4조 (회원가입 및 관리)',
    content: (
      <>
        1. 회원가입은 소셜 로그인을 통해 이루어지며, 필요한 경우 닉네임/프로필
        정보를 설정합니다.
        <br />
        2. 회원은 허위 정보를 제공해서는 안되며, 부정 사용이 확인될 경우 서비스
        이용이 제한될 수 있습니다.
      </>
    ),
  },
  {
    title: '제5조 (서비스 이용)',
    content: (
      <>
        1. 이용자는 모캠프에 참여하여 개인 목표를 설정하고, 완료 여부를 체크할
        수 있습니다.
        <br />
        2. "방장"은 서비스의 시작, 종료, 공지사항 작성, 방제목 변경, 권한 위임
        등의 관리 기능을 수행합니다.
        <br />
        3. 방장이 나가는 경우, 프로세스를 따라 수동 위임 기능을 제공합니다.
      </>
    ),
  },
  {
    title: '제6조 (이용제한 및 해지)',
    content: (
      <>
        1. 이용자가 다음 각 호에 해당할 경우, 서비스 이용이 제한될 수 있습니다.
        <br />
        &nbsp;&nbsp;- 타인의 권리 또는 명예를 침해하는 행위
        <br />
        &nbsp;&nbsp;- 서비스의 운영을 방해하는 행위
        <br />
        &nbsp;&nbsp;- 허위정보 기재, 부정 사용 등 약관 위반
      </>
    ),
  },
  {
    title: '제7조 (지적재산권)',
    content: (
      <>
        서비스 내 콘텐츠에 대한 저작권은 은학샘과 아이들팀에게 있으며,
        무단복제/배포를 금지합니다.
      </>
    ),
  },
  {
    title: '제8조 (책임 제한)',
    content: (
      <>
        은학샘과 아이들팀은 이용자의 귀책 사유로 인한 서비스 이용 장애에 대해
        책임지지 않습니다. 또한, 서비스 제공에 있어 다음과 같은 사유로 인한
        책임이 면제됩니다.
        <br />
        - 시스템 점검, 유지보수 등 불가피한 사유
        <br />- 통신사 또는 클라우드 장애 등 외부 요인
      </>
    ),
  },
];

const ServiceTermsModal = () => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div className="bg-[#f8f8f8] min-h-screen flex items-center justify-center">
      <ModalLayout onClose={handleClose} width="844px" height="880px">
        <div className="flex flex-col h-full">
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-[50px] right-[50px] h-[25px] w-[25px] cursor-pointer text-[#d9d9d9]"
            aria-label="닫기"
          >
            <CloseButton />
          </button>
          {/* 제목 */}
          <p className="font-pretendard text-[32px] font-semibold text-center text-[#555] tracking-[-0.64px] mb-[56px] break-words">
            서비스 이용약관
          </p>
          {/* 조항 */}
          <div className="flex-1 min-h-0 overflow-y-auto flex flex-col gap-[32px] pr-[10px] custom-scrollbar">
            {TERMS.map(({ title, content }) => (
              <section key={title} className="w-full">
                <h3 className="break-words font-pretendard text-[28px] font-semibold text-[#555] tracking-[-0.56px] mb-[10px]">
                  {title}
                </h3>
                <p className="break-words font-pretendard text-[20px] font-medium text-justify text-[#a7a7a7] tracking-[-0.4px] leading-[180%] whitespace-pre-line">
                  {content}
                </p>
              </section>
            ))}
          </div>
        </div>
      </ModalLayout>
    </div>
  );
};

export default ServiceTermsModal;
