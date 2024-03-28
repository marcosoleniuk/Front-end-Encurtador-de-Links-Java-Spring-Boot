import { Link } from "react-router-dom";
import "./error.css"

export function Error() {
  return (
    <div className="container-error">
      <img src="notfound.png" alt="Imagem de erro 404, página não encontrada" />
      <h1>Página não encontrada!</h1>

      <Link to="/">Voltar para Home</Link>
    </div>
  );
}