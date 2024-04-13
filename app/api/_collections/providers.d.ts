import { ObjectId } from "bson"

export interface Providers {
    _id: ObjectId
    imageSrc: string
    name: string
    location: string
    locationUrl: string
}