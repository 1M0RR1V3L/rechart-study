'use client'

import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from 'recharts'

const salesData = [
    {
    name: 'Jan',
    revenue: 2000,
    profit: 2545,
    },

    {
    name: 'Feb',
    revenue: 4000,
    profit: 5863,
    },

    {
    name: 'Mar',
    revenue: 2536,
    profit: 1252,
    },

    {
    name: 'Apr',
    revenue: 2534,
    profit: 4246,
    },

    {
    name: 'May',
    revenue: 2364,
    profit: 4343,
    },

    {
    name: 'June',
    revenue: 4343,
    profit: 2443,
    },
   ]
const LineChartComponent = () => {
    return ( 
        <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          width={500}
          height={300}
          data={salesData}
          margin={{ 
          right: 30,
          }}
        >   
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />}/>
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue" 
            fill="#3b82f6"
          />
          <Line 
            type="monotone"
            dataKey="profit" 
            fill="#8b5cf6"
          />
        </LineChart>
      </ResponsiveContainer>
     
     );
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
          <p className="text-medium text-lg">{label}</p>
          <p className="text-sm text-blue-400">
            Revenue:
            <span className="ml-2">${payload[0].value}</span>
          </p>
          <p className="text-sm text-indigo-400">
            Profit:
            <span className="ml-2">${payload[1].value}</span>
          </p>
        </div>
      );
    }
};
export default LineChartComponent;