import { useState } from "react";
import { updateData } from "../utils";

function EditItem({data, handleEdit, handleMode, handleDelete}) {

  function deleteItem(){
    handleDelete(data.id);
  }
  return(

    <>
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
      <button onClick={deleteItem}>Delete</button>

    </>
  )
}

function PubItem({data, handleMode}) {

  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div>
        <span className="h3">{data.institution}</span>
        <div className="dateContainer">
          <span className="offsetRightBold">{data.startDate}</span>
          <span className="offsetRightBold">{data.endDate}</span>
        </div>
      </div>
      <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
       <div>{data.position}</div>
       <div>{data.description}</div>
       {isHovered && (
        <div>
            <button onClick={handleMode}>Edit</button>
        </div>
       )}
      </div>
    </>
  )
}

export default function ItemComponent({item, handleDelete}){
  const[mode, setMode] = useState("publish");
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
        ? <EditItem data={data} handleEdit={handleEdit} handleMode={handleMode} handleDelete={handleDelete}/>
        : <PubItem data={data} handleMode={handleMode}/>
      }
    </>
  )

}
