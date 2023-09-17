import axios from "axios"
import { useEffect, useState } from "react"

interface PropsData{
  id:           Number     
  name:         String
  description:  String
  status:       "Disponível"| "Reservado" | "Em Uso"
  initial_date: String
  final_date:   String
  user:         String
}

export function useGerenciamento() {
  const [data, setData] = useState<PropsData[]|null>(null);
  const [search, setSearch] = useState<string>("");

  async function getData(){
    console.log("getdata called");

    if (/^[0-9]+$/.test(search)) {
      axios.get("http://localhost:3000/tools/"+search)
      .then(res=>setData([res.data]))
      .catch(err=> setData(null))
    }else if (search.length != 0){
      axios.get("http://localhost:3000/toolsName/"+search)
      .then(res=>setData(res.data))
      .catch(err=> setData(null))
    }else{
      axios.get("http://localhost:3000/tools")
      .then(res=>setData(res.data))
    }
    
  }

  useEffect(() =>{getData()},[search])

  return {data, search, setSearch}
}