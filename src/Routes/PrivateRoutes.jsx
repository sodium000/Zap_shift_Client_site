import React from 'react';
import useAuth from '../hooks/useAuth';
import Loading from '../Component/Loading/Loading';
import { Navigate } from 'react-router';



const PrivateRoutes = ({children}) => {
    const {user,loading}=useAuth();

    if (loading) {
        return <div className='flex justify-center items-center h-[300px]'><Loading></Loading></div>
    }

    if (!user) {
        return <Navigate to='/login'></Navigate>
    }

    return children;
};

export default PrivateRoutes;