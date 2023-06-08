import { useParams } from "react-router-dom";
import "./DetailsPage.scss"
import { useRestaurantContext } from "../../context/ContextRestaurant";

export const DetailsPage = () => {
    const {restaurantsAll} =  useRestaurantContext();

    const {id} = useParams();
    const restId = Number(id);

    const restaurant = restaurantsAll.find((rest) => rest.id == restId);

    const title = restaurant?.name;
    const adresse = restaurant?.address;
    const img = restaurant?.img;
    const imgAlt = "Photo of the restaurant";
    const description = restaurant?.description_long;

    return (
        <section id="details-section" className="box">
            <h1>{title}</h1>
            <h2 id="adress">{adresse}</h2>
            <img src={img} alt={imgAlt} />
            <p>{description}</p>
            <section id="menu">
                <h2>Menu</h2>
                <h3>Entrée</h3>
                <ul>
                    {restaurant?.menu.entrees.map((entree, id) => <li key={id}>{entree}</li>)}
                </ul>
                <h3>Plat</h3>
                <ul>
                    {restaurant?.menu.dishes.map((dishe, id) => <li key={id}>{dishe}</li>)}
                </ul>
                <h3>Desert</h3>
                <ul>
                    {restaurant?.menu.deserts.map((desert, id) => <li key={id}>{desert}</li>)}
                </ul>
            </section>
        </section>
    )
}
