import React from 'react'
import NavMenu from './pokedex/NavMenu'
import { Outlet } from 'react-router-dom'

const PagesWithNavBar = () => {
  return (
    <div>
      <NavMenu />
      <div className="pokedex-main-content">
        <Outlet />
      </div>
    </div>
  )
}

export default PagesWithNavBar