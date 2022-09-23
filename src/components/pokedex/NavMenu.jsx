import React, { useState } from 'react'
import Logo from '../../assets/imgs/Logo.png'
import Home from '../Home'
import Pokedex from '../../Pokedex'

import { Routes, Route, NavLink } from 'react-router-dom'

const NavMenu = () => {

   const [btnMenu, setBtnMenu] = useState(false)

   const clickBtnMenu = () => {
      if (!btnMenu) {
         setBtnMenu(true)
      }
      else {
         setBtnMenu(false)
      }
   }

   return (
      <header className='header flex'>
         <nav className='navbar flex'>
            <div className="navbar__header-content flex">
               <a href="#" className='navbar__logo'><img src={Logo} alt="Logo pokemon" /></a>

               <nav className="menu-content-desktop">
                  <ul className='menu-content-desktop__ul flex'>
                     <li onClick={clickBtnMenu} className='menu-content-desktop__item'><NavLink to={'/'} >Home</NavLink></li>
                     <li onClick={clickBtnMenu} className='menu-content-desktop__item'><NavLink to={'/pokedex'} >Pokedex</NavLink></li>
                  </ul>
               </nav>

               <button onClick={clickBtnMenu} className="navbar-btn">
                  <i className='bx bx-menu'></i>
               </button>
            </div>

            <div className={`menu-box ${!btnMenu ? " menu-box-hidden" : ""}`}>

               <div className="menu-content">
                  <div onClick={clickBtnMenu} className="btn-close flex">
                     <button><i className='bx bx-x'></i></button>
                  </div>

                  <div className="menu-content__items flex">
                     <a href="#" className='menu-content__logo'>
                        <img src={Logo} alt="Logo pokemon" />
                     </a>
                     <ul className='menu-content__ul flex'>
                        <li onClick={clickBtnMenu} className='menu-content__item'><NavLink to={'/'} >Home</NavLink></li>
                        <li onClick={clickBtnMenu} className='menu-content__item'><NavLink to={'/pokedex'} >Pokedex</NavLink></li>
                     </ul>
                  </div>
               </div>
            </div>
         </nav>



      </header>
   )
}

export default NavMenu