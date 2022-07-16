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

    const [loading, setLoading] = useState(false)
    const [pokemons, setPokemons] = useState()
    const [pokemonsPagination, setPokemonsPagination] = useState()
    const [pokemonSearch, setPokemonSearch] = useState()
    const [filterPokemon, setFilterPokemon] = useState()
    const [typeList, setTypeList] = useState()
    const [filterType, setFilterType] = useState('All Pokemons')
    const [numberPokemons, setNumberPokemons] = useState()




    useEffect(() => {
        if (filterType === 'All Pokemons') {
            const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1145'
            // 1145
            axios.get(URL_POKEMONS)
                .then(res => {
                    setLoading(true)
                    setPokemons(res.data.results)
                    setLoading(false)
                    // setNumberPokemons((res.data.results).length)
                })
                .catch(erro => console.log(erro))
                .finally()
        } else {
            const URL = `https://pokeapi.co/api/v2/type/${filterType}`
            axios.get(URL)
                .then(res => {
                    const array = res.data.pokemon.map(e => e.pokemon)
                    setPokemons(array)
                    // setNumberPokemons(array.length)
                })
                .catch(err => console.log(err))
        }
        // setNumberPokemons(pokemons?.length)
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

    useEffect(() => {
        if(filterPokemon) {
            setNumberPokemons(filterPokemon?.length)
            console.log(filterPokemon?.length)
        }else {
            setNumberPokemons(pokemons?.length)
            console.log(pokemons?.length)
        }
      
    }, [filterType, pokemonSearch])


    return (
        <main className='pokedex flex'>
            <div className="pokedex__num-poke">
                <p className='pokedex__p-number'> {numberPokemons} Pokemons for you tu choose your favorite</p>
            </div>
            <div className="filter flex">
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
                    filterPokemon={filterPokemon}
                    setPokemonsPagination={setPokemonsPagination}
                    pokemonsPagination={pokemonsPagination}
                    setNumberPokemons={setNumberPokemons}
                />
            </div>

            <div className='pokedex-main flex'>

                {
                    filterPokemon ?
                        pokemonsPagination?.map(pokemon => (
                            <CardPreview
                                key={pokemon.url}
                                URL={pokemon.url}
                            />
                        ))
                        :
                        pokemonsPagination?.map(pokemon => (
                            <CardPreview
                                key={pokemon.url}
                                URL={pokemon.url}
                            />
                        ))
                }
            </div>


            {/* <div className="filter flex">

                <Pagination
                    pokemons={pokemons}
                    filterPokemon={filterPokemon}
                    setPokemonsPagination={setPokemonsPagination}
                    pokemonsPagination={pokemonsPagination}
                />
            </div> */}

        </main>
    )
}

export default Pokedex