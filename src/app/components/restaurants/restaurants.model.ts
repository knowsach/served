export class RestaurantModel {
    id: String
    name: String
    url: String
    location: Address
    switch_to_order_menu: number
    cuisines: String
    timings: String
    average_cost_for_two: number
    price_range: any
    currency: any
    highlights: String[]
    offers: any[]
    opentable_support: number
    is_zomato_book_res: number
    thumb: String
    user_rating: Rating
    all_reviews_count: 308
    photos_url: String
    photo_count: number
    photos: any[]
    menu_url: String
    featured_image: String
    has_online_delivery: 0
    is_delivering_now: 0
    is_table_reservation_supported: 0
    has_table_booking: 0
    // events_url: "https://www.zomato.com/london/dinner-by-heston-blumenthal-knightsbridge/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
    phone_numbers: String
    // all_reviews: { reviews: Array(5) }
    // establishment: ["Casual Dining"]
}

export class Address {
    address: String
    locality: String
    city: String
    city_id: any
    latitude: String
    longitude: String
    zipcode: String
    country_id: any
}

export class Rating {
    aggregate_rating: String
    rating_text: String
    rating_color: String
    votes: String

}