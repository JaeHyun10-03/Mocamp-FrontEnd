const Tutorial1 = ({ onNext }: { onNext: () => void }) => {
  return (
    <div onClick={onNext} className="absolute z-50 min-h-screen min-w-screen overflow-hidden">
      {/* 설명부분 */}
      <div className="h-[209px] w-[346px]">
        <div className="h-[209px] w-[346px]">
          <div className="absolute top-[704px] left-[386px] h-[209px] w-[346px] rounded-[20px] bg-white" />
          <div className="h-[109px] w-[246px]">
            <p className="absolute top-[755px] left-[437px] text-left text-2xl font-semibold text-[#c4c4c4]">
              오늘의 목표는 무엇인가요?
            </p>
            <div className="h-[60px] w-40">
              <div className="absolute top-[803px] left-[479px] h-[60px] w-40 rounded-[10px] bg-[#27cfa5]" />
              <p className="absolute top-[819px] left-[519px] text-left text-2xl font-semibold text-white">
                추가하기
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[640px] w-[480px]">
        <div className="absolute top-[273.64px] left-[819.64px] h-[640px] w-[480px] rounded-[14.55px] bg-white" />
        <div className="h-[50.91px] w-48">
          <p className="absolute top-[310.36px] left-[856.36px] text-left text-[23.27272605895996px] font-semibold text-[#555]">
            나의 목표 관리
          </p>
          <p className="absolute top-[345.27px] left-[856.36px] text-left text-[13.090909004211426px] font-medium text-[#a7a7a7]">
            나의 목표를 자유롭게 설정할 수 있어요
          </p>
        </div>
        <div className="absolute top-[396.91px] left-[856.36px] flex h-[50.91px] w-[385.45px] items-center justify-between rounded-[7.27px] border-[0.73px] border-[#e8e8e8] bg-neutral-50 px-[29.09090805053711px] py-[14.545454025268555px]">
          <div className="h-[17px] w-[257.45px] flex-shrink-0 flex-grow-0">
            <p className="absolute top-[16.95px] left-[29.09px] w-[257.45px] text-left text-[14.545454025268555px] font-medium text-[#c4c4c4]">
              나의 목표 1
            </p>
          </div>
        </div>
        <div className="absolute top-[455.09px] left-[856.36px] flex h-[50.91px] w-[385.45px] items-center justify-between rounded-[7.27px] border-[0.73px] border-[#e8e8e8] bg-white px-[29.09090805053711px] py-[14.545454025268555px]">
          <div className="h-[17px] w-[257.45px] flex-shrink-0 flex-grow-0">
            <p className="absolute top-[16.95px] left-[29.09px] w-[257.45px] text-left text-[14.545454025268555px] font-medium text-[#555]">
              나의 목표 2
            </p>
          </div>
          <svg
            width={14}
            height={15}
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[11.64px] w-[11.64px] flex-shrink-0 flex-grow-0"
            preserveAspectRatio="none"
          >
            <path
              d="M1.43164 1.72656L12.726 13.3629"
              stroke="#A7A7A7"
              stroke-width="1.63356"
              stroke-linecap="round"
            />
            <path
              d="M12.3848 1.72656L1.09041 13.3629"
              stroke="#A7A7A7"
              stroke-width="1.63356"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="absolute top-[513.27px] left-[856.36px] flex h-[50.91px] w-[385.45px] items-center justify-between rounded-[7.27px] border-[0.73px] border-[#e8e8e8] bg-white px-[29.09090805053711px] py-[14.545454025268555px]">
          <div className="h-[17px] w-[257.45px] flex-shrink-0 flex-grow-0">
            <p className="absolute top-[16.95px] left-[29.09px] w-[257.45px] text-left text-[14.545454025268555px] font-medium text-[#555]">
              나의 목표 3
            </p>
          </div>
          <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[11.64px] w-[11.64px] flex-shrink-0 flex-grow-0"
            preserveAspectRatio="none"
          >
            <path
              d="M1.43164 0.90625L12.726 12.5426"
              stroke="#A7A7A7"
              stroke-width="1.63356"
              stroke-linecap="round"
            />
            <path
              d="M12.3848 0.90625L1.09041 12.5426"
              stroke="#A7A7A7"
              stroke-width="1.63356"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="absolute top-[571.45px] left-[856.36px] flex h-[50.91px] w-[385.45px] items-center justify-between rounded-[7.27px] border-[0.73px] border-[#e8e8e8] bg-white px-[29.09090805053711px] py-[14.545454025268555px]">
          <div className="h-[17px] w-[257.45px] flex-shrink-0 flex-grow-0">
            <p className="absolute top-[16.95px] left-[29.09px] w-[257.45px] text-left text-[14.545454025268555px] font-medium text-[#555]">
              나의 목표 4
            </p>
          </div>
          <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[11.64px] w-[11.64px] flex-shrink-0 flex-grow-0"
            preserveAspectRatio="none"
          >
            <path
              d="M1.43164 1.0918L12.726 12.7282"
              stroke="#A7A7A7"
              stroke-width="1.63356"
              stroke-linecap="round"
            />
            <path
              d="M12.3848 1.0918L1.09041 12.7282"
              stroke="#A7A7A7"
              stroke-width="1.63356"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="absolute top-[629.63px] left-[856.36px] flex h-[50.91px] w-[385.45px] items-center justify-between rounded-[7.27px] border-[0.73px] border-[#e8e8e8] bg-white px-[29.09090805053711px] py-[14.545454025268555px]">
          <div className="h-[17px] w-[257.45px] flex-shrink-0 flex-grow-0">
            <p className="absolute top-[16.95px] left-[29.09px] w-[257.45px] text-left text-[14.545454025268555px] font-medium text-[#555]">
              나의 목표 5
            </p>
          </div>
          <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[11.64px] w-[11.64px] flex-shrink-0 flex-grow-0"
            preserveAspectRatio="none"
          >
            <path
              d="M1.43164 1.27148L12.726 12.9078"
              stroke="#A7A7A7"
              stroke-width="1.63356"
              stroke-linecap="round"
            />
            <path
              d="M12.3848 1.27148L1.09041 12.9078"
              stroke="#A7A7A7"
              stroke-width="1.63356"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="absolute top-[687.82px] left-[856.36px] flex h-[50.91px] w-[385.45px] items-center justify-between rounded-[7.27px] border-[0.73px] border-[#e8e8e8] bg-white px-[29.09090805053711px] py-[14.545454025268555px]">
          <div className="h-[17px] w-[257.45px] flex-shrink-0 flex-grow-0">
            <p className="absolute top-[16.95px] left-[29.09px] w-[257.45px] text-left text-[14.545454025268555px] font-medium text-[#555]">
              나의 목표 6
            </p>
          </div>
          <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[11.64px] w-[11.64px] flex-shrink-0 flex-grow-0"
            preserveAspectRatio="none"
          >
            <path
              d="M1.43164 1.45312L12.726 13.0895"
              stroke="#A7A7A7"
              stroke-width="1.63356"
              stroke-linecap="round"
            />
            <path
              d="M12.3848 1.45312L1.09041 13.0895"
              stroke="#A7A7A7"
              stroke-width="1.63356"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="absolute top-[816.55px] left-[856.36px] flex h-[61.09px] w-[136px] items-center justify-center gap-[7.272727012634277px] rounded-[7.27px] border-[0.73px] border-[#e8e8e8] bg-white px-[29.09090805053711px] py-[21.818180084228516px]">
          <p className="flex-shrink-0 flex-grow-0 text-left text-[14.545454025268555px] font-semibold text-[#27cfa5]">
            목표 생성하기
          </p>
        </div>
        <div className="absolute top-[816.55px] left-[1006.91px] flex h-[61.09px] w-[256.73px] items-center justify-center gap-[7.272727012634277px] rounded-[7.27px] bg-[#27cfa5] px-[29.09090805053711px] py-[21.818180084228516px]">
          <p className="flex-shrink-0 flex-grow-0 text-left text-[14.545454025268555px] font-semibold text-white">
            완료하기
          </p>
        </div>
        <div className="h-[341.82px] w-[7.27px]">
          <div className="absolute top-[396.54px] left-[1256px] h-[341.82px] w-[7.27px] rounded-[7.27px] bg-[#f8f8f8]" />
          <div className="absolute top-[396.54px] left-[1256px] h-[59.45px] w-[7.27px] rounded-[43.64px] bg-[#e8e8e8]" />
        </div>
        {/* X 표시 */}
        {/* <svg
          width={21}
          height={21}
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[18.18px] w-[18.18px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M1.45508 1.36328L19.6367 19.5453"
            stroke="#D9D9D9"
            stroke-width="2.18182"
            stroke-linecap="round"
          />
          <path
            d="M19.6367 1.36328L1.45507 19.5453"
            stroke="#D9D9D9"
            stroke-width="2.18182"
            stroke-linecap="round"
          />
        </svg> */}
      </div>
      <div className="h-[162.55px] w-[382px]">
        <p className="absolute top-[522px] left-[264px] text-left text-[28px] font-bold text-[#27cfa5]">
          목표를 자유롭게 추가해보세요
        </p>
        <p className="absolute top-[566px] left-[264px] text-left text-xl font-medium text-white">
          추가하기 버튼을 누르면 목표 생성 모달창이 나와요
        </p>

        {/* 화살표 아이콘 : 나의 목표를 관리할 수 있어요 -> 투두 리스트 */}
        <svg
          width={43}
          height={76}
          viewBox="0 0 43 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[202px] left-[730px] h-[74.55px] w-[41.26px]"
          preserveAspectRatio="none"
        >
          <path
            d="M2.36532 1C-0.968018 16 -0.15941 47.6049 27.8653 42C57.8657 36 34.3654 1 16.8654 17C-0.19332 32.5966 16.8654 57.5 27.8653 67"
            stroke="#BEF1E4"
            stroke-linecap="round"
            stroke-dasharray="8 8"
          />
          <path
            d="M33.2856 72.0329L25.1929 70.1865L30.8383 64.1012L33.2856 72.0329Z"
            fill="#27CFA5"
          />
        </svg>
      </div>
      <div className="h-[162.55px] w-[476px]">
        <p className="absolute top-[114px] left-[609px] text-left text-[28px] font-bold text-[#27cfa5]">
          나의 목표를 관리할 수 있어요
        </p>
        <p className="absolute top-[158px] left-[609px] text-left text-xl font-medium text-white">
          목표 생성하기 버튼을 클릭하여 나만의 목표를 설정할 수 있어요
        </p>

        {/* 화살표 아이콘 : 목표를 자유롭게 추갛보세요 -> 투두 리스트 */}
        <svg
          width={43}
          height={76}
          viewBox="0 0 43 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[610px] left-[386px] h-[74.55px] w-[41.26px]"
          preserveAspectRatio="none"
        >
          <path
            d="M2.36532 1C-0.968018 16 -0.15941 47.6049 27.8653 42C57.8657 36 34.3654 1 16.8654 17C-0.19332 32.5966 16.8654 57.5 27.8653 67"
            stroke="#BEF1E4"
            stroke-linecap="round"
            stroke-dasharray="8 8"
          />
          <path
            d="M33.2856 72.0329L25.1929 70.1865L30.8383 64.1012L33.2856 72.0329Z"
            fill="#27CFA5"
          />
        </svg>
      </div>
      <svg
        width={11}
        height={11}
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[424px] left-[824px]"
        preserveAspectRatio="none"
      >
        <circle cx="5.5" cy="5.5" r="5.5" transform="rotate(-180 5.5 5.5)" fill="#27CFA5" />
      </svg>
      <svg
        width={87}
        height={391}
        viewBox="0 0 87 391"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[418.5px] left-[731.5px]"
        preserveAspectRatio="none"
      >
        <path d="M87 1H40V390H0" stroke="#27CFA5" stroke-width={2} />
      </svg>
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
      <div className="absolute top-[570px] left-[1320px] flex h-[200px] w-[480px] flex-col items-end justify-start gap-5 rounded-[20px] border border-[#e8e8e8] bg-white p-[50px]">
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
      <div className="h-[203px] w-[510px]">
        <p className="absolute top-[893.99px] left-[1340px] text-left text-[28px] font-bold text-[#27cfa5]">
          오늘의 목표를 모두 완수해보세요
        </p>
        <p className="absolute top-[937.99px] left-[1340px] text-left text-xl font-medium text-white">
          <span className="text-left text-xl font-medium text-white">
            나의 다짐이나 목표를 더블클릭하여 작성할 수 있어요
          </span>
          <br />
          <span className="text-left text-xl font-medium text-white">
            세부 목표를 끝낸 후 체크박스를 누르면 게이지가 자동으로 올라가요
          </span>
        </p>

        {/* 화살표 아이콘 : 목표를 자유롭게 추갛보세요 -> 투두 리스트 */}
        <svg
          width={43}
          height={76}
          viewBox="0 0 43 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[798px] left-[1513px] h-[74.55px] w-[41.26px]"
          preserveAspectRatio="none"
        >
          <path
            d="M40.8905 74.5391C44.2239 59.5391 43.4153 27.9342 15.3905 33.5391C-14.6099 39.5391 8.89046 74.5391 26.3905 58.5391C43.4492 42.9425 26.3904 18.0391 15.3905 8.53906"
            stroke="#BEF1E4"
            stroke-linecap="round"
            stroke-dasharray="8 8"
          />
          <path
            d="M9.97027 3.5062L18.0629 5.35257L12.4176 11.4378L9.97027 3.5062Z"
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
        className="absolute top-[383px] left-[785px]"
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
        <circle cx={5} cy={5} r={5} fill="#27CFA5" />
        <circle cx={35} cy={5} r={5} fill="#D9D9D9" />
        <circle cx={65} cy={5} r={5} fill="#D9D9D9" />
      </svg>
    </div>
  );
};

export default Tutorial1;
