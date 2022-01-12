/* eslint-disable prefer-rest-params */
import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js";
import { areaChartOptions } from "lib/utils";

const Area = ({ data, shadow = false }: any) => {
  const chartContainer = useRef<HTMLCanvasElement>(null);
  const [, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      if (shadow) {
        Chart.defaults.lineWithShadow = Chart.defaults.line;
        Chart.controllers.lineWithShadow = Chart.controllers.line.extend({
          draw(ease: any) {
            Chart.controllers.line.prototype.draw.call(this, ease);
            const {
              chart: { ctx },
            } = this;
            ctx.save();
            ctx.shadowColor = "rgba(0,0,0,0.15)";
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 10;
            ctx.responsive = true;
            ctx.stroke();
            Chart.controllers.line.prototype.draw.apply(this, arguments);
            ctx.restore();
          },
        });
      }
      const context: any = chartContainer.current.getContext("2d");
      const newChartInstance = new Chart(context, {
        type: "line",
        options: areaChartOptions,
        data,
      } as any);
      setChartInstance(newChartInstance as any);
    }
  }, [chartContainer, data, shadow]);

  return <canvas ref={chartContainer} />;
};

export default Area;
