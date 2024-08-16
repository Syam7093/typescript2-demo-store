import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

const Navbar = () => {
  return (
    <div style={{backgroundColor:"green",color:"white",padding:"20px"}}>
        <Link to="/">form</Link>
        <Link to="/inc">inc</Link>
    </div>
  )
}

export default Navbar