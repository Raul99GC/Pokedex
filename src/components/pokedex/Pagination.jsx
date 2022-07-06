import { current } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'

const Pagination = ({ pokemons, filterPokemon, setPokemonsPagination, pokemonsPagination, setNumberPokemons }) => {


    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(12)
    const [totalPost, settotalPost] = useState()

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage


    const pageNumbers = []



    useEffect(() => {
        if (filterPokemon) {
            const currentPost = filterPokemon?.slice(indexOfFirstPost, indexOfLastPost)
            settotalPost(filterPokemon?.length)
            console.log(totalPost)
            setPokemonsPagination(currentPost)
        } else {
            const currentPost = pokemons?.slice(indexOfFirstPost, indexOfLastPost)
            settotalPost(pokemons?.length)
            console.log(totalPost)
            setPokemonsPagination(currentPost)
        }
        
    }, [filterPokemon, pokemons, currentPage])
    // console.log(totalPost)



    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumbers.push(i)
    }

    const nextPage = () => {
        if(currentPage < (pageNumbers.length)) setCurrentPage( currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage > 1) setCurrentPage( currentPage - 1)
    }

    return (
        <>
            <nav className='pagination flex'>


                <ul className="pagination__list flex">
                    <button onClick={() => setCurrentPage(1)} className='pagination__btn'>&#60;&#60;</button>
                    <button onClick={prevPage} className='pagination__btn'>&#60;</button>


                    <button onClick={() => setCurrentPage(currentPage)} className='pagination__btn'>{currentPage}</button>
                    <button onClick={() => setCurrentPage((currentPage + 1))} className='pagination__btn'>{currentPage +1}</button>
                    <button onClick={() => setCurrentPage((currentPage + 2))} className='pagination__btn'>{currentPage +2}</button>


                    <button onClick={nextPage} className='pagination__btn'>&#62;</button>
                    <button onClick={() => setCurrentPage(pageNumbers.length)} className='pagination__btn'>&#62;&#62;</button>

                </ul>
            </nav>
        </>
    )
}

export default Pagination