import React from 'react'
import NavMenu from './pokedex/NavMenu'
import pikachu from '../assets/imgs/Pikachu.png'
import cloud from '../assets/imgs/Cloud.png'
import pokeballRed from '../assets/imgs/Pokeball2.png'
import pokeballgray from '../assets/imgs/Pokeball1.png'

// React Routers
import { Routes, Route, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Home = () => {



   const userName = useSelector(state => state.userName)

   return (
      <div className='Home'>

         <div className="banner-home flex">
            <div className="banner-home__imgs">
               <img className='banner-home__pikachu' src={pikachu} alt="pikachu img" />
               <img className='banner-home__cloud' src={cloud} alt="" />
               <img className='banner-home__cloud banner-home__cloud--small' src={cloud} alt="" />
               <img className='banner-home__pokeball-red' src={pokeballRed} alt="pokeball red" />
               <img className='banner-home__pokeball-gray' src={pokeballgray} alt="pokeball gray" />
            </div>

         </div>
         <section className="inf-userName flex">
            <h2 className='inf-userName__h2'>{`Hello pokemon Master ${userName}`}</h2>
            <h3 className='inf-userName__p-big-font'>Find all your favorite Pokemon</h3>
         </section>


         <div className="home__btn-container flex">
            <NavLink to={'/pokedex'} ><button className='home__button'> See pokemons </button> </NavLink>
         </div>
      </div>
   )
}

export default Home