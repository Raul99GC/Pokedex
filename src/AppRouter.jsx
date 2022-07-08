import React from 'react'
import Home from './components/Home'
import Pokedex from './Pokedex'
import NavMenu from './components/pokedex/NavMenu'
import Error404 from './components/Error404'
import PagePokeCard from './components/pokedex/PagePokeCard'
import './assets/css/normalize.css'
import './index.css'

import { Routes, Route, NavLink } from 'react-router-dom'
import PagesWithNavBar from './components/PagesWithNavBar'
import Login from './components/Login'
import ProtectedRoutes from './components/ProtectedRoutes'

const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path='/login' element={<Login />} />
                {/* <Route path='/error404' element={<Error404 />} /> */}

                <Route element={<ProtectedRoutes />} >
                    <Route path='/' element={<PagesWithNavBar />} >
                        <Route index element={<Home />} />
                        <Route path='/pokedex' element={<Pokedex />} />
                        <Route path='/pokedex/:id' element={<PagePokeCard />} />
                    </Route>
                </Route>

                <Route path="*" element={<Error404 />} />


            </Routes>
        </>
    )
}

export default AppRouter