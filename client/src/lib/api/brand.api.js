import axios from "axios";
import { PURCHASES_PER_BRAND_REDUX } from "lib/graphql/queries";

export class BrandApi {
  constructor({ apiUrl }) {
    console.log(apiUrl);
    this.apiUrl = apiUrl;
  }

  getById(id) {
    return axios.post(`${this.apiUrl}/api`, {
      query: PURCHASES_PER_BRAND_REDUX,
      variables: {
        offerId: parseInt(id),
      },
    });
  }
}
