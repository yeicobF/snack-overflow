import { ObjectId } from "bson"

export interface Items {
    _id: ObjectId
    imageSrc: string
    name: string
}