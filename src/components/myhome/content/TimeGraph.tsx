import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { TimeItem, DailyGoal } from '@/types/myhome';

interface TimeGraphProps {
  timeList: TimeItem[];
  goalList: DailyGoal[];
  onDateClick: (date: string) => void;
  selectedDate: string | null;
}

const TimeGraph = ({ timeList, goalList, onDateClick, selectedDate }: TimeGraphProps) => {
  // 차트 데이터에 선택 상태 추가
  const chartData = timeList.map((item) => ({
    ...item,
    isSelected: selectedDate === item.date,
  }));

  // 커스텀 도트 컴포넌트
  const CustomDot = (props: any) => {
    const { cx, cy, payload } = props;
    const isSelected = payload.isSelected;

    return (
      <circle
        cx={cx}
        cy={cy}
        r={isSelected ? 6 : 4}
        fill={isSelected ? '#1ea87a' : '#27CFA5'}
        stroke={isSelected ? '#1ea87a' : '#27CFA5'}
        strokeWidth={2}
        style={{ cursor: 'pointer' }}
        onClick={() => onDateClick(payload.date)}
      />
    );
  };

  // 차트 클릭 핸들러
  const handleChartClick = (data: any) => {
    if (data && data.activeLabel) {
      onDateClick(data.activeLabel);
    }
  };

  return (
    <div className="h-[390px] w-[553px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
          onClick={handleChartClick}
        >
          {/* 그래디언트 정의 */}
          <defs>
            <linearGradient id="colorDuration" x1="0" y1="0" x2="0" y2="1">
              <stop offset="60%" stopColor="#27CFA5" stopOpacity={1} />
              <stop offset="100%" stopColor="#BEF1E4" stopOpacity={0.9} />
            </linearGradient>
          </defs>

          {/* x축 */}
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#555555', fontSize: 16, fontWeight: 400 }}
            tickMargin={11.5}
          />

          {/* y축 */}
          <YAxis
            domain={[0, 360]}
            ticks={[0, 120, 240, 360]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#555555', fontSize: 16 }}
            tickFormatter={(value) => `${value / 60}시간`}
            tickMargin={18}
          />

          {/* 배경 그리드 */}
          <CartesianGrid
            stroke="#e0e0e0"
            strokeDasharray="1 1"
            horizontal={true}
            vertical={false}
          />

          {/* 세로 참조선 */}
          {timeList.map((entry, index) => (
            <ReferenceLine
              key={index}
              x={entry.date}
              stroke="#e0e0e0"
              strokeDasharray="1 1"
              segment={[
                { x: entry.date, y: 0 },
                { x: entry.date, y: entry.duration },
              ]}
            />
          ))}

          {/* 툴팁 */}
          <Tooltip
            formatter={(value) => [`${value}분`, '시간']}
            labelStyle={{ color: '#666' }}
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />

          {/* 영역 그래프 */}
          <Area
            type="linear"
            dataKey="duration"
            stroke="#27CFA5"
            strokeWidth={2}
            fill="url(#colorDuration)"
            dot={<CustomDot />}
            activeDot={{ r: 6, fill: '#27CFA5' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimeGraph;
