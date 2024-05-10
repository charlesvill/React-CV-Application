import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import { updateData } from "../utils";
import ItemComponent from "./expItem";

const template = {
  id: "",
  institution:"",
  position: "",
  description: "",
  startDate: "",
  endDate: "",
}

function Edit({list, addToList}) {
  const [showForm, setShowForm] = useState(false);
  const [newEntry, setNewEntry] = useState(template);

  function createItem(){
    addToList(newEntry);
  }

  function handleEdit(e){
    updateData(e, newEntry, setNewEntry);
  }

  return(
    <div>

      {list.map(component => (
        <ul>
          <li>{component}</li>
        </ul>
      ))
      }
      {showForm && (
              <form onSubmit={createItem}>
               <label htmlFor="institution">Institution/Company</label>
               <input type="text" id="institution" onChange={handleEdit} value={listItem.institution}/>
               <label htmlFor="position">Position/Title</label>
               <input type="text" id="position" onChange={handleEdit} value={listItem.position}/>
               <label htmlFor="description">Responsibilities & Achievements</label>
               <input type="text" id="description" onChange={handleEdit} value={listItem.description}/>
               <label htmlFor="startDate">startDate</label>
               <input type="text" id="startDate" onChange={handleEdit} value={listItem.startDate}/>
               <label htmlFor="endDate">endDate</label>
               <input type="text" id="endDate" onChange={handleEdit} value={listItem.endDate}/>
               <button type="submit">Submit</button>
             </form>
      )}

    </div>
  )

}

function Publish({list}) {
  // this one should take the list of data objs and map over them calling <ItemComponent/> passing the data

  function summonBtn() {

  }

  function hideBtn() {

  }
  return(
    // this should be a <ul> instead
    <div onMouseOver={summonBtn}>
      {list.map((entry) => {
        <ItemComponent item={entry}/>
      })}
    </div>
  )
}


export default function Experience() {
  const [mode, setMode] = useState("edit");
  const [data, setData] =useState([]);

  function addToList(item){
    setData(
      [...data, item]
    );
  }

  return (
    <div>
      mode === "edit" ? <Edit addToList={addToList}/> : <Publish list={data}/>
    </div>
  )
}
