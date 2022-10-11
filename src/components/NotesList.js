import React from "react";

function NotesList({id, note,onDelete}) {
  return (
    <div>
      <h3>category:{note.category}</h3>
      <h4>Date:{note.date}</h4>
      <p>Note:{note.text}</p>
      <button onClick={()=>onDelete(id)}>DELETE</button>
    </div>
  );
}

export default NotesList;
