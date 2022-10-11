import React from 'react'

function HomePage({notes}) {

  // console.log(notes)

  const list=notes.map((note)=>(
    <div>
<h3>{note.category}</h3>
<h4>{note.date}</h4>
    <p>{note.text}</p>



    </div>
  ))
  return (
    <div>
      {list}
    </div>
  )
}

export default HomePage
