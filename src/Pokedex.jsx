import React, { useEffect, useState } from 'react'
import NavMenu from './components/pokedex/NavMenu'
import InputSearch from './components/pokedex/InputSearch'
import axios from 'axios'
import ButtonFilter from './components/pokedex/ButtonFilter'
import CardPreview from './components/pokedex/CardPreview'
import Home from './components/Home'

// React Routes
import { Routes, Route } from 'react-router-dom'
import Pagination from './components/pokedex/Pagination'

const Pokedex = () => {


    const [pokemons, setPokemons] = useState()
    const [pokemonsPagination, setpokemonsPagination] = useState()
    const [pokemonSearch, setPokemonSearch] = useState()
    const [filterPokemon, setFilterPokemon] = useState()
    const [typeList, setTypeList] = useState()
    const [filterType, setFilterType] = useState('All Pokemons')




    useEffect(() => {
        if (filterType === 'All Pokemons') {
            const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=250'
            // 1145
            axios.get(URL_POKEMONS)
                .then(res => setPokemons(res.data.results))
                .catch(erro => console.log(erro))
        } else {
            const URL = `https://pokeapi.co/api/v2/type/${filterType}`
            axios.get(URL)
                .then(res => {
                    const array = res.data.pokemon.map(e => e.pokemon)
                    setPokemons(array)
                    
                })
        }

    }, [filterType])

    useEffect(() => {
        if (pokemonSearch) {
            setFilterPokemon(pokemons.filter(e => e.name.includes(pokemonSearch.toLowerCase())))
        }
        else {
            setFilterPokemon('')
        }
    }, [pokemonSearch])

    useEffect(() => {
        const URL = 'https://pokeapi.co/api/v2/type/'
        axios.get(URL)
            .then(res => setTypeList(res.data.results))
            .catch(err => console.log(err))
    }, [])


    return (
        <main className='pokedex flex'>
            <div className="pokedex__num-poke">
                <p className='pokedex__p-number'> 800 Pokemons for you tu choose your favorite</p>
            </div>
            <div className="filter">
                <InputSearch
                    pokemons={pokemons}
                    setPokemonSearch={setPokemonSearch}
                />
                <ButtonFilter
                    typeList={typeList}
                    setFilterType={setFilterType}
                />

                <Pagination 
                    pokemons={pokemons}
                    filterPokemon= {filterPokemon}
                    setpokemonsPagination={setpokemonsPagination}
                    pokemonsPagination={pokemonsPagination}
                />
            </div>

            <div className='pokedex-main flex'>

                {
                    filterPokemon ?
                        filterPokemon?.map(pokemon => (
                            <CardPreview
                                key={pokemon.url}
                                URL={pokemon.url}
                            />
                        ))
                        :
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