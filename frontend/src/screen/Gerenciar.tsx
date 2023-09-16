import axios from "axios";
import { useEffect, useState } from "react"

interface PropsData{
  id:           Number     
  name:         String
  description:  String
  status:       "Disponível"| "Reservado" | "Em Uso"
  initial_date: Date
  final_date:   Date
  user:         String
}

export default function Gerenciar() {
  const [data, setData] = useState<PropsData[]>();

  function getData(){
    axios.get("http://localhost:3000/tools")
    .then(res=>setData(res.data))
    console.log("getdata called");
    
  }

  useEffect(() =>{
    getData()
    console.log("aqui");
    
  },[])

  return(
    <main>
      <div>
        <input type="text" placeholder="buscar" />
        <button onClick={getData}>R</button>
      </div>
      {data?
      data.map((data:PropsData) =>{
        const {id,name,
          description,
          status,
          initial_date,
          final_date,
          user} = data

        return(
          <article className="card">
            <h4>{name +"\t#"+id}</h4>
            <p>{description}</p>
            <span>{status}</span>
            {status == "Disponível"}
          </article>
        )
      }): <article aria-busy="true" style={{backgroundColor:"transparent"}}></article>

      }
    </main>
  )
}