import "./ListRestaurant.scss"

import { IRestaurant } from "../interface/IRestaurant";
import { FavDelModal } from "./FavDelModal";
import { CardRestaurant } from "./CardRestaurant";
import { useContextFavorite } from "../context/ContextFavorite";

type ListRestaurantProps = {
    restaurantList: IRestaurant[];
}

export const ListRestaurant = ({restaurantList}: ListRestaurantProps) => {
    const {favIdToDel} = useContextFavorite();

    return (
        <section id="restaurant-list">
            <FavDelModal cardId={favIdToDel} />
            {
                !(restaurantList.length) ? (
                    <section id="error-box">
                        <img src="./src/assets/img/error-mouse-nothing-here.png" alt="Error" /> 
                    </section>
                )
                :

                restaurantList.map(restaurant => <CardRestaurant restaurantData={restaurant} key={restaurant.id} />)
            }
        </section>
    )
}