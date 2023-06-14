import { useContextFavorite } from "../context/ContextFavorite";
import "./FavDelModal.scss";

type FavDevModalProps = {
    cardId:number;
}

export const FavDelModal = ({cardId}: FavDevModalProps) => {
    const {delFavorite, modalState, switchModal} = useContextFavorite();

    return (
        <>
            {modalState && (
                <div id="fav-del-modal" onClick={()=>switchModal()} >
                    <div id="fav-del-modal-content" className="box">
                        <h1>Are you sure?</h1>
                        <div id="modal-btn">
                            <button className="btn" onClick={() => delFavorite(cardId)}>Yes</button>
                            <button className="btn" onClick={() => switchModal()}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}