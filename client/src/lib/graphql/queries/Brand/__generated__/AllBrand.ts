/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllBrand
// ====================================================

export interface AllBrand_allBrands {
  __typename: "Brand";
  offerId: number;
  displayName: string | null;
  pic: string | null;
}

export interface AllBrand {
  allBrands: (AllBrand_allBrands | null)[];
}
