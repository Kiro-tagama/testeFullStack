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
    initial_date: String
    final_date:   String
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
    trashModalStatus,setTrashModalStatus,
    editModalStatus,setEditModalStatus,
    delTool,editTool,statusIcon,
    putData,setPutData
  } = useCards(data)
  
  return(
    <>
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
        <span>Data Inicial: {initial_date}</span>
        <span>Data Final: {final_date}</span>
        <p>Locador: {user}</p>
      </>: null
      }
      <div style={{flex:1}}></div>
      <div>
        <button onClick={()=>setTrashModalStatus(!trashModalStatus)}><Trash size={32} /></button>
        <button onClick={()=>setEditModalStatus(!editModalStatus)}><PencilSimpleLine size={32} /></button>
      </div>
      <details style={{margin:0,marginTop:"auto"}}>
        <summary>Descrição</summary>
        <p>{description}</p>
      </details>

      {/* modal */}
      <TrashModal data={data}
        trashModalStatus={trashModalStatus}
        setTrashModalStatus={setTrashModalStatus}
        delTool={delTool}
      />
      <EditModal 
        editModalStatus={editModalStatus}
        setEditModalStatus={setEditModalStatus}
        putData={putData}
        setPutData={setPutData}
        editTool={editTool}
      />
    </>
  )
}