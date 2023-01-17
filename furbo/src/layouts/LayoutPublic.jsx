import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const LayoutPublic = () => {
  return (
    <div>
      <h1>FurboconPelotas</h1>
      <Navbar />
      {/* <nav>Navbar</nav> */}
      {/* <main>Main</main> */}
      <Outlet />
    </div>
  )
}

export default LayoutPublic
