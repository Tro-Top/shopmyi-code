import merge from "lodash.merge";
import { brandResolvers } from "./Brand";
import { purchaseResolvers } from "./Purchase";
import { influencerResolvers } from "./Influencer";

export const resolvers = merge(
  brandResolvers,
  purchaseResolvers,
  influencerResolvers
);
