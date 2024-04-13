import { ObjectId } from "bson"

export interface Orders {
    _id: ObjectId
    consumer: ObjectId
    provider: ObjectId
    items: {
        _id: ObjectId
        quantity: number
    }[]
}