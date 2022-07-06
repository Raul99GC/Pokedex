import React from 'react'
import { NavLink } from 'react-router-dom'
import gifError404 from './../assets/imgs/error-404.gif'

const Error404 = () => {
  return (
    <div className='error404 flex'>
      <img className='error404__gif' src={gifError404} alt="" />

      <div className="home__btn-container flex">
            <NavLink to={'/pokedex'} ><button className='home__button'> Go pokedex </button> </NavLink>
         </div>
    </div>


  )
}

export default Error404