import React from 'react'
import NavMenu from './pokedex/NavMenu'
import {Outlet} from 'react-router-dom'

const PagesWithNavBar = () => {
  return (
    <div>
        <NavMenu />
        <Outlet />
    </div>
  )
}

export default PagesWithNavBar