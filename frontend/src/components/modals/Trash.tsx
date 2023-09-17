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
  trashModalStatus :any
  setTrashModalStatus:any
  delTool:any
}

export function TrashModal({data,trashModalStatus,setTrashModalStatus,delTool}: PropsData){
  return (
  <dialog open={trashModalStatus}>
    <article>
      <a onClick={() => setTrashModalStatus(false)}
        aria-label="Close"
        className="close"
      >
      </a>
      <h3>Apagar</h3>
      <p>
        A ferramenta {data.name} de id: #{data.id.toFixed()} será apagada
      </p>
      <footer>
        <a href="#cancel"
          role="button"
          className="secondary"
          onClick={() => setTrashModalStatus(false)}
          >
          Cancel
        </a>
        <a href="#confirm"
          role="button"
          type="submit"
          onClick={() => {
            delTool(data.id)
            setTrashModalStatus(false)
            location.reload()
          }}
          >
          Apagar
        </a>
      </footer>
    </article>
  </dialog>
  )
}