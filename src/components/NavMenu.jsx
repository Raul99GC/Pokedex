import React, { useState } from 'react'
import Logo from '../assets/imgs/Logo.png'

const NavMenu = () => {

   const [btnMenu, setBtnMenu] = useState(false)

   const clickBtnMenu = () =>{
      if(!btnMenu){
         setBtnMenu(true)
      }
      else {
         setBtnMenu(false)
      }
   }
   console.log(btnMenu)

   return (
      <header className='header flex'>
         <nav className='navbar flex'>
            <div className="navbar__header-content flex">
               <a href="#" className='navbar__logo'><img src={Logo} alt="Logo pokemon" /></a>

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
                        <li className='menu-content__item'><a href="">Pokedex</a></li>
                        <li className='menu-content__item'><a href="">Legendaries</a></li>
                        <li className='menu-content__item'><a href="">Algo mas</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </nav>
      </header>
   )
}

export default NavMenu