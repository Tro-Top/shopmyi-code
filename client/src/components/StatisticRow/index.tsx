import React, { useState } from "react";
import {
  BagFill,
  CashCoin,
  Coin,
  PersonBoundingBox,
  WalletFill,
} from "react-bootstrap-icons";
import { PurchasesPerBrand_purchasesPerBrand } from "lib/graphql/queries/BrandbyId/__generated__/PurchasesPerBrand";

import { Colxx } from "../Custom";
import StatisticCard from "../StatisticCard";

interface IBrandData {
  brandData: PurchasesPerBrand_purchasesPerBrand | null;
  isLoading?: boolean;
}
export const StatisticRow = ({ brandData, isLoading }: IBrandData) => {
  const sales = brandData ? brandData.sales : 0;
  const totalSales = brandData ? brandData.total : 0;
  const infs = brandData ? brandData.totalInfs : 0;
  const commission =
    brandData && brandData.avgCommission && sales
      ? (sales / 100) * brandData.avgCommission
      : 0;
  const infCommission =
    brandData && brandData.avgInfCommission && sales
      ? (sales / 100) * brandData.avgInfCommission
      : 0;

  const data = [
    {
      key: 1,
      title: "Sales",
      value: sales,
      icon: <WalletFill size={38} color="#922c88" />,
      currency: "€",
    },
    {
      key: 2,
      title: "Sales Number",
      value: totalSales,
      icon: <BagFill size={38} />,
      currency: "",
    },
    {
      key: 3,
      title: "Influencers",
      value: infs,
      icon: <PersonBoundingBox size={38} />,
      currency: "",
    },
    {
      key: 4,
      title: "Commission",
      value: parseFloat(commission.toString()).toFixed(2),
      icon: <Coin size={38} />,
      currency: "€",
    },
    {
      key: 5,
      title: "Influencers Commission",
      value: parseFloat(infCommission.toString()).toFixed(2),
      icon: <CashCoin size={38} />,
      currency: "€",
    },
  ];
  return (
    <>
      {data.map((x) => {
        return (
          <Colxx xl="2" lg="3" className="mb-3 mr-4" key={x.key}>
            <StatisticCard
              title={x.title}
              value={x.value}
              icon={x.icon}
              isLoading={isLoading}
              currency={x.currency}
            />
          </Colxx>
        );
      })}
    </>
  );
};
