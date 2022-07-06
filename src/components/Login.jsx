import React, { useState } from 'react'
import logoLogin from '../assets/imgs/Logo-login.png'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setGlobalName } from '../store/slices/userName.slice'

const Login = () => {

   const [error, setError] = useState(false)
   const dispach = useDispatch()
   const navigate = useNavigate()

   const handleSubmit = e => {
      const name = (e.target.children[0].value)

      if(name === '' || name.length < 3) {
         console.log('error papus')
         setError(true)
      }
      else {
         dispach(setGlobalName(name))
         navigate('/')
      }
   }

   return (
      <div className='login flex'>

         <div className="login__header flex">
            <h3 className='login__header-h3'>Necesitas loguearte papu</h3>

            <div className="pokeball">
               <div className="details"></div>
            </div>
         </div>

         <div className='login__logo-container flex'>
            <img className='login__logo' src={logoLogin} alt="Logo pokemon" />
         </div>

         <form className='login__form flex' action="" onSubmit={handleSubmit}>
            <input className='login__input' type="text" placeholder='Full name' />
            <label className='login__label' htmlFor="name">Full name</label>

            { error && <p className='p__error'>write a valid name greater than 3 letters</p>  }

            <button className='login__buton'>Login</button>

         </form>
      </div>
   )
}

export default Login