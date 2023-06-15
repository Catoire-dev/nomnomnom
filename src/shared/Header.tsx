import { Link } from "react-router-dom";

import "./Header.scss"

export const Header = () => {
    const logo1Img = "./src/assets/img/face-mice.png";
    const logo1AltText = "a cute face mice";
    const logo2Img = "/src/assets/img/hole-mice.png";
    const logo2AltText = "Mouse hole";
    const buttonText = "Favorite";

    return (
        <header className="border-bg">
            <div id="logo-section">
                <img id="logo-1" src={logo1Img} alt={logo1AltText} />
                <Link to="/">
                    <h1 id="title">NomNomNom</h1>
                </Link>
            </div>
            <section id="favorite-section">
                <Link to="/favorite" id="favorite-btn">
                    {buttonText}
                </Link>
                <img id="logo-2" src={logo2Img} alt={logo2AltText} />
            </section>
        </header>
    )
}