import { Request } from "express";
import { IResolvers } from "graphql-tools";
import { Brand, Influencer, PurchasePerBrand } from "../../../lib/types";
import { ByOfferIdArgs, PurchasesPerBrandData } from "./types";
import { Database } from "firebase-admin/lib/database/database";

export const purchaseResolvers: IResolvers = {
  Query: {
    allPurchase: async (
      _root: Object,
      _args: {},
      { db, req }: { db: Database; req: Request }
    ): Promise<Brand[]> => {
      try {
        const ref = await db
          .ref("conversions")
          .child("purchase")
          .limitToFirst(100)
          .once("value")
          .then((snap) => snap.val())
          .then((val) => Object.keys(val).map((key) => val[key]));
        return ref;
      } catch (error) {
        throw new Error(`Failed to query from Firebase: ${error}`);
      }
    },
    purchasesPerBrand: async (
      _root: Object,
      { offerId }: ByOfferIdArgs,
      { db }: { db: Database }
    ): Promise<PurchasesPerBrandData | null> => {
      const data: PurchasesPerBrandData = {
        total: 0,
        sales: 0,
        totalInfs: 0,
        avgCommission: 0,
        avgInfCommission: 0,
        result: [],
      };
      try {
        let ref = await db
          .ref(`conversions`)
          .child("purchasesPerBrands")
          .orderByKey()
          .equalTo(offerId.toString())
          .once("child_added")
          .then((snap) => snap.val())
          .then((val) => {
            if (val) {
              return Object.keys(val).map((key) => val[key]);
            } else return [];
          });
        let sum = ref
          .map((item) => item.amount)
          .reduce((prev, curr) => prev + curr, 0)
          .toFixed(2);
        let avgCommission = ref
          .map((item) => item.commission)
          .reduce((prev, curr) => parseFloat(prev) + parseFloat(curr), 0)
          .toFixed(3);
        let avgInfCommission = ref
          .map((item) => item.commissionAffiliate)
          .reduce((prev, curr) => parseFloat(prev) + parseFloat(curr), 0)
          .toFixed(3);
        let totalInfluencers = ref
          .map((item) => item.influencer)
          .reduce((prev, curr) => {
            prev[curr] >= 1 || null || "" ? 1 : prev[curr]++;
            return prev;
          }, []);
        data.totalInfs = Object.keys(totalInfluencers).length;
        data.sales = sum;
        data.total = ref.length;
        data.avgCommission = avgCommission / ref.length;
        data.avgInfCommission = avgInfCommission / ref.length;
        data.result = ref;
        return data;
      } catch (error) {
        throw new Error(`Failed to query from Firebase: ${error}`);
      }
    },
  },
  PurchasePerBrand: {
    totalInfluencers: async (
      purchasePerBrand: PurchasePerBrand
    ): Promise<string> => {
      try {
        return purchasePerBrand.influencer.toString();
      } catch (error) {
        throw new Error(`Failed to query from Firebase: ${error}`);
      }
    },
    byInfluencer: async (
      purchasePerBrand: PurchasePerBrand,
      { offerId }: ByOfferIdArgs,
      { db }: { db: Database }
    ): Promise<Influencer | null> => {
      try {
        let ref =
          purchasePerBrand.influencer &&
          (await db
            .ref(`influencers`)
            .orderByKey()
            .equalTo(purchasePerBrand.influencer.toString())
            .once("child_added")
            .then((snap) => snap.val()));

        return ref;
      } catch (error) {
        throw new Error(`Failed to query from Firebase: ${error}`);
      }
    },
    brand: async (
      purchasePerBrand: PurchasePerBrand,
      { offerId }: ByOfferIdArgs,
      { db, req }: { db: Database; req: Request }
    ): Promise<Brand> => {
      try {
        let ref = await db
          .ref(`brands`)
          .orderByChild("offerId")
          .equalTo(purchasePerBrand.offerId)
          .once("child_added")
          .then((snapshot) => {
            return snapshot.val();
          });
        return ref;
      } catch (error) {
        throw new Error(`Failed to query from Firebase: ${error}`);
      }
    },
  },
};
