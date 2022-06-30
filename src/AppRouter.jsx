import React from 'react'
import Home from './components/Home'
import Pokedex from './Pokedex'
import NavMenu from './components/pokedex/NavMenu'
import Error404 from './components/Error404'
import PagePokeCard from './components/pokedex/PagePokeCard'

import { Routes, Route, NavLink } from 'react-router-dom'

const AppRouter = () => {
    return (
        <>
            <NavMenu />
            <Routes>
                <Route path='/' element={<Home />} > </Route>
                <Route path='/pokedex'  element={<Pokedex />} >
                    <Route path=':id' element={<h1>Hola papus</h1>} />
                </Route>

                <Route path="*" element={<Error404 />} />


            </Routes>
        </>
    )
}

export default AppRouter