import React from "react";

function NotesList({id, note,onDelete}) {
  return (
    <div className="noteList">
      <h4>Category: {note.category}</h4>
      <h4>Date: {note.date}</h4>
      <p>Note:
      <br></br>{note.text}</p>
      <button className="deleteBtn" onClick={()=>onDelete(id)}><span class="material-symbols-rounded">X
</span></button>
    </div>
  );
}

export default NotesList;
