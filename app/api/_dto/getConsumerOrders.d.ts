
export interface GetConsumerOrders {
    orders: {
        _id: string
        providerName: string
        quantityKg: string
        date: string
        location: string
        locationUrl: string
    }[]
    ordersToday: number
}