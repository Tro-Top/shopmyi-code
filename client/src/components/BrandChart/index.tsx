import React from "react";
import {
  Card,
  CardBody,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Spinner,
} from "reactstrap";
import { areaChartData } from "lib/utils";
import Area from "./atom/Area";

export const BrandChart = ({
  className = "",
  isLoading = false,
  controls = true,
}: any) => {
  return (
    <Card className={`${className} dashboard-filled-line-chart`}>
      {isLoading ? (
        <CardBody className="d-flex justify-content-center align-items-center">
          <Spinner>.</Spinner>
        </CardBody>
      ) : (
        <>
          <CardBody>
            <div className="float-left float-none-xs">
              <div className="d-inline-block">
                <h5 className="d-inline">Sales Statistic</h5>
              </div>
            </div>
            {controls && (
              <div className="btn-group float-right float-none-xs mt-0">
                <UncontrolledDropdown>
                  <DropdownToggle
                    caret
                    color="primary"
                    className="btn-xs d-flex align-items-center"
                    outline
                  >
                    <span>Show This Month</span>
                  </DropdownToggle>
                  <DropdownMenu end>
                    <DropdownItem>
                      <span>Show Previous Month</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            )}
          </CardBody>

          <div className="chart card-body pt-0">
            <Area shadow data={areaChartData} />
          </div>
        </>
      )}
    </Card>
  );
};
