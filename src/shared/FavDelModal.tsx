import "./FavDelModal.scss";

import { useContextFavorite } from "../context/ContextFavorite";

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
                        <h1>Delete this restaurant from your favorite.<br />Are you sure?</h1>
                        <img src="./src/assets/img/cute-mouse.png" alt="" />
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