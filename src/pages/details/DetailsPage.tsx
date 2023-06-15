import { useParams } from "react-router-dom";
import { useRestaurantContext } from "../../context/ContextRestaurant";

import "./DetailsPage.scss"

import { FavButton } from "../../shared/FavButton";
import { useContextFavorite } from "../../context/ContextFavorite";
import { FavDelModal } from "../../shared/FavDelModal";

export const DetailsPage = () => {
    const { restaurantsAll } =  useRestaurantContext();
    const { favoriteList, setId, addFavorite, switchModal } = useContextFavorite();

    const { id } = useParams();
    const restId = Number(id);

    const restaurant = restaurantsAll.find((rest) => rest.id == restId);

    const title = restaurant?.name;
    const adresse = restaurant?.address;
    const img = restaurant?.img;
    const imgAlt = "Photo of the restaurant";
    const description = restaurant?.description_long;

    return (
        <section id="details-section" className="box">
            <FavDelModal cardId={restId}/>
            <FavButton setId={setId} cardId={restId} isFav={favoriteList.includes(restId)} addFav={addFavorite} switchModal={switchModal}/>
            <h1>{title}</h1>
            <h2 id="adress">{adresse}</h2>
            <img className="border-only" src={img} alt={imgAlt} />
            <p>{description}</p>
            <hr />
            <section id="menu">
                <h2>Menu</h2>
                <div id="menu-content">
                    <div className="menu-details border-only">
                    <h3 className="border-only"> Entrée</h3>
                        <ul>
                            {restaurant?.menu.entrees.map((entree, id) => <li key={id}>{entree}</li>)}
                        </ul>
                    </div>
                    <div className="menu-details border-only">
                        <h3 className="border-only">Plat</h3>
                        <ul>
                            {restaurant?.menu.dishes.map((dishe, id) => <li key={id}>{dishe}</li>)}
                        </ul>
                    </div>
                    <div className="menu-details border-only">
                        <h3 className="border-only">Desert</h3>
                        <ul>
                            {restaurant?.menu.deserts.map((desert, id) => <li key={id}>{desert}</li>)}
                        </ul>
                    </div>
                </div>
            </section>
        </section>
    )
}
