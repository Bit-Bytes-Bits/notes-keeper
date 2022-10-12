import React, { useState, useEffect } from "react";
import "../App.css";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AddNotesForm from "./AddNotesForm";
import Search from "./Search";

function App() {
  const [notes, setNotes] = useState([]);
  const [newData, setNewData] = useState(false);
  const [search, setSearch] = useState("")
  useEffect(() => {
    fetch("https://notes-keeper-backend.herokuapp.com/notes")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      });
  }, [newData]);
  function handleNewData() {
    setNewData((newData) => !newData);
  }
  function onDelete(id){
    fetch(`https://notes-keeper-backend.herokuapp.com/notes/${id}`,{
      method:"DELETE",
    })
    .then(res=>res.json())
    .then(()=>{
      const remainingNotes=notes.filter((remNotes)=>remNotes.id!==id)
      setNotes(remainingNotes)
    })

  }
  return (
    <div className="App">
      <NavBar />
      <Search setSearch={setSearch}/>
      <Switch>
        <Route exact path="/addnotes">
          <AddNotesForm handleNewData={handleNewData} />
        </Route>
        <Route exact path="/">
          <HomePage notes={notes} search={search} onDelete={onDelete}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
