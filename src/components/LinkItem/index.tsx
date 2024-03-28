import React from "react";
import "./link-item.css";
import { FiX, FiClipboard } from "react-icons/fi";


interface LinkItemProps {
  content: {
    id: string;
    longUrl: string;
    shortUrl: string;
  };
  closeModal: () => void;
}

export const LinkItem: React.FC<LinkItemProps> = ({ content, closeModal }) => {
  function copyLink() {
    navigator.clipboard.writeText(content.shortUrl);
    alert("URL copiada com sucesso!");
  }

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Link Encurtado:</h2>
        <button onClick={closeModal}>
          <FiX size={28} color="#1a1a1a" />
        </button>
      </div>

      <span>{content.shortUrl}</span>

      <button onClick={copyLink}>
        {content.shortUrl}
        <FiClipboard size={20} color="#fff" />
      </button>
    </div>
  );
};
