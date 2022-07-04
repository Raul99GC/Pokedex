import React from 'react'
import { useForm } from 'react-hook-form'



const InputSearch = ({setPokemonSearch, pokemons}) => {

    const changeInputText = e => {
      if(e.target.value ) {
        console.log(pokemons)
        setPokemonSearch(e.target.value)
      }
      else {
        setPokemonSearch('')
      }
    }

  return (
    <>
      <form className='form-search'>
        <input
          onChange={changeInputText}
          className='form-search__input' type="text" placeholder='Find your pokemon' />

      </form>


    </>

  )
}

export default InputSearch