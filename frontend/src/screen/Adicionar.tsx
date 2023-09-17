import { ArrowSquareLeft } from "@phosphor-icons/react";
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
      <h3 style={{marginBottom:2,display:"flex",alignItems:"center", gap:5}}>
      <Link to={'/'} style={{padding:0,margin:0}} className="contrast">
        <ArrowSquareLeft size={32*1.6} weight="thin"/>
      </Link>
      New Tool</h3>
      <form>
        <label>Nome</label>
        <input type="text" placeholder="Chave de Fenda" 
          //@ts-ignore
          value={data.name}
          aria-invalid={data.name.length <=3 ? "true" : "false"}
          onChange={txt => setData({...data, name:txt.target.value})}
          />
        <label>Descrição</label>
        {/* @ts-ignore */}
        <textarea cols="30" rows="5" value={data.description} 
          onChange={txt => setData({...data, description:txt.target.value})}
        />
        <button onClick={postData}>Adicionar</button>
      </form>
    </main>
  )
}