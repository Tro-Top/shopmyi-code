import { Request } from "express";
import { IResolvers } from "graphql-tools";
import { Brand, Influencer } from "../../../lib/types";
import { BrandArgs, BrandByOfferIdArgs } from "./types";
import { Database } from "firebase-admin/lib/database/database";
import { PurchasesData, PurchasesPerBrandData } from "../Purchase/types";

export const brandResolvers: IResolvers = {
  Query: {
    allBrands: async (
      _root: Object,
      _args: {},
      { db, req }: { db: Database; req: Request }
    ): Promise<Brand[]> => {
      try {
        // const brands: Brand[] = [];
        const ref = await db.ref("brands");
        return ref
          .once("value")
          .then((snap) => snap.val())
          .then((val) => Object.keys(val).map((key) => val[key]));
      } catch (error) {
        throw new Error(`Failed to query from Firebase: ${error}`);
      }
    },
    brandByOfferId: async (
      _root: Object,
      { offerId }: BrandByOfferIdArgs,
      { db, req }: { db: Database; req: Request }
    ): Promise<Brand> => {
      try {
        const ref = await db
          .ref(`brands`)
          .orderByChild("offerId")
          .equalTo(offerId)
          .once("child_added")
          .then((snapshot) => {
            return snapshot.val();
          });
        return ref;
      } catch (error) {
        throw new Error(`Failed to query from Firebase: ${error}`);
      }
    },
    brand: async (
      _root: Object,
      { id }: BrandArgs,
      { db, req }: { db: Database; req: Request }
    ): Promise<Brand> => {
      try {
        const ref = await db
          .ref(`brands/${id}`)
          .once("value")
          .then((snapshot) => {
            return snapshot.val();
          });
        return ref;
      } catch (error) {
        throw new Error(`Failed to query from Firebase: ${error}`);
      }
    },
  },
  Brand: {
    purchases: async (
      brandByOfferId: Brand,
      { offerId }: BrandByOfferIdArgs,
      { db }: { db: Database }
    ): Promise<PurchasesData | null> => {
      try {
        const data: PurchasesData = {
          total: 0,
          result: [],
        };
        const ref = await db
          .ref(`conversions`)
          .child("purchase")
          .limitToFirst(10)
          .orderByChild("offerId")
          .equalTo(brandByOfferId.offerId)
          .once("value")
          .then((snap) => snap.val())
          .then((val) => Object.keys(val).map((key) => val[key]));
        data.total = ref.length;
        data.result = ref;
        return data;
      } catch (error) {
        throw new Error(`Failed to query from Firebase: ${error}`);
      }
    },
    purchasesPerBrand: async (
      brandByOfferId: Brand,
      { offerId }: BrandByOfferIdArgs,
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
          .equalTo(brandByOfferId.offerId.toString())
          .once("child_added")
          .then((snap) => snap.val())
          .then((val) => Object.keys(val).map((key) => val[key]));
        let sum = ref
          .map((item) => item.amount)
          .reduce((prev, curr) => prev + curr, 0)
          .toFixed(2);
        let totalInfluencers = ref
          .map((item) => item.influencer)
          .reduce((prev, curr) => {
            prev[curr] >= 1 || null || "" ? 1 : prev[curr]++;
            return prev;
          }, []);

        data.totalInfs = Object.keys(totalInfluencers).length;
        data.sales = sum;
        data.total = ref.length;
        data.result = ref;
        return data;
      } catch (error) {
        throw new Error(`Failed to query from Firebase: ${error}`);
      }
    },
    influencer: async (
      brandByOfferId: Brand,
      { offerId }: BrandByOfferIdArgs,
      { db }: { db: Database }
    ): Promise<Influencer | null> => {
      try {
        const ref = await db
          .ref(`influencers`)
          .limitToFirst(100)
          .orderByKey()
          .once("child_added")
          .then((snap) => snap.val());
        // console.log(ref);

        return ref;
      } catch (error) {
        throw new Error(`Failed to query from Firebase: ${error}`);
      }
    },
  },
};
