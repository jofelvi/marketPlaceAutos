import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import React, { Fragment } from 'react';

function RequireAuth({ children }) {
    const { access_token } = useAuth();

    return (
        <Fragment>
            {access_token ? children : <Navigate to='/'/>}
        </Fragment>
    )
}

export default RequireAuth;