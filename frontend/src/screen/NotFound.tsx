import { Link } from "react-router-dom";

export default function NotFound() {
  return(
    <main style={{display:"grid",justifyContent:"center"}}>
      <h1>404 pagina não encontrada</h1>
      <Link to={"/"}>Voltar</Link>
    </main>
  )
}