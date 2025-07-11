import LinkIcon from '@/public/svgs/link_icon.svg';
import KakaoIcon from '@/public/svgs/Kakao_link_icon.svg';
import SettingIcon from '@/public/svgs/setting_icon.svg';
import CameraIcon from '@/public/svgs/cameraIcon.svg';
import VoiceIcon from '@/public/svgs/VoiceIcon.svg';
import PencilIcon from '@/public/svgs/PencilIcon.svg';
import ChiefIcon from '@/public/svgs/chief_fire.svg';
import GoalGauge from '@/public/svgs/goal_gauge.svg';
import MocampIcon from '@/public/svgs/MocampIcon.svg';
import { ReactNode } from 'react';

const TutorialBackground = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative z-0 h-[1080px] w-[1920px] overflow-hidden bg-[#e8e8e8]">
      <div className="absolute z-10 min-h-screen min-w-screen overflow-hidden bg-black opacity-90" />
      {children}
      <div className="absolute top-[-1px] left-[-1px] h-[100px] w-[1920px] bg-white">
        <MocampIcon className="absolute top-[25px] left-[320px] w-[120px]"></MocampIcon>
      </div>
      <div className="h-[1080px] w-[201px] bg-white" />

      <div className="absolute top-[19px] left-[494px] h-[60px] w-[300px] rounded-[10px] border border-[#e8e8e8] bg-white" />
      <p className="absolute top-[38px] left-[526px] text-left text-xl font-semibold text-[#555]">
        은학샘과 아이들
      </p>
      <div className="absolute top-5 left-[815px] flex w-[765px] items-center justify-start gap-2.5 rounded-[10px] border border-[#e8e8e8] bg-white px-10 py-[18px]">
        <p className="w-[650px] flex-shrink-0 flex-grow-0 text-left text-xl font-medium text-[#c4c4c4]">
          공지사항을 입력하세요
        </p>
      </div>
      <div className="absolute top-[19px] left-[1739px] h-[60px] w-[60px] rounded-[10px] border border-[#e8e8e8] bg-white" />
      <div className="absolute top-[19px] left-[1669px] h-[60px] w-[60px] rounded-[10px] border border-[#e8e8e8] bg-white" />
      <div className="absolute top-[19px] left-[1599px] h-[60px] w-[60px] rounded-[10px] border border-[#e8e8e8] bg-white" />
      <div className="absolute top-[130px] left-[25px] flex w-[150px] flex-col items-start justify-start gap-[19px] rounded-[10px] border border-[#e8e8e8] bg-white p-5">
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
      <div className="h-[126px] w-[150px]">
        <div className="absolute top-[276px] left-[25px] flex w-[150px] flex-col items-start justify-start gap-[19px] rounded-[10px] border border-[#e8e8e8] bg-white p-5">
          <div className="h-6 w-[73px] flex-shrink-0 flex-grow-0">
            <p className="absolute top-5 left-5 text-left text-xl font-semibold text-[#27cfa5]">
              남은 시간
            </p>
          </div>
          <svg
            width={110}
            height={1}
            viewBox="0 0 110 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 flex-grow-0 self-stretch"
            preserveAspectRatio="none"
          >
            <line x1="4.37114e-8" y1="0.5" x2={110} y2="0.50001" stroke="#E8E8E8" />
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
          <div className="h-6 w-[110px] flex-shrink-0 flex-grow-0">
            <p className="absolute top-5 left-5 text-left text-xl font-semibold text-[#27cfa5]">
              참여 인원
            </p>
            <p className="absolute top-5 left-[118px] text-left text-xl font-medium text-[#555]">
              7
            </p>
          </div>
        </div>
      </div>
      <div className="h-16 w-[150px]">
        <div className="absolute top-[986px] left-[25px] flex w-[150px] flex-col items-center justify-center gap-[19px] rounded-[10px] border border-[#e8e8e8] bg-white p-5">
          <div className="h-6 w-[73px] flex-shrink-0 flex-grow-0">
            <p className="absolute top-5 left-[38.5px] text-left text-xl font-semibold text-[#555]">
              방 나가기
            </p>
          </div>
        </div>
      </div>
      <div className="h-[270px] w-[480px]">
        <div className="h-[270px] w-[480px]">
          <div className="absolute top-[128.98px] left-[1318.98px] h-[270px] w-[480px] rounded-[20px] bg-[#3d3d3d]" />
          <p className="absolute top-[338px] left-[1350px] text-left text-xl font-semibold text-white">
            권잇타
          </p>
          <div className="absolute top-[329.49px] left-[1679.49px] h-10 w-10 rounded-[6.96px] bg-[#5f5f5f]/50" />
          <div className="absolute top-[329.49px] left-[1729.49px] h-10 w-10 rounded-[6.96px] bg-[#5f5f5f]/50" />
          <div className="absolute top-[330px] left-[1558px] flex h-10 w-[107px] items-center justify-center gap-2.5 rounded-[5px] bg-[#27cfa5]/80 px-5 py-2.5 backdrop-blur-sm">
            <p className="flex-shrink-0 flex-grow-0 text-center text-base font-semibold text-white">
              작업 중
            </p>
          </div>
          <CameraIcon className="absolute top-[337.5px] left-[1687.5px] h-6 w-6 object-cover" />
          <VoiceIcon className="absolute top-[339.5px] left-[1742.5px]" />
          <p className="absolute top-[253px] left-[1473px] text-center text-xl font-semibold text-white/20">
            카메라가 꺼져있습니다
          </p>
        </div>
      </div>
      <div className="h-[270px] w-[480px]">
        <div className="h-[270px] w-[480px]">
          <div className="absolute top-[128.98px] left-[818.98px] h-[270px] w-[480px] rounded-[20px] bg-[#3d3d3d]" />
          <p className="absolute top-[338px] left-[850px] text-left text-xl font-semibold text-white">
            이잇타
          </p>
          <div className="absolute top-[330px] left-[1058px] flex h-10 w-[107px] items-center justify-center gap-2.5 rounded-[5px] bg-[#27cfa5]/80 px-5 py-2.5 backdrop-blur-sm">
            <p className="flex-shrink-0 flex-grow-0 text-center text-base font-semibold text-white">
              작업 중
            </p>
          </div>
          <div className="h-10 w-10">
            <CameraIcon className="absolute top-[337.5px] left-[1187.5px] h-6 w-6 object-cover" />
          </div>
          <p className="absolute top-[253px] left-[973px] text-center text-xl font-semibold text-white/20">
            카메라가 꺼져있습니다
          </p>
        </div>
      </div>
      <div className="h-[270px] w-[480px]">
        <div className="h-[270px] w-[480px]">
          <div className="absolute top-[128.98px] left-[318.98px] h-[270px] w-[480px] rounded-[20px] bg-[#3d3d3d]" />
          <p className="absolute top-[338px] left-[350px] text-left text-xl font-semibold text-white">
            김잇타
          </p>
          <div className="absolute top-[329.49px] left-[679.49px] h-10 w-10 rounded-[6.96px] bg-[#5f5f5f]/50" />
          <div className="absolute top-[329.49px] left-[729.49px] h-10 w-10 rounded-[6.96px] bg-[#5f5f5f]/50" />
          <div className="absolute top-[330px] left-[558px] flex h-10 w-[107px] items-center justify-center gap-2.5 rounded-[5px] bg-[#5f5f5f]/50 px-5 py-2.5 backdrop-blur-sm">
            <p className="flex-shrink-0 flex-grow-0 text-center text-base font-semibold text-white">
              자리 비움
            </p>
          </div>
          <CameraIcon className="absolute top-[337.5px] left-[687.5px] h-6 w-6 object-cover" />
          <VoiceIcon className="absolute top-[339.5px] left-[742.5px]" />
          <p className="absolute top-[253px] left-[473px] text-center text-xl font-semibold text-white/20">
            카메라가 꺼져있습니다
          </p>
        </div>
      </div>
      <KakaoIcon className="absolute top-[37.5px] left-[1686.5px]" />
      <SettingIcon className="absolute top-[35px] left-[1755px] h-7 w-7 object-cover" />
      <LinkIcon className="absolute top-[35px] left-[1615px] h-7 w-7 object-cover" />
      <div className="absolute top-[420px] left-80 flex w-[480px] flex-col items-start justify-start">
        <div className="relative flex h-[150px] flex-shrink-0 flex-grow-0 flex-col items-center justify-center gap-5 self-stretch rounded-[20px] bg-white p-[30px]">
          <div className="h-[41px] flex-shrink-0 flex-grow-0 self-stretch">
            <p className="absolute top-[38.5px] left-[143.54px] w-[306.46px] text-left text-xl font-medium text-[#555]">
              오늘의 다짐을 작성해주세요
            </p>
            <svg
              width={6}
              height={26}
              viewBox="0 0 6 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[25px] w-[5px]"
              preserveAspectRatio="none"
            >
              <circle cx="3.45898" cy={3} r="2.5" fill="#E8E8E8" />
              <circle cx="3.45898" cy={13} r="2.5" fill="#E8E8E8" />
              <circle cx="3.45898" cy={23} r="2.5" fill="#E8E8E8" />
            </svg>
            <div className="absolute top-[30.5px] left-[30px] flex w-[93.46px] items-center justify-center gap-2.5 rounded-[32px] border border-[#e8e8e8] bg-[#f2f2f2] px-[30px] py-2.5">
              <p className="flex-shrink-0 flex-grow-0 text-left text-lg font-medium text-[#c4c4c4]">
                0/0
              </p>
            </div>
          </div>
          <div className="h-7 flex-shrink-0 flex-grow-0 self-stretch rounded-[20px] bg-[#f2f2f2]" />
        </div>
      </div>
      <div className="h-[480px] w-[480px]">
        <div className="absolute top-[568.98px] left-[318.98px] h-[480px] w-[480px] rounded-[20px] bg-white" />
        <div className="h-[108.77px] w-[246px]">
          <p className="absolute top-[756px] left-[437px] h-[28.94px] w-[260px] text-left text-2xl font-semibold text-[#c4c4c4]">
            오늘의 목표는 무엇인가요?
          </p>
          <div className="h-[59.88px] w-40">
            <div className="absolute top-[804.4px] left-[479.5px] h-[59.88px] w-40 rounded-[10px] bg-[#27cfa5]" />
            <p className="absolute top-[819.87px] left-[519px] h-[28.94px] w-[100px] text-left text-2xl font-semibold text-white">
              추가하기
            </p>
          </div>
        </div>
      </div>
      <svg
        width={445}
        height={2}
        viewBox="0 0 445 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[569.5px] left-[336.5px]"
        preserveAspectRatio="none"
      >
        <line
          x1="-8.60351e-8"
          y1={1}
          x2={445}
          y2="0.99996"
          stroke="#F2F2F2"
          stroke-width={2}
          stroke-dasharray="10 10"
        />
      </svg>
      <div className="absolute top-[570px] left-[820px] h-[480px] w-[480px] rounded-[20px] bg-white">
        <div className="h-10 w-[380px]">
          <div className="absolute top-[49.5px] left-[49.5px] h-10 w-10 rounded-[10px] border border-[#27cfa5] bg-[#bef1e4]" />
          <p className="absolute top-[58px] left-[110px] w-80 text-left text-xl font-medium text-[#c4c4c4]">
            디자인 가이드라인 설정하기
          </p>
        </div>
        <div className="h-10 w-[380px]">
          <div className="absolute top-[109.5px] left-[49.5px] h-10 w-10 rounded-[10px] border border-[#e8e8e8] bg-white" />
          <p className="absolute top-[118px] left-[110px] w-80 text-left text-xl font-medium text-[#555]">
            중충실도 와이어프레임 설계하기
          </p>
        </div>
      </div>
      <div className="absolute top-[420px] left-[1320px] flex h-[150px] w-[480px] flex-col items-start justify-start gap-5 rounded-[20px] bg-white p-[30px]">
        <div className="h-[41px] w-[415px] flex-shrink-0 flex-grow-0">
          <p className="absolute top-[38px] left-[137px] w-[282px] text-left text-xl font-medium text-[#555]">
            대단해요! 목표를 모두 달성했어요
          </p>
          <svg
            width={5}
            height={25}
            viewBox="0 0 5 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[25px] w-[5px]"
            preserveAspectRatio="none"
          >
            <circle cx="2.5" cy="2.5" r="2.5" fill="#E8E8E8" />
            <circle cx="2.5" cy="12.5" r="2.5" fill="#E8E8E8" />
            <circle cx="2.5" cy="22.5" r="2.5" fill="#E8E8E8" />
          </svg>
          <div className="absolute top-[30px] left-[30px] flex items-center justify-center gap-2.5 rounded-[32px] border border-[#f00] bg-[#fae9e9] px-[30px] py-2.5">
            <p className="flex-shrink-0 flex-grow-0 text-left text-lg font-medium text-[#f00]">
              2/2
            </p>
          </div>
        </div>
        <div className="h-7 flex-shrink-0 flex-grow-0 self-stretch rounded-[20px] bg-[#27cfa5]" />
      </div>
      <div className="absolute top-[570px] left-[1320px] flex h-[480px] w-[480px] flex-col items-end justify-start gap-5 rounded-[20px] bg-white p-[50px]">
        <div className="h-10 w-[380px] flex-shrink-0 flex-grow-0">
          <div className="absolute top-[49.5px] left-[49.5px] h-10 w-10 rounded-[10px] border border-[#27cfa5] bg-[#bef1e4]" />
          <p className="absolute top-[58px] left-[110px] w-80 text-left text-xl font-medium text-[#c4c4c4]">
            기능 명세서 작성 완료하기
          </p>
        </div>
        <div className="h-10 w-[380px] flex-shrink-0 flex-grow-0">
          <div className="absolute top-[109.5px] left-[49.5px] h-10 w-10 rounded-[10px] border border-[#27cfa5] bg-[#bef1e4]" />
          <p className="absolute top-[118px] left-[110px] w-80 text-left text-xl font-medium text-[#c4c4c4]">
            IA, Flow Chart 구상하기
          </p>
        </div>
      </div>
      <svg
        width={445}
        height={2}
        viewBox="0 0 445 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[569.5px] left-[1336.5px]"
        preserveAspectRatio="none"
      >
        <line
          x1="-8.60351e-8"
          y1={1}
          x2={445}
          y2="0.99996"
          stroke="#F2F2F2"
          stroke-width={2}
          stroke-dasharray="10 10"
        />
      </svg>
      <div className="absolute top-[420px] left-[820px] flex h-[150px] w-[480px] flex-col items-start justify-start gap-5 rounded-[20px] bg-white p-[30px]">
        <div className="h-[41px] flex-shrink-0 flex-grow-0 self-stretch">
          <p className="absolute top-[38px] left-[143.54px] w-[306.46px] text-left text-xl font-medium text-[#555]">
            목표 두 개 꼭 완수하기!
          </p>
          <svg
            width={6}
            height={25}
            viewBox="0 0 6 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[25px] w-[5px]"
            preserveAspectRatio="none"
          >
            <circle cx="3.46094" cy="2.5" r="2.5" fill="#E8E8E8" />
            <circle cx="3.46094" cy="12.5" r="2.5" fill="#E8E8E8" />
            <circle cx="3.46094" cy="22.5" r="2.5" fill="#E8E8E8" />
          </svg>
          <div className="absolute top-[30px] left-[30px] flex w-[93.46px] items-center justify-center gap-2.5 rounded-[32px] border border-[#0096ff] bg-[#d7f0ff] px-[30px] py-2.5">
            <p className="flex-shrink-0 flex-grow-0 text-left text-lg font-medium text-[#0096ff]">
              1/2
            </p>
          </div>
        </div>
        <GoalGauge className="h-[27.84px] w-[417.67px] flex-shrink-0 flex-grow-0" />
      </div>
      <svg
        width={445}
        height={2}
        viewBox="0 0 445 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[569.5px] left-[836.5px]"
        preserveAspectRatio="none"
      >
        <line
          x1="-8.60351e-8"
          y1={1}
          x2={445}
          y2="0.99996"
          stroke="#F2F2F2"
          stroke-width={2}
          stroke-dasharray="10 10"
        />
      </svg>
      <div className="absolute top-[493px] left-[1115px] flex flex-col items-start justify-center gap-5 rounded-[10px] border border-[#e8e8e8] bg-white p-5">
        <div className="h-[19px] w-[115px] flex-shrink-0 flex-grow-0">
          <p className="absolute top-5 left-[50px] text-left text-base font-medium text-[#555]">
            다짐 수정하기
          </p>
          <div className="absolute top-[22px] left-5 flex items-center justify-start gap-2.5 px-[3px]">
            <PencilIcon className="h-[15px] w-[15px] flex-shrink-0 flex-grow-0 object-cover"></PencilIcon>
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
      <div className="h-20 w-[280px]">
        <div className="absolute top-[896px] left-[25px] flex h-20 w-[280px] flex-col items-center justify-center gap-[19px] rounded-[10px] border border-[#27cfa5] bg-[#d4f5ed] p-5">
          <div className="flex h-[34px] w-[231px] items-center justify-center">
            <p className="top-[29px] left-[33px] text-left text-lg font-medium text-[#00af83]">
              모캠프 종료까지 10분 남았어요
            </p>
          </div>
        </div>
      </div>
      <div className="h-[54px] w-[35px]">
        <ChiefIcon className="absolute top-40 left-[350px] h-[35px] w-[35px]" />
        <p className="absolute top-[200px] left-[357px] text-left text-xs font-semibold text-white">
          방장
        </p>
      </div>
      <div className="absolute top-[1431.5px] left-[-1px]" />
    </div>
  );
};

export default TutorialBackground;
