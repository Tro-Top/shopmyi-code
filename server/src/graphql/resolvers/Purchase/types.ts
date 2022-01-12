import { Purchase, PurchasePerBrand } from "../../../lib/types";

export interface ByOfferIdArgs {
  offerId: number;
}
export interface PurchasesData {
  total: number;
  result: Purchase[];
}
export interface PurchasesPerBrandData {
  total: number;
  sales: number;
  totalInfs: number;
  avgCommission: number;
  avgInfCommission: number;
  result: PurchasePerBrand[];
}
