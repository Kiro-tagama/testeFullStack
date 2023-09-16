import { useCards } from "../../hooks/useCards"

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

export function EditModal({data}: PropsData){
  const {
    editModalStatus,setEditModalStatus,
    editTool,putData,setPutData
  } = useCards(data)

  console.log(editModalStatus);
  
  return(
    <dialog open={editModalStatus}>
      <article>
        <a onClick={() => setEditModalStatus(false)}
          aria-label="Close"
          className="close"
        >
        </a>
        <h3>Editar</h3>
        <form action="">
          <label htmlFor="">Nome</label>
          <input type="text" placeholder="Chave de Fenda" 
            //@ts-ignore
            value={putData.name}
            aria-invalid={putData.name.length <=3 ? "true" : "false"}
            onChange={txt => setPutData({...putData, name:txt.target.value})}
          />

          <label htmlFor="">Data Inicial</label>
          <input type="date" name="data" id="" />
          <label htmlFor="">Data Final</label>
          <input type="date" name="data" id="" />

          <label htmlFor="">Locador</label>
          <input type="text" placeholder="João" 
            //@ts-ignore
            value={putData.user}
            onChange={txt => setPutData({...putData, user:txt.target.value})}
          />

          <label htmlFor="">Descrição</label>
          {/* @ts-ignore */}
          <textarea cols="30" rows="5" value={putData.description} 
            onChange={txt => setPutData({...putData, description:txt.target.value})}
          />
        </form>
        <footer>
          <a href="#cancel"
            role="button"
            className="secondary"
            onClick={() => setEditModalStatus(false)}
            >
            Cancel
          </a>
          <a href="#confirm"
            role="button"
            type="submit"
            onClick={() => {
              editTool()
              setEditModalStatus(false)
              location.reload()
            }}
            >
            Salvar
          </a>
        </footer>
      </article>
    </dialog>
  )
}