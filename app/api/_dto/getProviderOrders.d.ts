export interface GetProviderOrders {
  /**provider id */
  _id: string;
  orders: {
    /**order Id */
    _id: string;
    consumerName: string;
    /**date of creation based on the orderId (ObjectId) */
    date: string;
  }[];
}
