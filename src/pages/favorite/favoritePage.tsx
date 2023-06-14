import { useEffect, useState } from "react";

import { ListRestaurant } from "../../shared/ListRestaurant"
import { useContextFavorite } from "../../context/ContextFavorite"
import { useRestaurantContext } from "../../context/ContextRestaurant";

export const FavoritePage = () => {
    const { favoriteList } = useContextFavorite();
    const { restaurantsAll } = useRestaurantContext();

    const getFavCards = () => {
        return restaurantsAll.filter((rest) => favoriteList.includes(rest.id));
    }

    const [favCardList, setFavCardList] = useState(getFavCards());
    

    useEffect(() => {
        setFavCardList(getFavCards());
    }, [favoriteList])

    return (
        <main className="box">
            <ListRestaurant restaurantList={favCardList}/>
        </main>
    )
}