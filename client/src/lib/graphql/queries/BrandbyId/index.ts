import { gql } from "apollo-boost";

export const PURCHASES_PER_BRAND = gql`
  query PurchasesPerBrand($offerId: Int!) {
    purchasesPerBrand(offerId: $offerId) {
      total
      sales
      totalInfs
      avgCommission
      avgInfCommission
      result {
        offerId
        brandName
        influencer
        amount
        byInfluencer {
          banner
          email
          name
          createdAt
        }
        brand {
          displayName
          pic
          offerId
        }
      }
    }
  }
`;
