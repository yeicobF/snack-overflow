export interface GetOrdersId {
  /**_id of the order */
  _id: string;
  /**Date created based on mongodb _id*/
  date: string;
  /**Consumer name */
  consumer: string;
  /**Porvider name */
  provider: string;
  /**Display name of the provider*/
  locationDisplayName: string;
  /**location Url from the provider, Based on longitud and latitude, for example https://www.google.com/maps/@19.4697012,-99.1380162,13z */
  locationUrl: string;
  food: {
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
}
