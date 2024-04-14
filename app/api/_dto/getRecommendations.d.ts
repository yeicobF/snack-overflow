import { ObjectId } from 'mongodb';

export interface GetRecommendations {
  providers: {
    _id: string;
    location: string;
    locationUrl: string;
    name: string;
    food: {
      _id: ObjectId;
      name: string;
      unit: string;
      /**same as db */
      packages: string;
      /**same as db */
      total: string;
      quantity: string;
      /**Based on the item recollection date and time range DD/MMM to DD/MMM from HH:mm to HH:mm */
      recollectionDateRange: string;
    }[];
  }[];
}
