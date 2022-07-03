import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { NavLink } from 'react-router-dom'


const CardPreview = ({ URL }) => {


    const [pokemon, setPokemon] = useState()

    useEffect(() => {

        axios.get(URL)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [])

    const type = pokemon?.types[0].type.name
    const secondType = pokemon?.types[1]?.type.name

    console.log(secondType)

    const colorType = type => {
        if (type === 'fire' || type === 'fairy' ) return 'color-card-red'
        if (type === 'water' || type === 'ice') return 'color-card-blue'
        if (type === 'dragon' || type === 'flying') return 'color-card-light-blue'
        if (type === 'normal' || type === 'steel' || type === 'fighting') return 'color-card-gray'
        if (type === 'rock' || type === 'ground') return 'color-card-brown'
        if (type === 'bug' || type === 'grass') return 'color-card-green'
        if (type === 'poison' || type === 'ghost' || type== 'dark' || type ===  'psychic') return 'color-card-purple'
        if (type === 'electric' || type === 'ghost') return 'color-card-yellow'
    }


    return (
        <section className='card-pre flex box-shadow'>
            <div className="card-pre__inf">
                <h3 className='card-pre__pokemon-name'>{pokemon?.forms[0].name}</h3>
                <div className="card-pre__status">
                    <div className='card-pre__number flex'>{pokemon?.stats[1].base_stat}</div>
                    <div className='card-pre__number flex'>{pokemon?.stats[2].base_stat}</div>
                    <p className={`card-pre__p `} >Attack</p>
                    <p className={`card-pre__p`}>Defense</p>
                </div>
                <div className="card-pre__type-box flex">
                    <span className={`type ${colorType(type)}`}>{type}</span>
                    {
                        pokemon?.types[1] ? <span className={`type ${colorType(secondType)} `}>{secondType}</span> : ''
                    }
                </div>
            </div>
            <div className={`card-pre__img-box flex ${colorType(type)}`}>
                <NavLink to={`/pokedex/${pokemon?.id}` }>
                <img className='card-pre__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="Pokemon" />
                </NavLink>
            </div>



        </section>
    )
}

export default CardPreview