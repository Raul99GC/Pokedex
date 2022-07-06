import React from 'react'

import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  
    const userName = useSelector(state => state.userName)
    if(userName.length >= 3){
        return <Outlet />
    }
    else {
        return <Navigate to={'/login'} />
    }

}

export default ProtectedRoutes