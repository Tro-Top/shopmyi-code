import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Brand {
    offerId: Int!
    displayName: String
    pic: String
    purchases: Purchases
    purchasesPerBrand: PurchasesPerBrand
    influencer: Influencer
  }
  type PurchasePerBrand {
    offerId: Int!
    brandName: String
    influencer: ID
    amount: Float
    totalInfluencers: String
    byInfluencer: Influencer
    brand: Brand
    articleId: ID
  }
  type PurchasesPerBrand {
    total: Int
    sales: Float
    totalInfs: Int
    avgCommission: Float
    avgInfCommission: Float
    result: [PurchasePerBrand]!
  }
  type Purchases {
    total: Int
    result: [Purchase]!
  }
  type Influencer {
    banner: String
    email: String
    name: String
    influencerId: String
    createdAt: String
  }
  type Purchase {
    articleId: ID!
    amount: Float!
    commission: Float!
    influencer: Influencer
  }
  type Query {
    allBrands: [Brand]!
    influencerById(influencerId: ID!): Influencer!
    allPurchase: [Purchase]!
    brand(id: ID!): Brand!
    brandByOfferId(offerId: Int!): Brand!
    purchaseByBrand(offerId: Int!): [Purchase]!
    purchasesPerBrand(offerId: Int!): PurchasesPerBrand!
  }
`;
