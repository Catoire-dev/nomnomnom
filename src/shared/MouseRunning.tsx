import { useState } from "react";
import "./MouseRunning.scss";

export const MouseRunning = () => {
    const [isRunning, setIsRunning] = useState(false);
    const imgMouseRunning = "/src/assets/img/running-mouse.webp";
    const imgMouseRunningAlt = "A running mouse"
    const imgMouse = "/src/assets/img/mouse.png";
    const imgMouseAlt = "A mouse"

    const ruuuuuuun = () => {
      setIsRunning(true);
    }

    const stop = () => {
      setIsRunning(false);
    }

    window.addEventListener("scroll", ruuuuuuun);
    window.addEventListener("scrollend", stop);

    return (
      <img className={isRunning ? "mouse running" : "mouse stop" } src={isRunning ? imgMouseRunning : imgMouse} alt={isRunning ? imgMouseRunningAlt : imgMouseAlt}/>
    )
}