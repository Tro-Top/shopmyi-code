import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row } from "reactstrap";
import {
  PurchasesPerBrand,
  PurchasesPerBrandVariables,
} from "lib/graphql/queries/BrandbyId/__generated__/PurchasesPerBrand";
import { useDispatch } from "react-redux";

import {
  BestSellers,
  BrandChart,
  BrandProductChart,
  Colxx,
  StatisticRow,
} from "components";
import { PURCHASES_PER_BRAND } from "lib/graphql/queries";
import useBrand from "lib/hooks/useBrand";

interface MatchParams {
  id: string;
}

export const Brand = () => {
  const { id } = useParams<MatchParams>();
  const {
    data: brandResult,
    isFetching: isLoading,
    error: brandError,
  } = useBrand(id);

  const brandResultDeeper = brandResult ? brandResult.result : null;

  return (
    <>
      <Row>
        <StatisticRow isLoading={isLoading} brandData={brandResult} />
      </Row>
      <Row>
        <Colxx sm="12" md="6" className="mb-4">
          <BrandChart isLoading={isLoading} />
        </Colxx>
        <Colxx sm="12" md="6" className="mb-4">
          <BrandProductChart isLoading={isLoading} />
        </Colxx>
        <Colxx sm="12" md="8" className="mb-4 mt-4">
          <BestSellers brandData={brandResultDeeper} />
        </Colxx>
      </Row>
    </>
  );
};
