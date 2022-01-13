import { BrandApi } from "./brand.api";
import { apiUrl } from "lib/utils";

const brandApi = new BrandApi({ apiUrl });

export { brandApi };
