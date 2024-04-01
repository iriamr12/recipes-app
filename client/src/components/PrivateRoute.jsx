import React from 'react'
import { context } from './MixContext'
import { useContext } from 'react'
import Homepage from './Homepage';
import { Navigate } from 'react-router-dom';
// we want to create a container component and wrap the routes to be protected
const PrivateRoute = ({children}) => {

    const auth = useContext(context);
//if the user is logged in i want to return the children of this component

  return auth.isLoggedIn ? children : <Navigate to="/login" />
}

export default PrivateRoute