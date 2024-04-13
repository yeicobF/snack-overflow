
export interface GetProviderOrders {
    orders: {
        _id: string
        consumerName: string
        consumerImageSrc: string
        quantityKg: string
        date: string
    }[]
    ordersToday: number
}