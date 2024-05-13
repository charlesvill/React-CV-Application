import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import { updateData } from "../utils.js"
import ItemComponent from "./eduItem.jsx"

const template = {
  id: "",
  institution:"",
  program: "",
  achievements: "",
  startDate: "",
  endDate: "",
}

function Edit({list, addToList, handleMode, handleDelete}) {
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
      <h3>Education</h3>
      <ul>
        {
          list.map(entry => (
            <li key={entry.id}><ItemComponent item={entry} handleDelete={handleDelete}/></li>
          ))
        }
      </ul>
      {!showForm && <button onClick={handlePlus}>Add +</button>}
      {showForm && (
              <form onSubmit={createItem}>
               <h3>New Entry</h3>
               <div>
                <label htmlFor="institution">Institution/University</label>
                <input type="text" id="institution" onChange={handleEdit} value={newEntry.institution}/>
               </div>
               <div>
                <label htmlFor="program">Program/Degree</label>
                <input type="text" id="program" onChange={handleEdit} value={newEntry.program}/>
               </div>
               <div>
                <label htmlFor="achievements">Responsibilities & Achievements</label>
                <input type="text" id="achievements" onChange={handleEdit} value={newEntry.achievements}/>
               </div>
               <div>
                <label htmlFor="startDate">Start Date</label>
                <input type="text" id="startDate" onChange={handleEdit} value={newEntry.startDate}/>
                <label htmlFor="endDate">End Date</label>
                <input type="text" id="endDate" onChange={handleEdit} value={newEntry.endDate}/>
               </div>
                <button type="submit">Submit</button>
             </form>
      )}
      <button onClick={handleMode}>Done</button>
    </div>
  )
}

function Publish({list, handleMode, handleDelete}) {
  const [isHover, setIsHover] = useState(false);

  return(
    // this should be a <ul> instead
    <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <h3>Education</h3>
      <ul>
        {
          list.map(entry => (
            <li key={entry.id}><ItemComponent item={entry} handleDelete={handleDelete}/></li>
          ))
        }
      </ul>
      {isHover && (
        <button onClick={handleMode}>Edit Experience</button>
      )}
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
  function handleMode(){
    setMode(mode === "edit" ? "publish" : "edit");
  }
  function handleDelete(id){
    setData(data.filter(item => {
      console.log(item.id);
      console.log(id);
      return item.id !== id}));
  }

  return (
    <div>
      {mode === "edit"
        ? <Edit list={data} addToList={addToList} handleMode={handleMode} handleDelete={handleDelete}/>
        : <Publish list={data} handleMode={handleMode} handleDelete={handleDelete}/>}
    </div>
  )
}
