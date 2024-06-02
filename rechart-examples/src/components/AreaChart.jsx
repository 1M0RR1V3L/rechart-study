'use client'
import { AreaChart, Area, ResponsiveContainer, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const productSales = [
    {
    name: 'Jan',
    product1: 2000,
    product2: 2545,
    },

    {
    name: 'Feb',
    product1: 4564,
    product2: 5863,
    },

    {
    name: 'Mar',
    product1: 2536,
    product2: 1252,
    },

    {
    name: 'Apr',
    product1: 2534,
    product2: 4246,
    },

    {
    name: 'May',
    product1: 2364,
    product2: 4343,
    },

    {
    name: 'June',
    product1: 4343,
    product2: 2443,
    },
   ]
const AreaChartComponent = () => {
    return ( 
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart width={500} height={400} data={productSales}>   
        <YAxis />
        <YAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />
        <Tooltip content={<CustomTooltip />}/>
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
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
          <p className="text-medium text-lg">{label}</p>
          <p className="text-sm text-blue-400">
            Product 1:
            <span className="ml-2">${payload[1].value}</span>
          </p>
        </div>
      );
    }
};
export default AreaChartComponent;