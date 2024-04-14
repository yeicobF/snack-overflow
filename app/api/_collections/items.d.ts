import { ObjectId } from 'bson';

export interface Items {
  _id: ObjectId;
  /**Id of the provider that owns this food item */
  providerId: ObjectId;
  /**Name of the item */
  name: string;
  /**Quantity of food grouped into 1 packages */
  quantity: number;
  /**Unit of measurement, eg. kg, piece, etc */
  unit: string;
  /**Number of groups */
  packages: number;
  /**Initial day of recollection DD/MM */
  initialRecollectionDay: strings;
  /**Final day of recollection DD/MM due to food expiring date*/
  finalRecollectionDay: strings;
  /**Initial time of recollection HH:mm due to the restaurant delivery hours */
  initialRecollectionTime: strings;
  /**Final time of recollection HH:mm due to the restaurant delivery hours*/
  finalRecollectionTime: strings;
}
