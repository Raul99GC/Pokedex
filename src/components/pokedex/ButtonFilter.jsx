import React from 'react'

const ButtonFilter = ({setFilterType, typeList}) => {

  const changeType = e => {
    setFilterType(e.target.value)
  }

  return (
    <form className="btn-container-filter">
        <select onChange={changeType} name='' id='' className='button button--filter'>
          <option value='All Pokemons'>All Pokemons</option>
          {
              typeList?.map(type => (
                <option key={type.name} value={type.name} >{type.name}</option>
              ))
          }
        </select>
    </form>
  )
}

export default ButtonFilter