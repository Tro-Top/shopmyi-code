/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BrandById
// ====================================================

export interface BrandById_purchasesPerBrand_result_byInfluencer {
  __typename: "Influencer";
  banner: string | null;
  email: string | null;
  name: string | null;
  createdAt: string | null;
}

export interface BrandById_purchasesPerBrand_result_brand_purchases {
  __typename: "Purchases";
  total: number | null;
}

export interface BrandById_purchasesPerBrand_result_brand {
  __typename: "Brand";
  purchases: BrandById_purchasesPerBrand_result_brand_purchases | null;
  displayName: string | null;
  pic: string | null;
  offerId: number;
}

export interface BrandById_purchasesPerBrand_result {
  __typename: "PurchasePerBrand";
  offerId: number;
  brandName: string | null;
  influencer: string | null;
  amount: number | null;
  byInfluencer: BrandById_purchasesPerBrand_result_byInfluencer | null;
  brand: BrandById_purchasesPerBrand_result_brand | null;
}

export interface BrandById_purchasesPerBrand {
  __typename: "PurchasesPerBrand";
  total: number | null;
  sales: number | null;
  result: (BrandById_purchasesPerBrand_result | null)[];
}

export interface BrandById {
  purchasesPerBrand: BrandById_purchasesPerBrand;
}

export interface BrandByIdVariables {
  offerId: number;
}
