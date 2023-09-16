import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom";

interface PropsData{
  name:         String
  description:  String
}

export default function Adicionar() {
  const [data, setData] = useState<PropsData>({
    name: "",
    description: ""
  });

  function postData(){
    if (data.name.length >= 3) {
      axios.post("http://localhost:3000/newTools",data)
      console.log("getdata called");
    }
  }
  return(
    <main style={{display:"grid",justifyContent:"center"}}>
      <h3 style={{marginBottom:2}}>New Tool</h3>
      <Link to={"/"}>{"<"} Voltar</Link>
      <form action="">
        <label htmlFor="">Nome</label>
        <input type="text" placeholder="Chave de Fenda" 
          //@ts-ignore
          value={data.name}
          aria-invalid={data.name.length <=3 ? "true" : "false"}
          onChange={txt => setData({...data, name:txt.target.value})}
          />
        <label htmlFor="">Descrição</label>
        {/* @ts-ignore */}
        <textarea cols="30" rows="5" value={data.description} 
          onChange={txt => setData({...data, description:txt.target.value})}
        />
        <button onClick={postData}>Adicionar</button>
      </form>
    </main>
  )
}