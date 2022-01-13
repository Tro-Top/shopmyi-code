/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PurchasesPerBrand
// ====================================================

export interface PurchasesPerBrand_purchasesPerBrand_result_byInfluencer {
  __typename: "Influencer";
  banner: string | null;
  email: string | null;
  name: string | null;
  createdAt: string | null;
  influencerId: string | null;
}

export interface PurchasesPerBrand_purchasesPerBrand_result_brand {
  __typename: "Brand";
  displayName: string | null;
  pic: string | null;
  offerId: number;
}

export interface PurchasesPerBrand_purchasesPerBrand_result {
  __typename: "PurchasePerBrand";
  offerId: number;
  brandName: string | null;
  influencer: string | null;
  amount: number | null;
  byInfluencer: PurchasesPerBrand_purchasesPerBrand_result_byInfluencer | null;
  brand: PurchasesPerBrand_purchasesPerBrand_result_brand | null;
}

export interface PurchasesPerBrand_purchasesPerBrand {
  __typename: "PurchasesPerBrand";
  total: number | null;
  sales: number | null;
  totalInfs: number | null;
  avgCommission: number | null;
  avgInfCommission: number | null;
  result: (PurchasesPerBrand_purchasesPerBrand_result | null)[];
}

export interface PurchasesPerBrand {
  purchasesPerBrand: PurchasesPerBrand_purchasesPerBrand;
}

export interface PurchasesPerBrandVariables {
  offerId: number;
}
