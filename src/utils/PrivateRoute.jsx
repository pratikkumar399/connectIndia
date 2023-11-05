import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

function PrivateRoute({ element, ...rest }) {
    const { isAuthenticated } = useUserAuth(); // Use your authentication context or hook

    return (
        <Route
            {...rest}
            element={isAuthenticated ? element : <Navigate to="/login" replace />}
        />
    );
}

export default PrivateRoute;
