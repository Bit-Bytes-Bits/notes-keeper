import React from "react";
import logo from "./delete.svg";

function NotesList({id, note,onDelete}) {
  return (
    <div className="noteList">
      <h4>Category: </h4>
      <p>{note.category}</p>
      <h4>Date: </h4>
      <p>{note.date}</p>
      <h4>Note:</h4>
      <p>{note.text}</p>
      <button className="deleteBtn" onClick={()=>onDelete(id)}>
      <img src={logo} className="App-logo" alt="logo" />
      </button>
    </div>
  );
}

export default NotesList;
