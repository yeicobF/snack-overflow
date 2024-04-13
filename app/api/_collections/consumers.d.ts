import { ObjectId } from "bson"

export interface Consumers {
    _id: ObjectId
    imageSrc: string
    name: string
    location: string
    locationUrl: string
}