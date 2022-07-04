import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom'

const URL = 'https://pokeapi.co/api/v2/pokemon/'

const PagePokeCard = ({ }) => {

    const { id } = useParams()

    const [pokemon, setPokemon] = useState()

    useEffect(() => {

        axios.get(`${URL}${id}/`)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(pokemon?.base_experience)

    const type = pokemon?.types[0].type.name
    const secondType = pokemon?.types[1]?.type.name

    const colorType = type => {
        if (type === 'fire' || type === 'fairy') return 'color-card-red'
        if (type === 'water' || type === 'ice') return 'color-card-blue'
        if (type === 'dragon' || type === 'flying') return 'color-card-light-blue'
        if (type === 'normal' || type === 'steel' || type === 'fighting') return 'color-card-gray'
        if (type === 'rock' || type === 'ground') return 'color-card-brown'
        if (type === 'bug' || type === 'grass') return 'color-card-green'
        if (type === 'poison' || type === 'ghost' || type == 'dark' || type === 'psychic') return 'color-card-purple'
        if (type === 'electric' || type === 'ghost') return 'color-card-yellow'
    }

    return (
        <div className="page-card flex">
            <section className="page-card__box flex">
                <div className="page-card-content-img ">
                    <img className='page-card__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                </div>

                <div className="page-card__name">
                    <h2 className='page-card__h2-name'>{pokemon?.name}</h2>
                </div>

                <div className="page-card__stats flex">
                    <progress min='0' max='100' value={pokemon?.stats[0].base_stat}></progress>
                    <p className='page-card__p'>Hp: {pokemon?.stats[0].base_stat}</p>

                    <progress min='0' max='1000' value={pokemon?.base_experience}></progress>
                    <p className='page-card__p'>Experience: {pokemon?.base_experience}</p>


                </div>

                <div className="page-card__types flex">
                    <span className={`type ${colorType(type)}`}>{type}</span>
                    {
                        pokemon?.types[1] ? <span className={`type ${colorType(secondType)} `}>{secondType}</span> : ''
                    }
                </div>

                <div className="page-card__stats-points flex">
                    <div className="page-card__box-point-stat flex">
                        <div className="page-card__box-point flex">
                            <p className='page-card__point'>{pokemon?.stats[1].base_stat}</p>
                        </div>
                        <p className='page-card__name-point'>{pokemon?.stats[1].stat.name}</p>
                    </div>
                    <div className="page-card__box-point-stat flex">
                        <div className="page-card__box-point flex">
                            <p className='page-card__point'>{pokemon?.stats[2].base_stat}</p>
                        </div>
                        <p className='page-card__name-point'>{pokemon?.stats[2].stat.name}</p>
                    </div>
                    <div className="page-card__box-point-stat flex">
                        <div className="page-card__box-point flex">
                            <p className='page-card__point'>{pokemon?.stats[3].base_stat}</p>
                        </div>
                        <p className='page-card__name-point'>{pokemon?.stats[3].stat.name}</p>
                    </div>
                    <div className="page-card__box-point-stat flex">
                        <div className="page-card__box-point flex">
                            <p className='page-card__point'>{pokemon?.stats[4].base_stat}</p>
                        </div>
                        <p className='page-card__name-point'>{pokemon?.stats[4].stat.name}</p>
                    </div>


                </div>




            </section>
        </div>

    )
}

export default PagePokeCard