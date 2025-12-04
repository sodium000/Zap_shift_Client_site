import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from '../useAuth';
import { useNavigate } from 'react-router';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000',
});

const useAxiosSecure = () => {
    const {user,logOut}= useAuth();
    const navigate = useNavigate();

    // intercept request 
    useEffect(()=>{
      const reqInerceptor =  axiosSecure.interceptors.request.use(config=>{
            config.headers.Authorization = `Bearer ${user?.accessToken}`
            return config
        });

        const resInterceptor = axiosSecure.interceptors.response.use((response)=>{
            return response ;
        },(error)=>{
            
            const statusCode = error.status;
            console.log(error)
            if ( statusCode === 401 || statusCode === 403) {
                logOut()
                .then(
                    navigate('/login')
                )
            }

            return Promise.reject(error);

        })
        return ()=>{
            axiosSecure.interceptors.request.eject(reqInerceptor);
            axiosSecure.interceptors.response.eject(resInterceptor);
        }
    },[logOut, navigate, user])


    return axiosSecure;
};

export default useAxiosSecure;