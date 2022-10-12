import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className='nav'>
      <NavLink className="navlink" to="/">Home</NavLink>
      <NavLink className="navlink" to="/addnotes">Add Notes</NavLink>
      {/* <NavLink to="/notes">View Notes</NavLink> */}
      
    </div>
  )
}

export default NavBar
