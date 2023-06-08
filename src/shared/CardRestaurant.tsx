import { Link } from "react-router-dom";
import { IRestaurant } from "../interface/IRestaurant";
import "./CardRestaurant.scss"

type CardRestaurantProps = {
    restaurantData: IRestaurant;
}

export const CardRestaurant = ({restaurantData}: CardRestaurantProps) => {
    const imgFav = "./src/assets/img/cheese.png";
    const imgFavAlt="Image of a cheese in black and white";
    const imgAlt = "Photo of restaurant";
    const linkDetails = `/details/${restaurantData.id}`;

    return (
        <div id="restaurant-card" className="box">
            <button id="btn-favorite"><img src={imgFav} alt={imgFavAlt} /></button>
            <h2>{restaurantData.name}</h2>
            <p id="adresse">{restaurantData.address}</p>
            <Link to={linkDetails}>
                <img src={restaurantData.img} alt={imgAlt} />
            </Link>
            <p id="short-text">"{restaurantData.description_short}"</p>
        </div>
    )
}