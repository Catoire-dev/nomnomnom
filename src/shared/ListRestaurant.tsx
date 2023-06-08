import { useRestaurantContext } from "../context/ContextRestaurant"
import { CardRestaurant } from "./CardRestaurant";

import "./ListRestaurant.scss"

export const ListRestaurant = () => {
    const {restaurantsAll} = useRestaurantContext();

    return (
        <section id="restaurant-list">
            {
                restaurantsAll.map(restaurant => <CardRestaurant restaurantData={restaurant} key={restaurant.id} />)
            }
        </section>
    )
}