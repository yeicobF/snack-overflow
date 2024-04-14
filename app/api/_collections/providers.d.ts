import { ObjectId } from 'bson';

export interface Providers {
  _id: ObjectId;
  name: string;
  locationDisplayName: string;
  latitude: number;
  longitud: number;
  foodDonated: number;
}
