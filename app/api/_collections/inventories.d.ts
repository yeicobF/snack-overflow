import { ObjectId } from "bson"
export interface Inventories {
    /* Matches provider _id */
    _id: ObjectId
    items: {
        _id: ObjectId,
        quantity: number,
    }[]
}