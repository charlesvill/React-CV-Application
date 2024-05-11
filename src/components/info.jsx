import { useState } from "react"
import { updateData, summonBtn, hideBtn } from "../utils"


const info = {
  name: "",
  phone: "",
  email: ""
}
function Edit({data, handleEdit, submit}){
  return (
    <div>
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

  const show = (e) => {
    summonBtn(e);
  }
  const hide = (e) => {
    hideBtn(e)
  }

  return(
    <div onMouseOver={show} onMouseOut={hide}>
      <span>{data.name}</span>
      •
      <span>{data.phone}</span>
      •
      <span>{data.email}</span>
      <button className="editInfoBtn" style={{display: 'none'}} onClick={handleMode}>Edit</button>
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
    // I think this is useful showing ternery operator to act as a gate for which component is triggered
    mode === "edit" ? <Edit data={data} handleEdit={handleEdit} submit={handleMode}/> : <Publish data={data} handleMode={handleMode}/>
  )
}
