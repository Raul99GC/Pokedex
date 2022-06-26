import React from 'react'
import logoLogin from '../assets/imgs/Logo-login.png'

const Login = () => {
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

         <form className='login__form flex' action="">
            <input className='login__input' type="text" placeholder='Full name' />
            <label className='login__label' htmlFor="name">Full name</label>


            <button className='login__buton'>Login</button>

         </form>
      </div>
   )
}

export default Login