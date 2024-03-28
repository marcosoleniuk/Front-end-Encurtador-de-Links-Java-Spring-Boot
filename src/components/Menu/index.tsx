import { BsFacebook, BsInstagram, BsLinkedin,  } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./menu.css";


export function Menu() {
  return (
    <div className="menu">
      <a
        className="social"
        target="_blank"
        rel="noreferrer"
        href="https://m.facebook.com/people/Marcos-Oleniuk/100009358853971/"
      >
        <BsFacebook size={24} color="#fff" />
      </a>

      <a
        className="social"
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/marcos.oleniuk"
      >
        <BsInstagram size={24} color="#fff" />
      </a>

      <a
        className="social"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/marcos-oleniuk-65a408a8/&ved=2ahUKEwiE6d_Q5IaFAxVYIrkGHQH1C1YQFnoECBcQAQ&usg=AOvVaw0SSIBt0u67z8ZggEjf8ExF"
      >
        <BsLinkedin size={24} color="#fff" />
      </a>

      <Link className="menu-button" to="/links">
        Meus Links
      </Link>
    </div>
  );
}