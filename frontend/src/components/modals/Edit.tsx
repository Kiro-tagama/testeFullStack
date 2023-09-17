interface PropsData{
  editModalStatus:boolean
  setEditModalStatus:any
  putData:any
  setPutData:any
  editTool:any
}

export function EditModal(
  {editModalStatus,setEditModalStatus,
  putData,setPutData,editTool}: PropsData)
  {
  
  function clean() {
    setPutData({...putData, 
      initial_date:"",
      final_date:"",
      user:"",
      status:"Disponível"
    })
  }

  return(
    <dialog open={editModalStatus}>
      <article>
        <a onClick={() => setEditModalStatus(false)}
          aria-label="Close"
          className="close"
        >
        </a>
        <h3>Editar</h3>
        <form>
          <label htmlFor="">Nome</label>
          <input type="text" placeholder="Chave de Fenda" 
            //@ts-ignore
            value={putData.name}
            aria-invalid={putData.name.length <=3 ? "true" : "false"}
            onChange={txt => setPutData({...putData, name:txt.target.value})}
            />

          <label htmlFor="">Locador</label>
          <input type="text" placeholder="João" 
            //@ts-ignore
            value={putData.user}
            onChange={txt => setPutData({...putData, user:txt.target.value})}
          />
          <label htmlFor="">Data Inicial</label>
          <input type="date" name="data" id=""
            aria-valuemin={(new Date().getTime())}
            value={putData.initial_date}
            onChange={txt => setPutData({...putData, initial_date:txt.target.value})}
          />
          <label htmlFor="">Data Final</label>
          <input type="date" name="data" id=""
            aria-valuemin={(new Date().getTime())}
            value={putData.final_date}
            onChange={txt => setPutData({...putData, final_date:txt.target.value})}
            />
          <label htmlFor="">Descrição</label>
          {/* @ts-ignore */}
          <textarea cols="30" rows="5" value={putData.description} 
            onChange={txt => setPutData({...putData, description:txt.target.value})}
            />
          <button
            className="outline"
            onClick={()=>clean()}
            >
            Liberar ferramenta
          </button>
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