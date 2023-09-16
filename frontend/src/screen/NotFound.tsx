import { Link } from "react-router-dom";

export default function NotFound() {
  return(
    <main>
      <h1>404 pagina não encontrada</h1>
      <Link to={"/"}>Voltar</Link>
    </main>
  )
}