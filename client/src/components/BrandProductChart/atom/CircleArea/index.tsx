/* eslint-disable prefer-rest-params */
import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js";
import { circleAreaOptions } from "lib/utils";

const CircleArea = ({ data, shadow = false }: any) => {
  const chartContainer = useRef<HTMLCanvasElement>(null);
  const [, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const context: any = chartContainer.current.getContext("2d");
      const newChartInstance = new Chart(context, {
        type: "polarArea",
        options: circleAreaOptions,
        data,
      } as any);
      setChartInstance(newChartInstance as any);
    }
  }, [chartContainer, data, shadow]);

  return <canvas ref={chartContainer} />;
};

export default CircleArea;
