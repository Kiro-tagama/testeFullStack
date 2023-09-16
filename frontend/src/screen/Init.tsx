import { Link } from "react-router-dom";

export default function Init() {
  return(
    <main>
      <h1>Tools</h1>
      <Link to={"/gerenciar"} role="button" className="outline">
        Lista de ferramentas
      </Link>
      <Link to={"/add"} role="button" className="outline">
        Adicionar nova ferramenta
      </Link>
      <Link to={"/reservar"} role="button" className="outline">
        Reservar
      </Link>
    </main>
  )
}