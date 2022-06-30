import React, { useEffect, useState } from 'react'
import NavMenu from './components/pokedex/NavMenu'
import InputSearch from './components/pokedex/InputSearch'
import axios from 'axios'
import ButtonFilter from './components/pokedex/ButtonFilter'
import CardPreview from './components/pokedex/CardPreview'
import Home from './components/Home'

// React Routes
import { Routes, Route } from 'react-router-dom'

const Pokedex = () => {


    const [pokemons, setPokemons] = useState()
    const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5'
    // 1145

    useEffect(() => {
        axios.get(URL_POKEMONS)
            .then(res => setPokemons(res.data.results))
            .catch(erro => console.log(erro))
    }, [])

    console.log(pokemons)


    return (
        <main className='pokedex flex'>
            <div className="pokedex__num-poke">
                <p className='pokedex__p-number'> 800 Pokemons for you tu choose your favorite</p>
            </div>

            <div className="filter">
                <InputSearch />
                <ButtonFilter />
            </div>

            <div className='pokedex-main flex'>

                {
                    pokemons?.map(pokemon => (
                        <CardPreview
                            key={pokemon.url}
                            URL={pokemon.url}
                        />
                    ))
                }
            </div>



        </main>
    )
}

export default Pokedex