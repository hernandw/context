import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
  <div className="container">
    <NavLink className="navbar-brand" to="/">Lavanderia</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="about">Nosotros</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="service">Servicios</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar
