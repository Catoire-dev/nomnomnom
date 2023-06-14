import { createContext, useContext, useState } from "react"

type FavoriteContextType = {
    favoriteList: number[];
    modalState: boolean;
    favIdToDel: number;
    addFavorite: (cardId:number) => any;
    delFavorite: (cardId:number) => any;
    setId: (id:number) => any;
    switchModal: () => any;
}

type ContextProps = {
    children: React.ReactNode;
}

const ContextFavorite = createContext({} as FavoriteContextType)

export const useContextFavorite = () => useContext(ContextFavorite);

export const ContextFavoriteProvider = ({children}: ContextProps) => {
    const initFav = localStorage.getItem("favorites")
    const test = initFav != null ? JSON.parse(initFav) : [] ;
    const [favoriteList, setFavoriteList] = useState(test as number[]);
    const [modalState, setModalState] = useState(false);
    const [favIdToDel, setFavIdToDel] = useState<number>(-1);

    const switchModal = () => {
        setModalState(!modalState);
    }

    const addFavorite = (cardId:number) => {
        if (!favoriteList)
            setFavoriteList([cardId]);
        else {
            const newList = [...favoriteList];
            newList.push(cardId);
            localStorage.setItem("favorites", JSON.stringify(newList));
            setFavoriteList(newList);
        }
    }

    const delFavorite = (cardId:number) => {
        const newList = favoriteList.filter((fav:number) => fav !== cardId);
        localStorage.setItem("favorites", JSON.stringify(newList));
        setFavoriteList(newList);
        switchModal();
    }

    const setId = (id: number) => {
        setFavIdToDel(id);
    }

    return (
        <ContextFavorite.Provider value={{favoriteList, addFavorite, delFavorite, switchModal, modalState, setId, favIdToDel}}>
            {children}
        </ContextFavorite.Provider>
        )
}