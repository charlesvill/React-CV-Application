import { useState } from "react";
import { updateData, summonBtn, hideBtn } from "../utils";

function EditItem({data, handleEdit, handleMode}) {

  return(
      <form onSubmit={handleMode}>
         <label htmlFor="institution">Institution/Company</label>
         <input type="text" id="institution" onChange={handleEdit} value={data.institution}/>
         <label htmlFor="position">Position/Title</label>
         <input type="text" id="position" onChange={handleEdit} value={data.position}/>
         <label htmlFor="description">Responsibilities & Achievements</label>
         <input type="text" id="description" onChange={handleEdit} value={data.description}/>
         <label htmlFor="startDate">startDate</label>
         <input type="text" id="startDate" onChange={handleEdit} value={data.startDate}/>
         <label htmlFor="endDate">endDate</label>
         <input type="text" id="endDate" onChange={handleEdit} value={data.endDate}/>
         <button type="submit">Submit</button>
      </form>
  )
}

function PubItem({data, handleMode}) {

  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <ul onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
       <li>{data.institution}</li>
       <li>{data.position}</li>
       <li>{data.description}</li>
       <li>{data.startDate}</li>
       <li>{data.endDate}</li>
       {isHovered && (
        <li>
            <button onClick={handleMode}>Edit</button>
        </li>
       )}
      </ul>
    </>
  )
}

export default function ItemComponent({item}){
  const[mode, setMode] = useState("edit");
  const[data, setData] = useState(item);

  function handleEdit(e) {
    updateData(e, data, setData);
  }
  function handleMode() {
    setMode(mode === "edit" ? "publish" : "edit");
  }

  return (
    <>
      {
        mode === "edit"
        ? <EditItem data={data} handleEdit={handleEdit} handleMode={handleMode}/>
        : <PubItem data={data} handleMode={handleMode}/>
      }
    </>
  )

}
