import React from "react";
import { BagFill, CurrencyEuro } from "react-bootstrap-icons";
import { Card, CardBody, CardTitle, CardHeader, Spinner } from "reactstrap";

const StatisticCard = ({ title, value, icon, currency, isLoading }: any) => {
  return (
    <Card className="card" style={{ width: 200, height: 100 }}>
      {isLoading ? (
        <>
          <CardBody className="d-flex justify-content-center align-items-center">
            <Spinner color="red">.</Spinner>
          </CardBody>
        </>
      ) : (
        <>
          <CardBody className="d-flex flex-row justify-content-evenly align-items-center">
            <div className="mt-0 mr-3">{icon}</div>

            <div className="d-flex ml-10 flex-column align-items-start justify-content-center">
              <CardTitle className="text-small card-title mb-2">
                {title}
              </CardTitle>
              <div>
                {value} {currency}
              </div>
            </div>
          </CardBody>
        </>
      )}
    </Card>
  );
};
export default React.memo(StatisticCard);
