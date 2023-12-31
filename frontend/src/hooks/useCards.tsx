import { CalendarCheck, CheckCircle, XCircle } from "@phosphor-icons/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface PropsPutData{
  id:           Number     
  name:         String
  description:  String
  status:       "Disponível"| "Reservado" | "Em Uso"
  initial_date: String
  final_date:   String
  user:         String
}

export function useCards(data: PropsPutData) {
  const [trashModalStatus,setTrashModalStatus] = useState<boolean>(false)
  const [editModalStatus,setEditModalStatus] = useState<boolean>(false)

  const [putData,setPutData] = useState<PropsPutData>(data)

  const statusIcon = ()=> {
    const iconSize:number = 24
    switch (data.status) {
    case "Disponível": return <CheckCircle size={iconSize}  color="#7cb342"/> 
    case "Em Uso": return <XCircle  size={iconSize} color="#e53935"/>  
    default: return <CalendarCheck  size={iconSize} color="#1e88e5"/> 
  }}

  function delTool(id:Number) {
    axios.delete("http://localhost:3000/delTools/"+id)
    .then(res=>console.log("dell: "+res))
    .catch(err=>console.log(err))
  }

  function editTool() {
    axios.put("http://localhost:3000/setTools",putData)
    .then(res=>console.log("put: "+res))
    .catch(err=>console.log("puterr"+err))
  }

  useEffect(()=>{
    if (putData.initial_date && putData.final_date) {
      const currentDate = new Date();
      // @ts-ignore
      const startDate = new Date(putData.initial_date);
      // @ts-ignore
      const endDate = new Date(putData.final_date);

      if (currentDate >= startDate && currentDate <= endDate) {
        return setPutData({...putData, status:'Em Uso'})
      } else if (currentDate <= startDate) {
        return setPutData({...putData, status:'Reservado'})
      }else{
        setPutData({...putData, status:"Disponível"})
      }

    }
  },[
    putData.initial_date,
    putData.final_date,
    putData.user
  ])

  return {
    trashModalStatus,setTrashModalStatus,
    editModalStatus,setEditModalStatus,
    delTool,editTool,statusIcon,
    putData,setPutData
  }
}