import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/addnotes">Add Notes</NavLink>
      <NavLink to="/notes">View Notes</NavLink>
      
    </div>
  )
}

export default NavBar
