import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const NavBar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container'>
        <NavLink to='/' className='btn btn-outline-primary'>
          Equipos
        </NavLink>
        <NavLink to='/jugadores' className='btn btn-outline-primary'>
          Jugadores
        </NavLink>
        <NavLink to='/login' className='btn btn-outline-primary'>
          Inicio Sesión
        </NavLink>
        <NavLink to='/resgister' className='btn btn-outline-primary'>
          Registro
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar