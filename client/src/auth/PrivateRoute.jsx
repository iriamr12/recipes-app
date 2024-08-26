import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { context } from '../components/MixContext';

const PrivateRoute = ({ children }) => {
    const auth = useContext(context);

    // Redirect to login if not authenticated
    return auth.isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
