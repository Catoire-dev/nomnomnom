import { useRestaurantContext } from "../context/ContextRestaurant"
import { CardRestaurant } from "./CardRestaurant";
import { restaurants } from "./data";

import "./ListRestaurant.scss"

export const ListRestaurant = (/*{nomNomList}: NomNomListProps*/) => {
    useRestaurantContext();

    return (
        <section id="restaurant-list" className="box">
            {
                restaurants.map(restaurant => <CardRestaurant restaurantData={restaurant} key={restaurant.id} />)
            }
        </section>
    )
}