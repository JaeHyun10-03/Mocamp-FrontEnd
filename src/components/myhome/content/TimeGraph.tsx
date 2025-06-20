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

const data = [
  { date: '4.20', minutes: 50 },
  { date: '4.21', minutes: 72 },
  { date: '4.22', minutes: 108 },
  { date: '4.23', minutes: 142 },
  { date: '4.24', minutes: 108 },
  { date: '4.25', minutes: 168 },
  { date: '4.26', minutes: 190 },
  { date: '4.27', minutes: 142 },
];

const TimeGraph = () => {
  return (
    <div className="w-[553px] h-[390px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 40, bottom: 20 }}>
          <defs>
            <linearGradient id="colorMinutes" x1="0" y1="0" x2="0" y2="1">
              <stop offset="60%" stopColor="#27CFA5" stopOpacity={1} />
              <stop offset="100%" stopColor="#BEF1E4" stopOpacity={0.9} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#555555', fontSize: 16, fontWeight: 400 }}
            tickMargin={11.5}
          />

          <YAxis
            domain={[0, 210]}
            ticks={[30, 60, 90, 120, 150, 180, 210]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#555555', fontSize: 16 }}
            tickFormatter={(value) => `${value}분`}
            tickMargin={18}
          />

          <CartesianGrid
            stroke="#e0e0e0"
            strokeDasharray="1 1"
            horizontal={true}
            vertical={false}
          />

          {/* 각 데이터 포인트에서 x축까지 세로선 그리기 */}
          {data.map((entry, index) => (
            <ReferenceLine
              key={index}
              x={entry.date}
              stroke="#e0e0e0"
              strokeDasharray="1 1"
              segment={[
                { x: entry.date, y: 0 },
                { x: entry.date, y: entry.minutes },
              ]}
            />
          ))}

          <Tooltip
            formatter={(value) => [`${value}분`, '시간']}
            labelStyle={{ color: '#666' }}
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />

          <Area
            type="linear"
            dataKey="minutes"
            stroke="#27CFA5"
            strokeWidth={2}
            fill="url(#colorMinutes)"
            dot={{ r: 4, fill: '#27CFA5', strokeWidth: 2, stroke: '#27CFA5' }}
            activeDot={{ r: 6, fill: '#27CFA5' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimeGraph;
