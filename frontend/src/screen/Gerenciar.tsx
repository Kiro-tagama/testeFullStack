import { Cards } from "../components/Cards";
import { Link } from "react-router-dom";
import { useGerenciamento } from "../hooks/useGerenciamento";
import { ArrowSquareLeft } from "@phosphor-icons/react";

export default function Gerenciar() {
  const {data, search, setSearch} = useGerenciamento()

  return(
    <main>
      <nav> 
        <div>
          <Link to={'/'} style={{padding:0,margin:0}} className="contrast">
            <ArrowSquareLeft size={32*1.6} />
          </Link>
          
          <input type="search" placeholder="buscar por nome ou id" value={search} style={{width:"auto"}} onChange={txt=>setSearch(txt.target.value)}/>
          <div></div>
          {/* <details role="list">
            <summary aria-haspopup="listbox">Status <span style={{width:"3rem"}}/></summary>
            <ul role="listbox" >
              <li>
                <label>
                  <input type="checkbox"></input>
                  Disponível
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox"></input>
                  Reservado
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox"></input>
                  Em Uso
                </label>
              </li>
            </ul>
          </details>*/}
        </div> 
        
      </nav>
      <div className="areaCards">
        {data != null?
          data.map((data) =><Cards data={data}/>)
          : 
          <article aria-busy="true" style={{backgroundColor:"transparent"}}></article>
        }
      </div>
    </main>
  )
}