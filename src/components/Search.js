import React from "react";

function Search({setSearch}) {
  function handleSearch(e){
    // console.log(e.target.value)
    setSearch(e.target.value)
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
