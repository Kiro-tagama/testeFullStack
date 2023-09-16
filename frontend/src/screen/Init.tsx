import { Link } from "react-router-dom";
import { CalendarPlus, SquaresFour,Wrench } from "@phosphor-icons/react";

export default function Init() {
  return(
    <main style={{display:"grid",justifyContent:"center"}} className="init">
      <h1>Tools</h1>
      <Link to={"/gerenciar"} role="button" className="outline">
        <SquaresFour size={32} />
        <span>Lista de ferramentas</span>
      </Link>
      <Link to={"/add"} role="button" className="outline">
        <Wrench size={32} />
        <span>Adicionar nova ferramenta</span>
      </Link>
      <Link to={"/reservar"} role="button" className="outline">
        <CalendarPlus size={32} />
        <span>Reservar</span>
      </Link>
    </main>
  )
}