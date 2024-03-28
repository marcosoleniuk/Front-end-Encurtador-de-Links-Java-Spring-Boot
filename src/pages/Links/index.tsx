import React, { useState, useEffect } from "react";
import "./links.css";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getLinksSaved, deleteLink } from "../../services/store-liks";
import { LinkItem } from "../../components/LinkItem";

interface LinkData {
  id: string;
  longUrl: string;
  shortUrl: string;
}

export const Links: React.FC = () => {
  const [myLinks, setMyLinks] = useState<LinkData[]>([]);
  const [data, setData] = useState<LinkData>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [emptyList, setEmptyList] = useState<boolean>(false);

  useEffect(() => {
    async function getLinks() {
      const result: LinkData[] = await getLinksSaved("linksEncurtados");

      if (result.length === 0) {
        setEmptyList(true);
      }

      setMyLinks(result);
    }

    getLinks();
  }, []);

  const handleOpenLink = (link: LinkData) => {
    setData(link);
    setShowModal(true);
  };

  const handleDelete = (id: string) => {
    const links = deleteLink(myLinks, id);

    if (links.length === 0) {
      setEmptyList(true);
    }

    setMyLinks(links);
  };

  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>Meus Links</h1>
      </div>

      {emptyList && (
        <div className="empty-message">Sua lista está vazia...</div>
      )}

      {myLinks.map((link) => (
        <div key={link.id} className="links-item">
          <button onClick={() => handleOpenLink(link)} className="link">
            <FiLink size={18} color="#fff" />
            {link.longUrl}
          </button>
          <button className="link-delete" onClick={() => handleDelete(link.id)}>
            <FiTrash size={24} color="#FF5454" />
          </button>
        </div>
      ))}

      {showModal && data && (
        <LinkItem
          content={data}
          closeModal={() => {
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
};
