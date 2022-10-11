import React from "react";

function AddNotesForm() {
  function handleChange(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>category:</label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="choose category"
          name="category"
        />
        <label>date</label>
        <input onChange={handleChange} type="date" name="date" />
        <label> Add note</label>
        <textarea onChange={handleChange} name="text" required />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddNotesForm;
