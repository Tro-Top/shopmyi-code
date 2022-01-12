export interface Brand {
  offerId: number;
  displayName: string;
  pic: string;
  purchases: Object[];
}
export interface Purchase {
  articleId: number;
  amount: number;
  commission: number;
  influencer: Object;
}
export interface PurchasePerBrand {
  offerId: number;
  brandName: string;
  amount: number;
  totalInfluencers: string;
  influencer: Object;
  byInfluencer: Object;
  articleId: Object;
}
export interface Influencer {
  banner: string;
  email: string;
  name: string;
  influencerId: string;
  createdAt: string;
}
export interface Article {
  offerId: number;
  id: number;
  uid: string;
  userId: string;
  username: string;
  body?: string;
}
