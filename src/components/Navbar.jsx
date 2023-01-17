import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container'>
        <NavLink to='/' className='btn btn-outline-primary'>
          Capítulos
        </NavLink>
        <NavLink to='/personajes' className='btn btn-outline-primary'>
          Personajes
        </NavLink>
        <NavLink to='/login' className='btn btn-outline-primary'>
          Inicio de sesión
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
