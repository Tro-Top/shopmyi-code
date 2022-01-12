import { gql } from "apollo-boost";

export const BRAND = gql`
  query AllBrand {
    allBrands {
      offerId
      displayName
      pic
    }
  }
`;
