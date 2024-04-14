import { ObjectId } from 'mongodb';

export interface GetStatistics {
  statistics: {
    /**Porvider name */
    provider: string;
    /**Display name of the provider*/
    locationDisplayName: string;
    /**location Url from the provider, Based on longitud and latitude, for example https://www.google.com/maps/@19.4697012,-99.1380162,13z */
    locationUrl: string;
    /**with units in kg */
    foodDonated: string;
  }[];
}
