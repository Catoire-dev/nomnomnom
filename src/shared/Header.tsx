import { Link } from "react-router-dom";
import "./Header.scss"

export const Header = () => {
    const img = "/src/assets/img/hole-mice.png";
    const imgAltText = "Mouse hole";
    const buttonText = "Favorite";

    return (
        <header>
            <Link to="/">
                <h1 id="title">NomNomNom</h1>
            </Link>
            <section id="favorite-section">
                <Link to="/favorite" id="favorite-btn">
                    {buttonText}
                </Link>
                <img id="logo" src={img} alt={imgAltText} />
            </section>
        </header>
    )
}