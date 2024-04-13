
export interface PostConsumerOrders {
    providers: {
        _id: string
        items: {            
            _id: string
            quantity: string
        }[]
    }[]
}