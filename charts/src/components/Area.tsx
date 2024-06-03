import { productSales } from "@/config/data";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from "recharts";

export function AreaChartComponent() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={productSales}
        margin={{ right: 30 }}
      >
        <YAxis />
        <YAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="product1"
          stroke="#2363eb"
          fill="#3b82f6"
        />
        <Area
          type="monotone"
          dataKey="product2"
          stroke="#2363eb"
          fill="#8b5cf6"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
