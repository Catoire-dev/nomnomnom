import { ListRestaurant } from "../../shared/ListRestaurant"

import "./Home.scss"

import { useRestaurantContext } from "../../context/ContextRestaurant";

export const Home = () => {
    const { restaurantsAll } = useRestaurantContext();

    return (
        <main className="box">
            <ListRestaurant restaurantList={restaurantsAll}/>
        </main>
    )
}