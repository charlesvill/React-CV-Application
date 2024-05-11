import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import { updateData } from "../utils.js"
import ItemComponent from "./expItem.jsx"

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

  function createItem(e){
    e.preventDefault();
    const newId = uuidv4();
    let listItem = newEntry;

    listItem.id = newId;
    addToList(newEntry);
    setShowForm(false);
    setNewEntry(template);
  }
  function handleEdit(e){
    updateData(e, newEntry, setNewEntry);
  }
  function handlePlus(){
    setShowForm(showForm === false ? true : false);
  }

  return(
    <div>
      ------
      <h3>Experience</h3>
      <ul>
        {
          list.map(entry => (
            <li key={entry.id}><ItemComponent item={entry}/></li>
          ))
        }
      </ul>
      {!showForm && <button onClick={handlePlus}>Add +</button>}
      {showForm && (
              <form onSubmit={createItem}>
               <h3>New Entry</h3>
               <label htmlFor="institution">Institution/Company</label>
               <input type="text" id="institution" onChange={handleEdit} value={newEntry.institution}/>
               <label htmlFor="position">Position/Title</label>
               <input type="text" id="position" onChange={handleEdit} value={newEntry.position}/>
               <label htmlFor="description">Responsibilities & Achievements</label>
               <input type="text" id="description" onChange={handleEdit} value={newEntry.description}/>
               <label htmlFor="startDate">startDate</label>
               <input type="text" id="startDate" onChange={handleEdit} value={newEntry.startDate}/>
               <label htmlFor="endDate">endDate</label>
               <input type="text" id="endDate" onChange={handleEdit} value={newEntry.endDate}/>
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
  const [data, setData] = useState([]);

  function addToList(item){
    setData(
      [...data, item]
    );
  }

  return (
    <div>
      {mode === "edit" ? <Edit list={data} addToList={addToList}/> : <Publish list={data}/>}
    </div>
  )
}
