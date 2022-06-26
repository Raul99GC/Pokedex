import React from 'react'
import NavMenu from './NavMenu'
import pikachu from '../assets/imgs/Pikachu.png'
import cloud from '../assets/imgs/Cloud.png'
import pokeballRed from '../assets/imgs/Pokeball2.png'
import pokeballgray from '../assets/imgs/Pokeball1.png'

// React Routers
import { Routes, Route } from 'react-router-dom'


const Home = () => {
   return (
      <div className='Home '>

         <Routes>
            <Route></Route>
         </Routes>

         <NavMenu />

         <div className="banner-home flex">
            <div className="banner-home__imgs">
               <img className='banner-home__pikachu' src={pikachu} alt="pikachu img" />
               <img className='banner-home__cloud' src={cloud} alt="" />
               <img className='banner-home__cloud banner-home__cloud--small' src={cloud} alt="" />
               <img className='banner-home__pokeball-red' src={pokeballRed} alt="pokeball red" />
               <img className='banner-home__pokeball-gray' src={pokeballgray} alt="pokeball gray" />
            </div>

         </div>
            <section className="inf-userName">
               <h2 className='inf-userName__h2'>{`Hello Master pokemon Name`}</h2>
            </section>
      </div>
   )
}

export default Home