import React from "react";
import NotesList from "./NotesList";

function HomePage({ notes, search,onDelete }) {
  const noteList=notes.filter((note)=>note.text.toLowerCase().includes(search.toLowerCase()))
  return <div className="noteContainer">
  {noteList.map((note)=><NotesList id={note.id} note={note} onDelete={onDelete}/>)}
  </div>;
}

export default HomePage;
