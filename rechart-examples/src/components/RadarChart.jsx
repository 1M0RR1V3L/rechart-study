import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const dataSchool = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const RadarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataSchool}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        {payload.map((entry, index) => (
          <p
            key={`item-${index}`}
            className="text-sm"
            style={{ color: entry.color }}
          >
            {entry.name}:<span className="ml-2">{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default RadarChartComponent;
