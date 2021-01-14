import React from 'react'
import { Link } from "react-router-dom"
import "./navbar.css"
import logo from "../Logo.png";

export default function NavBar() {
  return (
    <div className="navbar">
      
      <div>
        <Link to="#">Work</Link>
      </div>

      <ul>
        <li><Link to="">About</Link></li>
        <li><Link to="">Contact</Link></li>
      </ul>

      <img src={logo} alt="logo" />

    </div>
  )
}
