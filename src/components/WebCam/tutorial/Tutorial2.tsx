import LinkIcon from '@/public/svgs/link_icon.svg';
import KakaoIcon from '@/public/svgs/Kakao_link_icon.svg';
import SettingIcon from '@/public/svgs/setting_icon.svg';
import CameraIcon from '@/public/svgs/cameraIcon.svg';
import VoiceIcon from '@/public/svgs/VoiceIcon.svg';
import PencilIcon from '@/public/svgs/PencilIcon.svg';
import ChiefIcon from '@/public/svgs/chief_fire.svg';
import GoalGauge from '@/public/svgs/goal_gauge.svg';
import MocampIcon from '@/public/svgs/MocampIcon.svg';
import CloseIcon from '@/public/svgs/CloseButton.svg';

const Tutorial2 = ({ onNext }: { onNext: () => void }) => {
  return (
    <div
      onClick={onNext}
      className="relative z-50 min-h-screen min-w-screen overflow-hidden bg-[#000000]"
    >
      {/* 설명 */}
      <svg
        width={60}
        height={60}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[20px] left-[1670px] h-[60px] w-[60px]"
        preserveAspectRatio="none"
      >
        <rect x="0.5" y="0.5" width={59} height={59} rx="9.5" fill="white" stroke="#E8E8E8" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30.0001 18C22.8199 18 17 22.4471 17 27.9318C17 31.3429 19.251 34.35 22.6789 36.1385L21.2366 41.3493C21.1092 41.8097 21.6416 42.1767 22.0505 41.9099L28.3727 37.7831C28.9062 37.8341 29.4484 37.8638 30.0001 37.8638C37.1796 37.8638 43 33.4169 43 27.9318C43 22.4471 37.1796 18 30.0001 18Z"
          fill="#555555"
          fill-opacity="0.5"
        />
      </svg>

      {/* <KakaoIcon className="h-[60px] w-[60px]" /> */}
      <div className="h-[60px] w-[60px]">
        <div className="absolute top-[19.5px] left-[1739.5px] h-[60px] w-[60px] rounded-[10px] border border-[#e8e8e8] bg-white" />
      </div>
      <SettingIcon className="absolute top-[36px] left-[1755px]" />
      <div className="absolute top-[19.5px] left-[1599.5px] h-[60px] w-[60px] rounded-[10px] border border-[#e8e8e8] bg-white"></div>
      <LinkIcon className="absolute top-[35px] left-[1616px] h-[60px] w-[60px]" />
      <div className="absolute top-[493px] left-[1115px] flex flex-col items-start justify-center gap-5 rounded-[10px] border border-[#e8e8e8] bg-white p-5">
        <div className="h-[19px] w-[115px] flex-shrink-0 flex-grow-0">
          <p className="absolute top-5 left-[50px] text-left text-base font-medium text-[#555]">
            다짐 수정하기
          </p>
          <div className="absolute top-[22px] left-5 flex items-center justify-start gap-2.5 px-[3px]">
            <PencilIcon className="h-[15px] w-[15px] flex-shrink-0 flex-grow-0 object-cover" />
          </div>
        </div>
        <svg
          width={113}
          height={2}
          viewBox="0 0 113 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0 flex-grow-0"
          preserveAspectRatio="none"
        >
          <path
            d="M112 1.5L112.5 1.5L112.5 0.5L112 0.5L112 1.5ZM0 1L0 1.5L112 1.5L112 1L112 0.5L0 0.5L0 1Z"
            fill="#E8E8E8"
          />
        </svg>
        <div className="h-[19px] w-[115px] flex-shrink-0 flex-grow-0">
          <p className="absolute top-[79px] left-[50px] text-left text-base font-medium text-[#555]">
            목표 수정하기
          </p>
          <div className="absolute top-[81px] left-5 flex items-center justify-start gap-2.5 px-[3px]">
            <PencilIcon className="h-[15px] w-[15px] flex-shrink-0 flex-grow-0 object-cover" />
          </div>
        </div>
      </div>
      <svg
        width={5}
        height={25}
        viewBox="0 0 5 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[458px] left-[1261px] h-[25px] w-[5px]"
        preserveAspectRatio="none"
      >
        <circle cx="2.5" cy="2.5" r="2.5" fill="#E8E8E8" />
        <circle cx="2.5" cy="12.5" r="2.5" fill="#E8E8E8" />
        <circle cx="2.5" cy="22.5" r="2.5" fill="#E8E8E8" />
      </svg>
      <div className="h-[270px] w-[480px]">
        <div className="h-[270px] w-[480px]">
          <div className="absolute top-[129.75px] left-[819.75px] h-[270px] w-[480px] rounded-[20px] border-[0.5px] border-[#a7a7a7] bg-[#d2d2d2]" />
          <p className="absolute top-[338px] left-[850px] text-left text-xl font-semibold text-white">
            모캠프
          </p>
          <div className="absolute top-[330px] left-[1058px] flex h-10 w-[107px] items-center justify-center gap-2.5 rounded-[5px] bg-[#27cfa5]/80 px-5 py-2.5 backdrop-blur-sm">
            <p className="flex-shrink-0 flex-grow-0 text-center text-base font-semibold text-white">
              작업 중
            </p>
          </div>
          <div className="h-10 w-10">
            <div className="absolute top-[329.75px] left-[1179.75px] h-10 w-10 rounded-[6.96px] bg-[#5f5f5f]/50" />
            <CameraIcon className="absolute top-[337.75px] left-[1187.75px] h-6 w-6 object-cover" />
          </div>
          <svg
            width={40}
            height={40}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[330px] left-[1230px] h-10 w-10"
            preserveAspectRatio="none"
          >
            <foreignObject x={-3} y={-3} width={46} height={46}>
              <div
                style={{
                  backdropFilter: 'blur(1.5px)',
                  clipPath: 'url(#bgblur_0_3288_2946_clip_path)',
                  height: '100%',
                  width: '100%',
                }}
              />
            </foreignObject>
            <rect
              data-figma-bg-blur-radius={3}
              width={40}
              height={40}
              rx="6.95652"
              fill="#5F5F5F"
              fill-opacity="0.5"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.75 26.96V30H19.25V26.96C17.5332 26.775 15.9454 25.962 14.7917 24.6773C13.6381 23.3925 12.9999 21.7267 13 20V18H14.5V20C14.5 21.4587 15.0795 22.8576 16.1109 23.8891C17.1424 24.9205 18.5413 25.5 20 25.5C21.4587 25.5 22.8576 24.9205 23.8891 23.8891C24.9205 22.8576 25.5 21.4587 25.5 20V18H27V20C27.0001 21.7267 26.3619 23.3925 25.2083 24.6773C24.0546 25.962 22.4668 26.775 20.75 26.96ZM16 14C16 12.9391 16.4214 11.9217 17.1716 11.1716C17.9217 10.4214 18.9391 10 20 10C21.0609 10 22.0783 10.4214 22.8284 11.1716C23.5786 11.9217 24 12.9391 24 14V20C24 21.0609 23.5786 22.0783 22.8284 22.8284C22.0783 23.5786 21.0609 24 20 24C18.9391 24 17.9217 23.5786 17.1716 22.8284C16.4214 22.0783 16 21.0609 16 20V14Z"
              fill="white"
            />
            <defs>
              <clipPath id="bgblur_0_3288_2946_clip_path" transform="translate(3 3)">
                <rect width={40} height={40} rx="6.95652" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute top-[370px] left-[1058px] flex h-[90px] flex-col items-start justify-between overflow-hidden rounded-[10px] border border-[#e8e8e8] bg-white p-5">
        <div className="h-5 w-[58px] flex-shrink-0 flex-grow-0">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[17px] left-[17px]"
            preserveAspectRatio="none"
          >
            <circle cx={10} cy={10} r={7} fill="white" stroke="#27CFA5" stroke-width={6} />
          </svg>
          <p className="absolute top-6 left-[50px] text-left text-[10px] font-medium text-[#555]">
            작업 중
          </p>
        </div>
        <div className="h-5 w-[67px] flex-shrink-0 flex-grow-0">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[49.5px] left-[19.5px]"
            preserveAspectRatio="none"
          >
            <circle cx={10} cy={10} r="9.5" fill="white" stroke="#E8E8E8" />
          </svg>
          <p className="absolute top-[54px] left-[50px] text-left text-[10px] font-medium text-[#555]">
            자리 비움
          </p>
        </div>
      </div>
      <div className="h-[356px] w-[151px]">
        <div className="absolute top-[130px] left-[25px] flex w-[151px] flex-col items-start justify-start gap-[19px] rounded-[10px] border border-[#e8e8e8] bg-white p-5">
          <div className="h-[86px] w-[110px] flex-shrink-0 flex-grow-0">
            <div className="h-6 w-[101px]">
              <p className="absolute top-5 left-5 text-left text-xl font-semibold text-[#27cfa5]">
                시작
              </p>
              <p className="absolute top-5 left-[70px] text-left text-xl font-medium text-[#555]">
                14:00
              </p>
            </div>
            <svg
              width={110}
              height={1}
              viewBox="0 0 110 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[62.5px] left-[19.5px]"
              preserveAspectRatio="none"
            >
              <line x1="4.37114e-8" y1="0.5" x2={110} y2="0.50001" stroke="#E8E8E8" />
            </svg>
            <div className="h-6 w-[101px]">
              <p className="absolute top-[82px] left-5 w-[35.35px] text-left text-xl font-semibold text-[#27cfa5]">
                종료
              </p>
              <p className="absolute top-[82px] left-[70.5px] w-[50.5px] text-left text-xl font-medium text-[#555]">
                18:30
              </p>
            </div>
          </div>
        </div>
        <div className="h-[126px] w-[151px]">
          <div className="absolute top-[276px] left-[25px] flex w-[151px] flex-col items-start justify-start gap-[19px] rounded-[10px] border border-[#e8e8e8] bg-white p-5">
            <div className="h-6 w-[73px] flex-shrink-0 flex-grow-0">
              <p className="absolute top-5 left-5 text-left text-xl font-semibold text-[#27cfa5]">
                남은 시간
              </p>
            </div>
            <svg
              width={111}
              height={1}
              viewBox="0 0 111 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 flex-grow-0 self-stretch"
              preserveAspectRatio="none"
            >
              <line x1="4.37114e-8" y1="0.5" x2={111} y2="0.50001" stroke="#E8E8E8" />
            </svg>
            <div className="h-6 w-[110px] flex-shrink-0 flex-grow-0">
              <p className="absolute top-[82px] left-5 w-[110px] text-left text-xl font-medium text-[#555]">
                3시간 30분
              </p>
            </div>
          </div>
        </div>
        <div className="h-16 w-[150px]">
          <div className="absolute top-[422px] left-[26px] flex w-[150px] flex-col items-start justify-start gap-[19px] rounded-[10px] border border-[#e8e8e8] bg-white p-5">
            <div className="h-6 w-[111px] flex-shrink-0 flex-grow-0">
              <p className="absolute top-5 left-5 text-left text-xl font-semibold text-[#27cfa5]">
                참여 인원
              </p>
              <p className="absolute top-5 left-[118px] text-left text-xl font-medium text-[#555]">
                5
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[162.55px] w-[489px]">
        <p className="absolute top-[130px] left-[220px] text-left text-[28px] font-bold text-[#27cfa5]">
          참여한 방의 정보를 한눈에 볼 수 있어요
        </p>
        <p className="absolute top-[174px] left-[220px] text-left text-xl font-medium text-white">
          시작 및 종료시간과 남은 시간, 총 참여 인원수를 확인할 수 있어요
        </p>

        {/* 화살표 아이콘 : 참여한 방의 정보를 한눈에 볼 수 있어요 -> 시작 종료 타이머로  */}
        <svg
          width={43}
          height={76}
          viewBox="0 0 43 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[218px] left-[240px] h-[74.55px] w-[41.26px]"
          preserveAspectRatio="none"
        >
          <path
            d="M40.8905 1C44.2239 16 43.4153 47.6049 15.3905 42C-14.6099 36 8.89046 1 26.3905 17C43.4492 32.5966 26.3905 57.5 15.3905 67"
            stroke="#BEF1E4"
            stroke-linecap="round"
            stroke-dasharray="8 8"
          />
          <path
            d="M9.97027 72.0329L18.0629 70.1865L12.4176 64.1012L9.97027 72.0329Z"
            fill="#27CFA5"
          />
        </svg>
      </div>
      <p className="absolute top-[785px] left-[25px] text-left text-[28px] font-bold text-[#27cfa5]">
        모캠프 종료 30/10분 전에 알림을 송출해요
      </p>
      <p className="absolute top-[829px] left-[25px] text-left text-xl font-medium text-white">
        갑작스러운 종료에 당황하지 않도록 남은 시간을 알려드려요{' '}
      </p>

      {/* 화살표 아이콘 : 모캠프 종료 30/10분 전에 알림을 송출해요 -> 알림창 & 방 나가기 버튼  */}
      <svg
        width={43}
        height={76}
        viewBox="0 0 43 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[888px] left-[357px] h-[74.55px] w-[41.26px]"
        preserveAspectRatio="none"
      >
        <path
          d="M40.8905 1C44.2239 16 43.4153 47.6049 15.3905 42C-14.6099 36 8.89046 1 26.3905 17C43.4492 32.5966 26.3905 57.5 15.3905 67"
          stroke="#BEF1E4"
          stroke-linecap="round"
          stroke-dasharray="8 8"
        />
        <path
          d="M9.97027 72.0329L18.0629 70.1865L12.4176 64.1012L9.97027 72.0329Z"
          fill="#27CFA5"
        />
      </svg>
      <div className="h-16 w-[150px]">
        <div className="absolute top-[986px] left-[25px] flex w-[150px] flex-col items-center justify-center gap-[19px] rounded-[10px] border border-[#e8e8e8] bg-white p-5">
          <div className="h-6 w-[73px] flex-shrink-0 flex-grow-0">
            <p className="absolute top-5 left-[38.5px] text-left text-xl font-semibold text-[#555]">
              방 나가기
            </p>
          </div>
        </div>
      </div>
      <div className="h-20 w-[280px]">
        <div className="absolute top-[896px] left-[25px] flex h-20 w-[280px] flex-col items-center justify-center gap-[19px] rounded-[10px] border border-[#27cfa5] bg-[#d4f5ed] p-5">
          <div className="h-[34px] w-[231px] flex-shrink-0 flex-grow-0">
            <CloseIcon className="absolute top-[16px] left-[254px] h-2.5 w-2.5 text-[#00AF83]" />
            <div className="h-[21px] w-[214px]">
              <p className="absolute top-[29px] left-[33px] text-left text-lg font-medium text-[#00af83]">
                모캠프 종료까지 10분 남았어요
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[203px] w-[385px]">
        <p className="absolute top-[662px] left-[1115px] text-left text-[28px] font-bold text-[#27cfa5]">
          나의 다짐과 목표를 수정할 수 있어요
        </p>
        <p className="absolute top-[706px] left-[1115px] text-left text-xl font-medium text-white">
          <span className="text-left text-xl font-medium text-white">
            프로그레스 바 옆 케밥 메뉴(:) 버튼을 클릭하여
          </span>
          <br />
          <span className="text-left text-xl font-medium text-white">
            나의 다짐과 목표를 수정할 수 있어요
          </span>
        </p>

        {/* 화살표 아이콘 : 참여한 방의 정보를 한눈에 볼 수 있어요 -> 시작 종료 타이머로  */}
        <svg
          width={43}
          height={76}
          viewBox="0 0 43 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[567px] left-[1312px] h-[74.55px] w-[41.26px]"
          preserveAspectRatio="none"
        >
          <path
            d="M40.8905 74.5508C44.2239 59.5508 43.4153 27.9459 15.3905 33.5508C-14.6099 39.5508 8.89046 74.5508 26.3905 58.5508C43.4492 42.9542 26.3904 18.0508 15.3905 8.55078"
            stroke="#BEF1E4"
            stroke-linecap="round"
            stroke-dasharray="8 8"
          />
          <path
            d="M9.97027 3.51792L18.0629 5.36429L12.4176 11.4496L9.97027 3.51792Z"
            fill="#27CFA5"
          />
        </svg>
      </div>
      <div className="h-[208.32px] w-[493px]">
        <p className="absolute top-[123px] left-[1333px] text-left text-[28px] font-bold text-[#27cfa5]">
          모캠프를 공유하고 기능을 확인해보세요
        </p>
        <p className="absolute top-[167px] left-[1333px] text-left text-xl font-medium text-white">
          <span className="text-left text-xl font-medium text-white">
            참여 코드 복사하기, 카카오톡 공유하기를 통해 사용자를 초대하고
          </span>
          <br />
          <span className="text-left text-xl font-medium text-white">
            튜토리얼을 통해 작업 공간의 모든 기능을 언제든지 확인하세요
          </span>
        </p>

        <svg
          width={74}
          height={86}
          viewBox="0 0 74 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[408px] left-[731px] h-[74.55px] w-[41.26px]"
          preserveAspectRatio="none"
        >
          <path
            d="M1.30935 65.919C5.9226 51.2619 22.4253 24.2956 43.893 43.1619C66.8741 63.3583 29.0222 81.919 21.8668 59.3126C14.8918 37.2763 42.1168 24.2386 56.393 21.5113"
            stroke="#BEF1E4"
            stroke-linecap="round"
            stroke-dasharray="8 8"
          />
          <path
            d="M63.6039 19.8629L55.6723 17.4155L57.5187 25.5082L63.6039 19.8629Z"
            fill="#27CFA5"
          />
        </svg>
      </div>
      <div className="h-[203px] w-[474px]">
        <p className="absolute top-[503px] left-[558px] text-left text-[28px] font-bold text-[#27cfa5]">
          자유롭게 캠과 마이크를 설정할 수 있어요
        </p>
        <p className="absolute top-[547px] left-[558px] text-left text-xl font-medium text-white">
          <span className="text-left text-xl font-medium text-white">
            집중하고 싶을 때는 ON, 잠깐 일이 있다면 OFF
          </span>
          <br />
          <span className="text-left text-xl font-medium text-white">
            작업 중/자리 비움 상태 표시를 통해 나의 상태를 알릴 수 있어요
          </span>
        </p>

        {/* 화살표 아이콘 : 모캠프를 공유하고 기능을 확인해보세요 -> 링크공유, 카톡공유, 튜토리얼 버튼  */}
        <svg
          width={43}
          height={76}
          viewBox="0 0 43 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[35px] left-[1490.13px] h-[74.55px] w-[41.26px] rotate-30"
          preserveAspectRatio="none"
        >
          <path
            d="M2.36532 74.5469C-0.968017 59.5469 -0.159406 27.942 27.8653 33.5469C57.8657 39.5469 34.3654 74.5469 16.8654 58.5469C-0.193318 42.9503 16.8654 18.0469 27.8653 8.54688"
            stroke="#BEF1E4"
            stroke-linecap="round"
            stroke-dasharray="8 8"
          />
          <path
            d="M33.2856 3.51402L25.1929 5.36038L30.8383 11.4456L33.2856 3.51402Z"
            fill="#27CFA5"
          />
        </svg>
      </div>
      <svg
        width={69}
        height={69}
        viewBox="0 0 69 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[434px] left-[1230px]"
        preserveAspectRatio="none"
      >
        <circle cx="34.5" cy="34.5" r="34.5" fill="#27CFA5" fill-opacity="0.5" />
      </svg>
      <svg
        width={70}
        height={10}
        viewBox="0 0 70 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-2.5 w-[70px]"
        preserveAspectRatio="none"
      >
        <circle cx={35} cy={5} r={5} fill="#27CFA5" />
        <circle cx={5} cy={5} r={5} fill="#D9D9D9" />
        <circle cx={65} cy={5} r={5} fill="#D9D9D9" />
      </svg>
    </div>
  );
};

export default Tutorial2;
