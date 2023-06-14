import { Link } from "react-router-dom";

import "./CardRestaurant.scss"

import { IRestaurant } from "../interface/IRestaurant";
import { FavButton } from "./FavButton";
import { useContextFavorite } from "../context/ContextFavorite";

type CardRestaurantProps = {
    restaurantData: IRestaurant;
}

export const CardRestaurant = ({restaurantData}: CardRestaurantProps) => {
    const imgAlt = "Photo of restaurant";
    const linkDetails = `/details/${restaurantData.id}`;
    const {favoriteList, addFavorite, switchModal, setId} = useContextFavorite();


    return (
        <div id="restaurant-card" className="box">
            <FavButton setId={setId} cardId={restaurantData.id} isFav={favoriteList.includes(restaurantData.id)} addFav={addFavorite} switchModal={switchModal}/>
            <h2>{restaurantData.name}</h2>
            <p id="adresse">{restaurantData.address}</p>
            <Link to={linkDetails}>
                <img src={restaurantData.img} alt={imgAlt} />
            </Link>
            <p id="short-text">"{restaurantData.description_short}"</p>
        </div>
    )
}