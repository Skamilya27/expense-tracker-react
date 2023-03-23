import React, { useContext } from 'react'
import { AuthContext } from './AuthContext';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { IdToken } = useContext(AuthContext);
    if(IdToken) {
        return children;
    }
    else {
        toast("Please Login First");
        return <Navigate to='/auth' />
    }
}

export default PrivateRoute;