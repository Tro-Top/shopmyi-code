import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row } from "reactstrap";
import {
  PurchasesPerBrand,
  PurchasesPerBrandVariables,
} from "lib/graphql/queries/BrandbyId/__generated__/PurchasesPerBrand";
import { useAppContext } from "components/common/context";
import {
  BestSellers,
  BrandChart,
  BrandProductChart,
  Colxx,
  StatisticRow,
} from "components";
import { PURCHASES_PER_BRAND } from "lib/graphql/queries";

interface MatchParams {
  id: string;
}

export const Brand = () => {
  const { id } = useParams<MatchParams>();
  const { setBrandData, setIsloading, setNotLoading } = useAppContext();
  const { loading, data, error, refetch } = useQuery<
    PurchasesPerBrand,
    PurchasesPerBrandVariables
  >(PURCHASES_PER_BRAND, {
    variables: {
      offerId: parseInt(id),
    },
  });

  const brandResult = data ? data.purchasesPerBrand : null;
  const brandResultDeeper = data ? data.purchasesPerBrand.result : null;

  useEffect(() => {
    if (loading) {
      setIsloading();
    } else if (!loading && brandResultDeeper) {
      setNotLoading();
      setBrandData(brandResultDeeper[0]?.brand);
    }
  }, [data]);

  return (
    <>
      <Row>
        <StatisticRow isLoading={loading} brandData={brandResult} />
      </Row>
      <Row>
        <Colxx sm="12" md="6" className="mb-4">
          <BrandChart isLoading={loading} />
        </Colxx>
        <Colxx sm="12" md="6" className="mb-4">
          <BrandProductChart isLoading={loading} />
        </Colxx>
        <Colxx sm="12" md="8" className="mb-4 mt-4">
          <BestSellers brandData={brandResultDeeper} />
        </Colxx>
      </Row>
    </>
  );
};
