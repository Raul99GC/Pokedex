import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './components/Login'
import Pokedex from './Pokedex'
import Home from './components/Home'

// ******** Redux *********
import { Provider } from 'react-redux'
import store from './store'

// React Router
import { HashRouter } from 'react-router-dom'
import NavMenu from './components/pokedex/NavMenu'
import AppRouter from './AppRouter'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </HashRouter>
  </React.StrictMode>
)
