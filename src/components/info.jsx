import { useState } from "react"
import { updateData } from "../utils"


const info = {
  name: "",
  phone: "",
  email: ""
}
function Edit({data, handleEdit, submit}){
  return (
    <div className={"form-container"}>
      <form onSubmit={submit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={handleEdit} value={data.name}/>
        <label htmlFor="phone">Phone number</label>
        <input type="number" id="phone" onChange={handleEdit} value={data.phone}/>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={handleEdit} value={data.email}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
function Publish({data, handleMode}){
  const [isHovered, setIsHovered] = useState(false);

  return(
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={"h2"}>
       <span>
         {data.name}
       </span>
      </div>
      <span className={"inline"}>{data.phone}</span>
      <span>{data.email}</span>

      {isHovered && (
        <button className="editInfoBtn" onClick={handleMode}>Edit</button>
      )}
    </div>
  )
}

export default function GeneralInfo(){
  const [mode, setMode] = useState("edit");
  const [data, setData] = useState(info);

  function handleEdit(e){
    updateData(e, data, setData);
  }
  function handleMode(e){
    e.preventDefault();
    setMode(mode === "edit" ? "publish" : "edit");
  }
  return (
    mode === "edit"
      ? <Edit data={data} handleEdit={handleEdit} submit={handleMode}/>
      : <Publish data={data} handleMode={handleMode}/>
  )
}
