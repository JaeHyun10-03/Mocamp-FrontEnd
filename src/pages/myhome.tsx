import { fetchMyhome } from '@/apis/myhome';
import CreateJoinHeader from '@/components/Header/CreateJoinHeader';
import MocampUsageTrend from '@/components/myhome/MocampUsageTrend';
import ParticipantedMocamp from '@/components/myhome/ParticipantedMocamp';
import SideBar from '@/components/myhome/SideBar';
import Total from '@/components/myhome/Total';
import { useCategoryStore } from '@/stores/category-store';
import { useMyhomeStore } from '@/stores/myhome-store';
import { useEffect } from 'react';

const MyHome = () => {
  const { category } = useCategoryStore();
  const {
    profileImage,
    username,
    goalList,
    roomList,
    timeList,
    totalDurationMinute,
    totalNumberOfGoals,
    setMyhome,
  } = useMyhomeStore();

  const categoryMap = {
    MYHOME_TOTAL: (
      <Total
        roomList={roomList}
        timeList={timeList}
        goalList={goalList}
        totalDurationMinute={totalDurationMinute}
        totalNumberOfGoals={totalNumberOfGoals}
      />
    ),
    PARTICIPANTED_MOCAMP: <ParticipantedMocamp roomList={roomList} />,
    MOCAMP_USAGE_TREND: (
      <MocampUsageTrend
        username={username}
        timeList={timeList}
        goalList={goalList}
        totalDurationMinute={totalDurationMinute}
        totalNumberOfGoals={totalNumberOfGoals}
      />
    ),
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMyhome();
        console.log(data);
        setMyhome({
          profileImage: data.imagePath,
          username: data.username,
          goalList: data.goalList,
          roomList: data.roomList,
          timeList: data.timeList,
          totalDurationMinute: data.totalDurationMinute,
          totalNumberOfGoals: data.totalNumberOfGoals,
        });
      } catch (err) {
        console.error('마이홈 데이터 가져오기 실패:', err);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="h-screen w-screen bg-[#e6e6e6]">
      <CreateJoinHeader />
      <div className="mt-[50px] flex justify-center gap-[10px] px-4 sm:px-6 md:px-8 lg:px-12">
        <SideBar profileImage={profileImage} username={username} />
        {categoryMap[category] ?? null}
      </div>
    </div>
  );
};

export default MyHome;
