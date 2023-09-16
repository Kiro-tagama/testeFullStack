import { PencilSimpleLine, Trash } from "@phosphor-icons/react"
import { useCards } from "../hooks/useCards"
import { TrashModal } from "./modals/Trash"
import { EditModal } from "./modals/Edit"

interface PropsData{
  data:{
    id:           Number     
    name:         String
    description:  String
    status:       "Disponível"| "Reservado" | "Em Uso"
    initial_date: Date
    final_date:   Date
    user:         String
  }
}


export function Cards({data}:PropsData) {
  const {
    id,name,
    description,
    status,
    initial_date,
    final_date,
    user
  } = data

  const {
    setTrashModalStatus,
    setEditModalStatus,
    statusIcon
  } = useCards(data)

  return(
    <article className="card" key={id.toFixed()}>
      <div>
        <h4 style={{marginBottom:6}}>{name}</h4>
        <small style={{marginLeft:"auto"}}>#{id.toFixed()}</small>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:2,marginBottom:10}}>
        {status} 
        {statusIcon()} 
      </div>
      {status != "Disponível"?
      <>
        <span>Data Inicial: {initial_date.getTime()}</span>
        <span>Data Final: {final_date.getTime()}</span>
        <p>Locador: {user}</p>
      </>:null
      }
      <div>
        <button onClick={()=>setTrashModalStatus(true)}><Trash size={32} /></button>
        <button onClick={()=>setEditModalStatus(true)}><PencilSimpleLine size={32} /></button>
      </div>
      <details style={{margin:0,marginTop:"auto"}}>
        <summary>Descrição</summary>
        <p>{description}</p>
      </details>

      {/* modal */}
      <TrashModal data={data}/>
      <EditModal data={data}/>
    </article>
  )
}