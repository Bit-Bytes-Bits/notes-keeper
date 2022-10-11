import React from "react";

function Search() {
  function handleSearch(){
    // console.log(e.target.value)
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for your note"
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
