import BasicHeader from '@/components/Header/BasicHeader';
import MocampUsageTrend from '@/components/myhome/MocampUsageTrend';
import ParticipantedMocamp from '@/components/myhome/ParticipantedMocamp';
import SideBar from '@/components/myhome/SideBar';
import Total from '@/components/myhome/Total';
import { useCategoryStore } from '@/stores/category-store';

const myhome = () => {
  const { category } = useCategoryStore();

  const categoryMap = {
    MYHOME_TOTAL: <Total />,
    PARTICIPANTED_MOCAMP: <ParticipantedMocamp />,
    MOCAMP_USAGE_TREND: <MocampUsageTrend />,
  };

  return (
    <div className="min-h-[1080px] min-w-[1920px] bg-[#e6e6e6]">
      <BasicHeader />
      <div className="mt-[50px] flex justify-center gap-[10px]">
        <SideBar />
        {categoryMap[category] ?? null}
      </div>
    </div>
  );
};

export default myhome;
