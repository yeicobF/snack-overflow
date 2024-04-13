
export interface GetRecommendations {
    providers: {
        _id: string
        location: string
        locationUrl: string
        name: string
        items: {
            _id: string
            imageSrc: string
            name: string
            quantity: string
        }[]
    }[]
}