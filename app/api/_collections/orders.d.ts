import { ObjectId } from 'bson';

export interface Orders {
  _id: ObjectId;
  /**Joined with Consumers collection */
  consumer: ObjectId;
  /**Joined with Providers collection */
  provider: ObjectId;
  items: {
    /**Joined with Items collection */
    _id: ObjectId;
    /**Number of packages requested*/
    packages: number;
  }[];
}
