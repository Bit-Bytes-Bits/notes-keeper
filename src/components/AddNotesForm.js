import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AddNotesForm({ handleNewData }) {
 const history = useHistory();
  const [newNote, setNewNote] = useState({
    category: "",
    text: "",
    date: "",
  });
  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setNewNote({
      ...newNote,
      [name]: value,
    });
  }
  console.log(newNote);
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    });
    history.push("/");
    handleNewData();
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label>Category:</label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="choose category"
          name="category"
        />
        <label>Date</label>
        <input onChange={handleChange} type="date" name="date" />
        <label>Add Note</label>
        <textarea onChange={handleChange} name="text" required />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddNotesForm;
