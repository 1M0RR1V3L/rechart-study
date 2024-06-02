'use client'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'

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
        <Area dataKey="product1" />
      </AreaChart>
    </ResponsiveContainer>
   
     );
};
export default AreaChartComponent;