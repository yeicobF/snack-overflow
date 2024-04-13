
export interface GetOrdersId {
    _id: string
    date: string
    consumer: string
    provider: string
    quantity: string
    location:string
    locationUrl:string
    items: {
        imageSrc: string
        name: string
        quantity: string
    }[]
}