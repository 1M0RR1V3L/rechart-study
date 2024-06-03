import React from "react";
import AreaChartComponent from "../components/AreaChart";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import RadarChart from "../components/RadarChart";

export default function SimpleLineChart() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-44">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-[1400px]">
        <GridItem title="Area Chart">
          <AreaChartComponent />
        </GridItem>
        <GridItem title="Bar Chart">
          <BarChart />
        </GridItem>
        <GridItem title="Line Chart">
          <LineChart />
        </GridItem>
        <GridItem title="Radar Chart">
          <RadarChart />
        </GridItem>
        <GridItem title="Domain Radar Chart">
          <LineChart />
        </GridItem>
      </div>
    </main>
  );
}

function GridItem({ title, children }) {
  return (
    <div className="flex flex-col border-zinc-900 items-center justify-center p-4 border rounded-xl h-[400px] w-full">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
}
