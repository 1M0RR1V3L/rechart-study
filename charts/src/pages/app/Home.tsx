import { AreaChartComponent } from "@/components/Area";
import BarChartComponent from "@/components/Bar";
import { GridItem } from "@/components/GridItem";
import LineChartComponent from "@/components/Line";
import { RadarChartComponent } from "@/components/Radar";
import { Helmet } from "react-helmet-async";

export function Home() {
  return (
    <>
      <Helmet title="página inicial" />

      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Graficos</h1>
        {/* grid to multiple charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GridItem title="Bar">
            <BarChartComponent />
          </GridItem>

          <GridItem title="Line">
            <LineChartComponent />
          </GridItem>

          <GridItem title="Area">
            <AreaChartComponent />
          </GridItem>

          <GridItem title="Radar">
            <RadarChartComponent />
          </GridItem>
        </div>
      </div>
    </>
  );
}
