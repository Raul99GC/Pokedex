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

    console.log(pokemon)

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
        <div className="page-card">


            <div className='page-card__container'>
                <div className="page-card__inf-basic flex">
                    <h2 className='page-card__h2'>{pokemon?.forms[0].name}</h2>
                    <img className='page-card__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="imagen pokemon" />
                </div>

                <div className="page-card__box-inf flex">
                    <section className="page-card__stats flex">
                        <div className="page-card__stat-box flex">
                            <span className='page-card__circle flex'>578</span>
                            <p className='page-card__generation'>generation 1</p>
                        </div>

                        <div className="page-card__type-box flex">
                            <span className='type page-card__type'>grass</span>
                            <span className='type page-card__type'>poison</span>
                        </div>
                    </section>

                    <section className='page-card__abilities flex'>
                        <h3>Abilities</h3>
                        <p>overgrow - Chlorophyll</p>
                    </section>

                    <section className="page-card__points flex">
                        <h3>Healthy Points</h3>
                        <p>1000,000</p>
                        <progress min='0' max='100' value='75'></progress>
                        <h3>Experience</h3>
                        <p>1000,000</p>
                        <progress min='0' max='100' value='75'></progress>
                    </section>

                    <section className="page-card__stat-numbers flex">
                        <div className="page-card__box-stat flex">
                            <span className='page-card__stat'>49</span>
                            <p className='page-card__p'>Defense</p>
                        </div>
                        <div className="page-card__box-stat flex">
                            <span className='page-card__stat'>49</span>
                            <p className='page-card__p'>Attack</p>
                        </div>
                        <div className="page-card__box-stat flex ">
                            <span className='page-card__stat'>49</span>
                            <p className='page-card__p'>SP Defense</p>
                        </div>
                        <div className="page-card__box-stat flex">
                            <span className='page-card__stat'>49</span>
                            <p className='page-card__p'>SP Attack</p>
                        </div>
                    </section>
                </div>


            </div>
        </div>

    )
}

export default PagePokeCard