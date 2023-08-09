import "./FavButton.scss"

type FavButtonProps = {
    cardId: number;
    isFav: boolean;
    switchModal: () => any;
    addFav: (cardId:number) => any;
    setId: (id:number) => any;
}

// Tout ce qui vient du context tu aurais pu le récupérer directement ici
export const FavButton = ({cardId, isFav, switchModal, addFav, setId}: FavButtonProps) => {
    const imgFav = "/src/assets/img/cheese.png";
    const imgFavAlt="Image of a cheese in black and white";
    
    // T'as pas besoin de setId si le restau n'est pas dans les favs
    // Je pense que ça peut être buggy à la longue
    const clickFavBtn = (cardId:number) => {
        setId(cardId);
        isFav ? switchModal() : addFav(cardId);
    }
    
    return (
        <button onClick={() => clickFavBtn(cardId)} id="btn-favorite"><img id="fav-btn-img" className={isFav ? "fav-btn-img-inactive" : "fav-btn-img-active"} src={imgFav} alt={imgFavAlt} /></button>
    )
}