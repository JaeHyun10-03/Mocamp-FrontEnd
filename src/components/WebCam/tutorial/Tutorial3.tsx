const Tutorial3 = ({ onNext }: { onNext: () => void }) => {
  return (
    <div onClick={onNext} className="relative z-50 h-screen w-screen overflow-hidden bg-[#0000000]">
      <div className="absolute top-[-1px] left-[-1px] h-[100px] w-[1920px] bg-white" />
      <svg
        width={201}
        height={1080}
        viewBox="0 0 201 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[1080px] w-[200px]"
        preserveAspectRatio="none"
      >
        <rect width={200} height={1080} fill="white" />
        <line x1="200.5" y1="-1.09279e-8" x2="200.5" y2={1080} stroke="#E8E8E8" />
      </svg>
      <svg
        width={120}
        height={49}
        viewBox="0 0 120 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[48.43px] w-[120px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M76.6768 28.4316L73.2295 48.4316H53.2295L49.9922 28.335L76.6768 28.4316ZM59.2832 42.4082H67.2988L68.6807 34.3916L57.9854 34.3555L59.2832 42.4082ZM114.971 35.04H78.2402L79.9209 28.3203H116.64L114.971 35.04ZM33.3271 21.7568H23.2939V28.335H38.2949L36.6279 34.9707H1.62695L3.29395 28.335H16.6289V21.7568H3.30469L0 0H33.3271V21.7568ZM65.1699 3.33398L60.002 26.668H51.666L53.333 21.667H43.333V15.001H55L56.667 10H35.001V0L65.1699 3.33398ZM71.7852 13.3145H73.5127L74.9932 6.66504H81.668L80.1846 13.334L77.2158 26.668H70.54L72.0293 19.9795H70.3037L68.8164 26.668H62.1377L66.5908 6.66504H73.2656L71.7852 13.3145ZM120 3.33398L118.336 10H111.196L108.337 20.0527H116.669L115.002 26.668H81.668L83.3359 20.0527H88.334L91.0518 10H83.3086L83.3359 0L120 3.33398ZM95.002 20.0527H101.671L104.389 10H97.8594L95.002 20.0527ZM9.61719 15.001H26.665V6.66895H8.33301L9.61719 15.001Z"
          fill="url(#paint0_linear_3572_1761)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3572_1761"
            x1={60}
            y1={0}
            x2={102}
            y2="58.8002"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#27CFA5" />
            <stop offset={1} stop-color="#0096FF" />
          </linearGradient>
        </defs>
      </svg>
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
      <svg
        width={60}
        height={60}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[60px] w-[60px]"
        preserveAspectRatio="none"
      >
        <circle cx={30} cy={30} r={30} transform="rotate(-180 30 30)" fill="white" />
        <path
          d="M40 31.5C40.8284 31.5 41.5 30.8284 41.5 30C41.5 29.1716 40.8284 28.5 40 28.5L40 31.5ZM18.9393 28.9393C18.3536 29.5251 18.3536 30.4749 18.9393 31.0607L28.4853 40.6066C29.0711 41.1924 30.0208 41.1924 30.6066 40.6066C31.1924 40.0208 31.1924 39.0711 30.6066 38.4853L22.1213 30L30.6066 21.5147C31.1924 20.9289 31.1924 19.9792 30.6066 19.3934C30.0208 18.8076 29.0711 18.8076 28.4853 19.3934L18.9393 28.9393ZM40 30L40 28.5L20 28.5L20 30L20 31.5L40 31.5L40 30Z"
          fill="#27CFA5"
        />
      </svg>
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
          <img
            src="camera-(1)-1.png"
            className="absolute top-[337.5px] left-[1687.5px] h-6 w-6 object-cover"
          />
          <svg
            width={14}
            height={20}
            viewBox="0 0 14 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[339.5px] left-[1742.5px]"
            preserveAspectRatio="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.75 16.96V20H6.25V16.96C4.53323 16.775 2.94541 15.962 1.79173 14.6773C0.638056 13.3925 -7.26502e-05 11.7267 6.20374e-09 10V8H1.5V10C1.5 11.4587 2.07946 12.8576 3.11091 13.8891C4.14236 14.9205 5.54131 15.5 7 15.5C8.45869 15.5 9.85764 14.9205 10.8891 13.8891C11.9205 12.8576 12.5 11.4587 12.5 10V8H14V10C14.0001 11.7267 13.3619 13.3925 12.2083 14.6773C11.0546 15.962 9.46677 16.775 7.75 16.96ZM3 4C3 2.93913 3.42143 1.92172 4.17157 1.17157C4.92172 0.421427 5.93913 0 7 0C8.06087 0 9.07828 0.421427 9.82843 1.17157C10.5786 1.92172 11 2.93913 11 4V10C11 11.0609 10.5786 12.0783 9.82843 12.8284C9.07828 13.5786 8.06087 14 7 14C5.93913 14 4.92172 13.5786 4.17157 12.8284C3.42143 12.0783 3 11.0609 3 10V4Z"
              fill="white"
            />
          </svg>
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
            <div className="absolute top-[329.49px] left-[1179.49px] h-10 w-10 rounded-[6.96px] bg-[#5f5f5f]/50" />
            <img
              src="camera-(1)-1.png"
              className="absolute top-[337.5px] left-[1187.5px] h-6 w-6 object-cover"
            />
          </div>
          <svg
            width={40}
            height={40}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            preserveAspectRatio="none"
          >
            <foreignObject x={-3} y={-3} width={46} height={46}>
              <div
                style={{
                  backdropFilter: 'blur(1.5px)',
                  clipPath: 'url(#bgblur_0_3572_1832_clip_path)',
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
              <clipPath id="bgblur_0_3572_1832_clip_path" transform="translate(3 3)">
                <rect width={40} height={40} rx="6.95652" />
              </clipPath>
            </defs>
          </svg>
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
          <img
            src="camera-(1)-1.png"
            className="absolute top-[337.5px] left-[687.5px] h-6 w-6 object-cover"
          />
          <svg
            width={14}
            height={20}
            viewBox="0 0 14 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[339.5px] left-[742.5px]"
            preserveAspectRatio="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.75 16.96V20H6.25V16.96C4.53323 16.775 2.94541 15.962 1.79173 14.6773C0.638056 13.3925 -7.26502e-05 11.7267 6.20374e-09 10V8H1.5V10C1.5 11.4587 2.07946 12.8576 3.11091 13.8891C4.14236 14.9205 5.54131 15.5 7 15.5C8.45869 15.5 9.85764 14.9205 10.8891 13.8891C11.9205 12.8576 12.5 11.4587 12.5 10V8H14V10C14.0001 11.7267 13.3619 13.3925 12.2083 14.6773C11.0546 15.962 9.46677 16.775 7.75 16.96ZM3 4C3 2.93913 3.42143 1.92172 4.17157 1.17157C4.92172 0.421427 5.93913 0 7 0C8.06087 0 9.07828 0.421427 9.82843 1.17157C10.5786 1.92172 11 2.93913 11 4V10C11 11.0609 10.5786 12.0783 9.82843 12.8284C9.07828 13.5786 8.06087 14 7 14C5.93913 14 4.92172 13.5786 4.17157 12.8284C3.42143 12.0783 3 11.0609 3 10V4Z"
              fill="white"
            />
          </svg>
          <p className="absolute top-[253px] left-[473px] text-center text-xl font-semibold text-white/20">
            카메라가 꺼져있습니다
          </p>
        </div>
      </div>
      <svg
        width={26}
        height={24}
        viewBox="0 0 26 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[37.5px] left-[1686.5px]"
        preserveAspectRatio="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.0001 0C5.81994 0 0 4.44708 0 9.93183C0 13.3429 2.25104 16.35 5.67889 18.1385L4.23661 23.3493C4.10919 23.8097 4.64162 24.1767 5.05047 23.9099L11.3727 19.7831C11.9062 19.8341 12.4484 19.8638 13.0001 19.8638C20.1796 19.8638 26 15.4169 26 9.93183C26 4.44708 20.1796 0 13.0001 0Z"
          fill="#555555"
          fill-opacity="0.5"
        />
      </svg>
      <img src="gear-1.png" className="absolute top-[35px] left-[1755px] h-7 w-7 object-cover" />
      <img
        src="paperclip-1.png"
        className="absolute top-[35px] left-[1615px] h-7 w-7 object-cover"
      />
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
          <p className="absolute top-[756px] left-[437px] h-[28.94px] w-[246px] text-left text-2xl font-semibold text-[#c4c4c4]">
            오늘의 목표는 무엇인가요?
          </p>
          <div className="h-[59.88px] w-40">
            <div className="absolute top-[804.4px] left-[479.5px] h-[59.88px] w-40 rounded-[10px] bg-[#27cfa5]" />
            <p className="absolute top-[819.87px] left-[519px] h-[28.94px] w-[82px] text-left text-2xl font-semibold text-white">
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
      <svg
        width={60}
        height={60}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[60px] w-[60px]"
        preserveAspectRatio="none"
      >
        <circle cx={30} cy={30} r={30} fill="white" />
        <path
          d="M20 28.5C19.1716 28.5 18.5 29.1716 18.5 30C18.5 30.8284 19.1716 31.5 20 31.5L20 28.5ZM41.0607 31.0607C41.6464 30.4749 41.6464 29.5251 41.0607 28.9393L31.5147 19.3934C30.9289 18.8076 29.9792 18.8076 29.3934 19.3934C28.8076 19.9792 28.8076 20.9289 29.3934 21.5147L37.8787 30L29.3934 38.4853C28.8076 39.0711 28.8076 40.0208 29.3934 40.6066C29.9792 41.1924 30.9289 41.1924 31.5147 40.6066L41.0607 31.0607ZM20 30L20 31.5L40 31.5L40 30L40 28.5L20 28.5L20 30Z"
          fill="#27CFA5"
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
            <circle cx="3.44531" cy="2.5" r="2.5" fill="#E8E8E8" />
            <circle cx="3.44531" cy="12.5" r="2.5" fill="#E8E8E8" />
            <circle cx="3.44531" cy="22.5" r="2.5" fill="#E8E8E8" />
          </svg>
          <div className="absolute top-[30px] left-[30px] flex w-[93.46px] items-center justify-center gap-2.5 rounded-[32px] border border-[#0096ff] bg-[#d7f0ff] px-[30px] py-2.5">
            <p className="flex-shrink-0 flex-grow-0 text-left text-lg font-medium text-[#0096ff]">
              1/2
            </p>
          </div>
        </div>
        <svg
          width={418}
          height={28}
          viewBox="0 0 418 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[27.84px] w-[417.67px] flex-shrink-0 flex-grow-0"
          preserveAspectRatio="none"
        >
          <path
            d="M0 13.9224C0 6.23329 6.23328 0 13.9224 0H403.751C411.44 0 417.673 6.23329 417.673 13.9224C417.673 21.6116 411.44 27.8449 403.751 27.8449H13.9224C6.23328 27.8449 0 21.6116 0 13.9224Z"
            fill="#F2F2F2"
          />
          <path
            d="M0 13.9224C0 6.23329 6.23328 0 13.9224 0H194.571C202.26 0 208.494 6.23329 208.494 13.9224C208.494 21.6116 202.26 27.8449 194.571 27.8449H13.9224C6.23328 27.8449 0 21.6116 0 13.9224Z"
            fill="#27CFA5"
          />
        </svg>
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
            <img
              src="pencil-1.png"
              className="h-[15px] w-[15px] flex-shrink-0 flex-grow-0 object-cover"
            />
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
            <img
              src="pencil-1.png"
              className="h-[15px] w-[15px] flex-shrink-0 flex-grow-0 object-cover"
            />
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
          <div className="h-[34px] w-[231px] flex-shrink-0 flex-grow-0">
            <svg
              width={12}
              height={12}
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-2.5 w-2.5"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d="M1 1L11 11" stroke="#00AF83" stroke-linecap="round" />
              <path d="M11 1L0.999999 11" stroke="#00AF83" stroke-linecap="round" />
            </svg>
            <div className="h-[21px] w-[214px]">
              <p className="absolute top-[29px] left-[33px] text-left text-lg font-medium text-[#00af83]">
                모캠프 종료까지 10분 남았어요
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[-1px] left-[-1px] h-[1080px] w-[1920px] bg-black/90" />
      <div className="h-[54px] w-[35px]">
        <svg
          width={35}
          height={35}
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-40 left-[350px] h-[35px] w-[35px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M9.72252 11.1376C9.56666 12.8001 9.45728 15.7423 10.4389 16.9946C10.4389 16.9946 9.97681 13.7626 14.1194 9.70754C15.7874 8.07512 16.1729 5.8548 15.5905 4.18957C15.2596 3.24621 14.6553 2.46691 14.1303 1.92277C13.8241 1.60285 14.0592 1.07512 14.5049 1.09426C17.201 1.21457 21.5706 1.96379 23.4272 6.62316C24.242 8.66848 24.3022 10.7821 23.9139 12.9314C23.6678 14.304 22.7928 17.3556 24.7889 17.7302C26.2135 17.9982 26.9026 16.8661 27.2116 16.0513C27.3401 15.7122 27.7858 15.6275 28.0264 15.8982C30.4327 18.6353 30.6378 21.8591 30.1401 24.6345C29.1776 29.9993 23.7444 33.904 18.3467 33.904C11.6038 33.904 6.23619 30.0458 4.84439 23.0622C4.28384 20.2431 4.56822 14.665 8.91588 10.7275C9.23853 10.4321 9.76627 10.6946 9.72252 11.1376Z"
            fill="url(#paint0_radial_3572_1931)"
          />
          <path
            d="M20.811 21.1702C18.3255 17.971 19.4384 14.3206 20.0481 12.8659C20.1302 12.6745 19.9114 12.494 19.7392 12.6116C18.67 13.3389 16.4798 15.0507 15.4599 17.4596C14.079 20.7163 14.1774 22.3104 14.995 24.2573C15.4872 25.4304 14.9157 25.6792 14.6286 25.7229C14.3497 25.7667 14.0927 25.5807 13.8876 25.3866C13.2977 24.8201 12.8773 24.1005 12.6735 23.3085C12.6298 23.1389 12.4083 23.0925 12.3071 23.2319C11.5415 24.2901 11.145 25.9882 11.1259 27.1886C11.0657 30.8991 14.1309 33.9069 17.8388 33.9069C22.5118 33.9069 25.9161 28.7389 23.2309 24.4186C22.4517 23.1608 21.7188 22.3378 20.811 21.1702Z"
            fill="white"
          />
          <defs>
            <radialGradient
              id="paint0_radial_3572_1931"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(17.0112 33.989) rotate(-179.751) scale(19.3013 31.6696)"
            >
              <stop offset="0.314" stop-color="#27CFA5" />
              <stop offset="0.662" stop-color="#27CFA5" />
              <stop offset="0.972" stop-color="#27CFA5" />
            </radialGradient>
          </defs>
        </svg>
        <p className="absolute top-[200px] left-[357px] text-left text-xs font-semibold text-white">
          방장
        </p>
      </div>

      {/* 설명 */}
      <div className="absolute top-5 left-[815px] flex w-[765px] items-center justify-start gap-2.5 rounded-[10px] border border-[#e8e8e8] bg-white px-10 py-[18px]">
        <p className="w-[650px] flex-shrink-0 flex-grow-0 text-left text-xl font-medium text-[#c4c4c4]">
          공지사항을 입력하세요
        </p>
      </div>
      <svg
        width={88}
        height={88}
        viewBox="0 0 88 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[138px] left-[322px]"
        preserveAspectRatio="none"
      >
        <circle cx={44} cy={44} r={44} fill="#27CFA5" fill-opacity="0.5" />
      </svg>
      <div className="h-[76px] w-[526px]">
        <p className="absolute top-[208.77px] left-[1058px] text-left text-[28px] font-bold text-[#27cfa5]">
          방장은 공지사항을 입력할 수 있어요
        </p>
        <p className="absolute top-[252.77px] left-[1058px] text-left text-xl font-medium text-white">
          모각작을 위한 중요한 규칙이나 하고 싶은 말을 자유롭게 작성해보세요
        </p>
      </div>
      <div className="h-[108px] w-[509px]">
        <p className="absolute top-[277px] left-80 text-left text-[28px] font-bold text-[#27cfa5]">
          방장 아이콘을 클릭하여 권한을 위임할 수 있어요
        </p>
        <p className="absolute top-[321px] left-80 text-left text-xl font-medium text-white">
          <span className="text-left text-xl font-medium text-white">
            방장은 모캠프 뱃지와 권한을 부여받아요
          </span>
          <br />
          <span className="text-left text-xl font-medium text-white">
            불가피한 상황으로 방을 나가게 될 경우 권한을 꼭 위임해주세요
          </span>
        </p>
      </div>

      {/* 화살표 아이콘 : 참여한 방의 정보를 한눈에 볼 수 있어요 -> 시작 종료 타이머로  */}
      <svg
        width={43}
        height={76}
        viewBox="0 0 43 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[178px] left-[452px] h-[74.55px] w-[41.26px]"
        preserveAspectRatio="none"
      >
        <path
          d="M40.8905 74.5469C44.2239 59.5469 43.4153 27.942 15.3905 33.5469C-14.6098 39.5469 8.89046 74.5469 26.3905 58.5469C43.4492 42.9503 26.3905 18.0469 15.3905 8.54687"
          stroke="#BEF1E4"
          stroke-linecap="round"
          stroke-dasharray="8 8"
        />
        <path
          d="M9.97027 3.51402L18.0629 5.36039L12.4176 11.4456L9.97027 3.51402Z"
          fill="#27CFA5"
        />
      </svg>

      {/* 화살표 아이콘 : 참여한 방의 정보를 한눈에 볼 수 있어요 -> 시작 종료 타이머로  */}
      <svg
        width={43}
        height={76}
        viewBox="0 0 43 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[100px] left-[1058px] h-[74.55px] w-[41.26px]"
        preserveAspectRatio="none"
      >
        <path
          d="M2.36532 74.5469C-0.968018 59.5469 -0.15941 27.942 27.8653 33.5469C57.8657 39.5469 34.3654 74.5469 16.8654 58.5469C-0.19332 42.9503 16.8654 18.0469 27.8653 8.54688"
          stroke="#BEF1E4"
          stroke-linecap="round"
          stroke-dasharray="8 8"
        />
        <path
          d="M33.2856 3.51402L25.1929 5.36038L30.8383 11.4456L33.2856 3.51402Z"
          fill="#27CFA5"
        />
      </svg>
      <div className="h-[54px] w-[35px]">
        <svg
          width={35}
          height={35}
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-40 left-[350px] h-[35px] w-[35px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M9.72252 11.1376C9.56666 12.8001 9.45728 15.7423 10.4389 16.9946C10.4389 16.9946 9.97681 13.7626 14.1194 9.70754C15.7874 8.07512 16.1729 5.8548 15.5905 4.18957C15.2596 3.24621 14.6553 2.46691 14.1303 1.92277C13.8241 1.60285 14.0592 1.07512 14.5049 1.09426C17.201 1.21457 21.5706 1.96379 23.4272 6.62316C24.242 8.66848 24.3022 10.7821 23.9139 12.9314C23.6678 14.304 22.7928 17.3556 24.7889 17.7302C26.2135 17.9982 26.9026 16.8661 27.2116 16.0513C27.3401 15.7122 27.7858 15.6275 28.0264 15.8982C30.4327 18.6353 30.6378 21.8591 30.1401 24.6345C29.1776 29.9993 23.7444 33.904 18.3467 33.904C11.6038 33.904 6.23619 30.0458 4.84439 23.0622C4.28384 20.2431 4.56822 14.665 8.91588 10.7275C9.23853 10.4321 9.76627 10.6946 9.72252 11.1376Z"
            fill="url(#paint0_radial_3572_1945)"
          />
          <path
            d="M20.811 21.1702C18.3255 17.971 19.4384 14.3206 20.0481 12.8659C20.1302 12.6745 19.9114 12.494 19.7392 12.6116C18.67 13.3389 16.4798 15.0507 15.4599 17.4596C14.079 20.7163 14.1774 22.3104 14.995 24.2573C15.4872 25.4304 14.9157 25.6792 14.6286 25.7229C14.3497 25.7667 14.0927 25.5807 13.8876 25.3866C13.2977 24.8201 12.8773 24.1005 12.6735 23.3085C12.6298 23.1389 12.4083 23.0925 12.3071 23.2319C11.5415 24.2901 11.145 25.9882 11.1259 27.1886C11.0657 30.8991 14.1309 33.9069 17.8388 33.9069C22.5118 33.9069 25.9161 28.7389 23.2309 24.4186C22.4517 23.1608 21.7188 22.3378 20.811 21.1702Z"
            fill="white"
          />
          <defs>
            <radialGradient
              id="paint0_radial_3572_1945"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(17.0112 33.989) rotate(-179.751) scale(19.3013 31.6696)"
            >
              <stop offset="0.314" stop-color="#27CFA5" />
              <stop offset="0.662" stop-color="#27CFA5" />
              <stop offset="0.972" stop-color="#27CFA5" />
            </radialGradient>
          </defs>
        </svg>
        <p className="absolute top-[200px] left-[357px] text-left text-xs font-semibold text-white">
          방장
        </p>
      </div>
      <svg
        width={70}
        height={10}
        viewBox="0 0 70 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-2.5 w-[70px]"
        preserveAspectRatio="none"
      >
        <circle cx={65} cy={5} r={5} fill="#27CFA5" />
        <circle cx={5} cy={5} r={5} fill="#D9D9D9" />
        <circle cx={35} cy={5} r={5} fill="#D9D9D9" />
      </svg>
      <div className="h-[60px] w-[246px]">
        <div className="h-[60px] w-[246px]">
          <div className="absolute top-[927px] left-[836px] h-[60px] w-[246px] cursor-pointer rounded-[10px] bg-[#27cfa5]" />
          <p className="absolute top-[943px] left-[876px] cursor-pointer text-left text-2xl font-semibold text-white">
            튜토리얼 종료하기
          </p>
        </div>
      </div>
      <div className="h-[295px] w-[479.56px]">
        <div className="h-[295px] w-[479.56px]">
          <div className="h-[295px] w-[479.56px]">
            <div className="absolute top-[421.64px] left-[319.64px] h-[295px] w-[479.56px] rounded-[14.48px] bg-white" />
            <div className="h-[50.93px] w-[260.88px]">
              <p className="absolute top-[458.33px] left-[356.33px] h-[28.1px] w-[180px] text-left text-[23.17241096496582px] font-semibold text-[#555]">
                방장 권한 위임하기
              </p>
              <p className="absolute top-[493.2px] left-[356.33px] h-[16.05px] w-[280px] text-left text-[13.034481048583984px] font-medium text-[#a7a7a7]">
                원활한 모캠프 사용을 위해 방장 권한을 위임해주세요
              </p>
            </div>
            <div className="absolute top-[544.8px] left-[356.33px] flex h-[60.31px] w-[406.9px] items-center justify-between rounded-[7.24px] border-[0.72px] border-[#e8e8e8] bg-white px-[28.96551513671875px] py-[14.482757568359375px]">
              <div className="h-[17px] w-[37px] flex-shrink-0 flex-grow-0">
                <p className="absolute top-[21.65px] left-[28.96px] text-left text-[14.482757568359375px] font-medium text-[#555]">
                  이은학
                </p>
              </div>
              <p className="flex-shrink-0 flex-grow-0 text-left text-[14.482757568359375px] font-medium text-[#c4c4c4]">
                ▼
              </p>
            </div>
          </div>
          <div className="absolute top-[619.64px] left-[356.33px] flex h-[61.03px] w-[406.9px] items-center justify-center gap-[7.2413787841796875px] rounded-[7.24px] bg-[#27cfa5] px-[28.96551513671875px] py-[21.724136352539062px]">
            <p className="flex-shrink-0 flex-grow-0 text-left text-[14.482757568359375px] font-semibold text-white">
              권한 위임하기
            </p>
          </div>
        </div>
        <svg
          width={22}
          height={21}
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[18.17px] w-[18.17px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M2.06055 1.32812L20.2241 19.4946"
            stroke="#D9D9D9"
            stroke-width="2.17241"
            stroke-linecap="round"
          />
          <path
            d="M20.2266 1.32812L2.06298 19.4946"
            stroke="#D9D9D9"
            stroke-width="2.17241"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Tutorial3;
