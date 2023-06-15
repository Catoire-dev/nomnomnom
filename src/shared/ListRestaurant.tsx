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

    console.log(restaurantList);


    return (
        <section id="restaurant-list">
            <FavDelModal cardId={favIdToDel} />
            {
                !(restaurantList.length) ? (
                    <section id="error-box">
                        <img src="./src/assets/img/error-mice-nothing-here.png" alt="Error" /> 
                    </section>
                )
                :

                restaurantList.map(restaurant => <CardRestaurant restaurantData={restaurant} key={restaurant.id} />)
            }
        </section>
    )
}
///Users/bouh-dev/code/Learn/konexio/projet/nomnomnom/Nomnomnom/src/assets/img/error-mice.png