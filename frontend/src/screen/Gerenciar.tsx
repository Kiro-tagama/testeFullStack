import { Cards } from "../components/Cards";
import { Link } from "react-router-dom";
import { useGerenciamento } from "../hooks/useGerenciamento";
import { ArrowSquareLeft } from "@phosphor-icons/react";

export default function Gerenciar() {
  const {data, search, setSearch, status, setStatus} = useGerenciamento()

  return(
    <main>
      <nav> 
        <div>
          <Link to={'/'} style={{padding:0,margin:0}} className="contrast">
            <ArrowSquareLeft size="3.5rem" weight="thin"/>
          </Link>
          
          <input type="search" placeholder="buscar por nome ou id" value={search} style={{width:"auto",margin:0}} onChange={txt=>setSearch(txt.target.value)}/>
        <details role="list" style={{margin:0}}>
          <summary aria-haspopup="listbox">Status <span style={{width:"3rem"}}/></summary>
          <ul role="listbox" >
            <li>
              <label>
                <input type="checkbox"
                  value="Disponível"
                  checked={status.disponivel}
                  onChange={() => setStatus({...status,disponivel:!status.disponivel})}
                />
                Disponível
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox"
                  value="Reservado"
                  checked={status.reservado}
                  onChange={() => setStatus({...status,reservado:!status.reservado})}
                />
                Reservado
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox"
                  value="Em Uso"
                  checked={status.emuso}
                  onChange={() => setStatus({...status,emuso:!status.emuso})}
                />
                Em Uso
              </label>
            </li>
          </ul>
        </details>
      </div> 
        
      </nav>
      <div className="areaCards">
        {data != null?
          data.map((data) =>
          <article className="card" key={data.id.toFixed()}>
            <Cards data={data}/>
          </article>
          )
          : 
          <article aria-busy="true" style={{backgroundColor:"transparent"}}></article>
        }
      </div>
    </main>
  )
}