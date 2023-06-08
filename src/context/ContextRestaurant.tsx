import { createContext, useContext } from "react";
import { IRestaurant } from "../interface/IRestaurant";


type RestaurantContextType = {
    restaurants: IRestaurant[];
}

export const ContextRestaurant = createContext({} as RestaurantContextType);

export const useRestaurantContext = () => useContext(ContextRestaurant);
