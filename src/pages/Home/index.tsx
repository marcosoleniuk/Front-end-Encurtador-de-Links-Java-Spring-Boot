import React, { useState } from "react";
import { FiLink } from "react-icons/fi";
import "./home.css";
import { Menu } from "../../components/Menu";
import { LinkItem } from "../../components/LinkItem";
import { saveLink } from "../../services/store-liks";
import { api } from "../../services/api";

interface LinkData {
  id: string;
  longUrl: string;
  link: string;
  shortUrl: string;
}

export const Home: React.FC = () => {
  const [link, setLink] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [data, setData] = useState<LinkData>({
    id: "",
    longUrl: "",
    link: "",
    shortUrl: "",
  });

  async function handleShortLink() {
    try {
      const response = await api.post<LinkData>("/shorten", { longUrl: link });
      setData(response.data);
      saveLink("linksEncurtados", response.data);
      setShowModal(true);
    } catch {
      alert("Ops! Parece que algo deu errado!");
    }

    setLink("");
  }

  return (
    <>
      <header>
        <Menu />
      </header>

      <section className="container-home">
        <div className="logo">
          <img src="./public/logo.png" alt="Sujeito Link Logo" />
          <h1>Encurtador MOleniuk</h1>
          <span>Cole seu link para encurtar</span>
        </div>

        <div className="area-input">
          <div>
            <FiLink size={24} color="#fff" />
            <input
              type="text"
              placeholder="Cole seu link aqui..."
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
              }}
            />
          </div>

          <button onClick={handleShortLink}>Encurtar link</button>
        </div>
      </section>

      {showModal && (
        <LinkItem content={data} closeModal={() => setShowModal(false)} />
      )}
    </>
  );
};
