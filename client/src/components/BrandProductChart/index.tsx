import React from "react";
import { Card, CardBody, CardTitle, Spinner } from "reactstrap";

import { circleAreaData } from "lib/utils";
import CircleArea from "./atom/CircleArea";

export const BrandProductChart = ({
  isLoading,
  chartClass = "chart-container",
}: any) => {
  return (
    <Card className={`dashboard-filled-line-chart`}>
      {isLoading ? (
        <CardBody className="d-flex justify-content-center align-items-center">
          <Spinner>.</Spinner>
        </CardBody>
      ) : (
        <>
          <CardBody>
            <CardTitle>Top 10 products sold</CardTitle>
            <div className={chartClass}>
              <CircleArea shadow data={circleAreaData} />
            </div>
          </CardBody>
        </>
      )}
    </Card>
  );
};
