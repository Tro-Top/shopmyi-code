import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  useTable,
  usePagination,
  useSortBy,
  UsePaginationInstanceProps,
} from "react-table";
import { Card, CardBody, CardTitle, Spinner } from "reactstrap"; //
import { BrandById_purchasesPerBrand_result_byInfluencer } from "lib/graphql/queries/BrandbyId/__generated__/BrandById";
import { PurchasesPerBrand_purchasesPerBrand_result } from "lib/graphql/queries/BrandbyId/__generated__/PurchasesPerBrand";

const Table = ({ columns, data }: any) => {
  return (
    <>
      <table className="r-table table">
        <thead>
          <tr>
            <th>Influencer</th>
            <th>Sales</th>
            <th>Sales Number</th>
          </tr>
        </thead>
        <tbody>
          <td>
            {data[2].map(
              (
                row: BrandById_purchasesPerBrand_result_byInfluencer,
                rowIndex: any
              ) => {
                return (
                  <tr>
                    <NavLink to={`/influencer/${row.influencerId}`}>
                      <td>
                        <img
                          src={row.banner?.toString()}
                          alt={"ticket.title"}
                          className="img-thumbnail border-0 mr-3 rounded-circle list-thumbnail align-self-center xsmall"
                        />
                        {row.name}
                      </td>
                    </NavLink>
                  </tr>
                );
              }
            )}
          </td>
          <td>
            {data[1].map((row: any, rowIndex: any) => {
              return (
                <tr>
                  <td>
                    {row
                      .reduce((prev: any, curr: any) => prev + curr)
                      .toFixed(2)}
                    {" €"}
                  </td>
                </tr>
              );
            })}
          </td>
          <td>
            {data[1].map((row: any, rowIndex: any) => {
              return (
                <tr>
                  <td key={`td_${rowIndex}`}>{row.length}</td>
                </tr>
              );
            })}
          </td>
        </tbody>
      </table>
    </>
  );
};

interface IBrandData {
  brandData: (PurchasesPerBrand_purchasesPerBrand_result | null)[] | null;
  isLoading?: boolean;
}
export const BestSellers = ({ brandData, isLoading }: IBrandData) => {
  let topInfluencers: any = [];
  const infsId =
    !isLoading &&
    brandData &&
    brandData
      .map((val) => val?.influencer)
      .reduce((prev: any, curr: any) => {
        prev[curr] >= 1 || null || "" ? 1 : prev[curr]++;
        return prev;
      }, []);
  let topInfsId = brandData
    ? Object.keys(infsId)
        .map((val) => val)
        .slice(0, 5)
    : infsId;
  let topInfsData =
    !isLoading &&
    brandData &&
    topInfsId.map(
      (inf: string | null | undefined) =>
        brandData.map((val) => val).find((val) => val?.influencer === inf)
          ?.byInfluencer
    );

  let infsSales =
    !isLoading &&
    brandData &&
    Object.values(topInfsId)
      .map((v) =>
        brandData
          ?.filter((val) => val?.influencer === v)
          .map((val) => val?.amount)
      )
      .sort((a, b) => a.length - b.length)
      .reverse()
      .slice(0, 5);
  console.log(topInfsData);
  topInfluencers.push(topInfsId, infsSales, topInfsData);

  return (
    <Card className="h-100">
      {isLoading ? (
        <>
          <CardBody className="d-flex justify-content-center align-items-center">
            <Spinner color="red">.</Spinner>
          </CardBody>
        </>
      ) : (
        brandData && (
          <CardBody>
            <CardTitle>Top Influencers</CardTitle>
            <Table data={brandData && topInfluencers} />
          </CardBody>
        )
      )}
    </Card>
  );
};
