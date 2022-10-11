import React,{useState, useEffect} from 'react';
import '../App.css';
import NavBar from './NavBar';
import {Switch, Route} from "react-router-dom"
import HomePage from './HomePage';
import AllNotes from './AllNotes'
import AddNotesForm from './AddNotesForm';

function App() {
  const[notes, setNotes]=useState([])
  const[newData, setNewData]=useState(false)
  useEffect(()=>{
    fetch('http://localhost:3000/notes')
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setNotes(data)
    })
  },[newData])
  function handleNewData(){
    setNewData(newData=>!newData)
  }
  return (
    <div className="App">
     <NavBar/>
     <Switch>
      <Route exact path="/notes">
        <AllNotes/>
      </Route>
      <Route exact path="/addnotes">
        <AddNotesForm handleNewData={handleNewData}/>
      </Route>
      <Route exact path="/">
        <HomePage notes={notes}/>
      </Route>
     </Switch>
    </div>
  );
}

export default App;
