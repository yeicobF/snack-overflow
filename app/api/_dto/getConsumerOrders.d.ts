export interface GetConsumerOrders {
  /**Consumer Id*/
  _id: string;
  orders: {
    /**Order id for that consumer */
    _id: string;
    providerName: string;
    /**Display name of the provider */
    locationDisplayName: string;
    /**On only the first item in the order, based on the item recollection date and time range, DD/MMM to DD/MMM from HH:mm to HH:mm */
    recollectionDateRange: string;
    /**Based on longitud and latitude of the provider, for example https://www.google.com/maps/@19.4697012,-99.1380162,13z */
    locationUrl: string;
    /**always "in progress" */
    status: string;
  }[];
}
