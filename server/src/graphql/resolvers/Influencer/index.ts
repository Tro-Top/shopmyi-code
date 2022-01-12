import { Request } from "express";
import { IResolvers } from "graphql-tools";
import { Influencer } from "../../../lib/types";
import { InfluencerIdArgs } from "./types";
import { Database } from "firebase-admin/lib/database/database";

export const influencerResolvers: IResolvers = {
  Query: {
    influencerById: async (
      _root: Object,
      { influencerId }: InfluencerIdArgs,
      { db, req }: { db: Database; req: Request }
    ): Promise<Influencer | null> => {
      try {
        const ref = await db
          .ref(`influencers`)
          .orderByKey()
          .equalTo(influencerId)
          .once("child_added")
          .then((snap) => snap.val());
        console.log(ref);

        return ref;
      } catch (error) {
        throw new Error(`Failed to query from Firebase: ${error}`);
      }
    },
  },
  Influencer: {
    createdAt: (influencer: Influencer): any => {
      return new Date(Number(influencer.createdAt)).toLocaleDateString();
    },
  },
};
