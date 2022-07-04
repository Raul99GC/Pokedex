import React, { useEffect, useState } from 'react'

const Pagination = ({ pokemons, filterPokemon, pokemonsPagination, setpokemonsPagination }) => {

    const [page, setPage] = useState(0)
    const maxItems = 12
    const totalItems = pokemons?.length
    const maxPage = Math.ceil(totalItems / maxItems)
    const arrayPokemons = pokemons?.slice(page * maxItems, maxItems * (page + 1))
    console.log(arrayPokemons)

    useEffect(() => {
        setpokemonsPagination(arrayPokemons)

    }, [pokemonsPagination])


    const onNextPage = () => {
        setPage(page + 1)
    }

    const onPrevPage = () => {
        setPage(page + -1)
    }


    // console.log(totalItems)

    return (
        <>
            <div className='pagination flex'>
                <div className="buttons">
                    <button className='pagination__btn prev'
                        onClick={onPrevPage}
                        disabled={
                            !page
                        }
                    >prev</button>
                    <button
                        onClick={onNextPage}
                        disabled={
                            // si page es igual al ultimo se desactiva el boton
                            page === Math.ceil(totalItems / maxItems) - 1
                        }
                    >
                        Next
                    </button>
                </div>
                <p>
                    {page + 1} of {maxPage}
                </p>


            </div>
        </>
    )
}

export default Pagination