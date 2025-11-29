import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import SocalLogin from '../SocalLogin';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signInUser } = useAuth();


    const handelLogin = (data) => {
        console.log(data)
        signInUser(data.Email, data.Password)
            .then(result => console.log(result.user))
            .catch(error => console.log(error))
    }
    return (
        <div className='mx-auto mt-10 max-w-[300px] '>
            <form onSubmit={handleSubmit(handelLogin)} >
                <fieldset className="fieldset ">
                    <h3 className='text-3xl font-bold text-center'>Welcome Back</h3>
                    <p className='text-center mb-5'>Login with ZapShift</p>
                    {/* email */}
                    <label className="label">Email</label>
                    <input type="email"
                        {...register('Email', {
                            required: true
                        })} className="input font-black border-sky-300 focus-within:outline-sky-300 focus-within:border-none" placeholder="Email" />
                    {
                        errors.Email?.type === "required" && <p className='text-red-500 font-bold'>Email is Required</p>
                    }
                    {/* password */}
                    <label className="label border-sky-300 focus-within:outline-sky-300 focus-within:border-none">Password</label>
                    <input type="password" {...register('Password', {
                        required: true,
                        minLength: 6,
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
                    })} className="input font-black border-sky-300 focus-within:outline-sky-300 focus-within:border-none" placeholder="Password" />
                    {
                        errors.Password?.type === "required" && <p className='text-red-500 font-bold'>Password is Required</p>
                    }
                    {
                        errors.Password?.type === "minLength" && <p className='text-red-500 font-bold'>Password not less then 6 digit</p>
                    }
                    {
                        errors.Password?.type === "pattern" && <p className='text-red-500 font-bold'>Password must have at least one uppercase letter, at least one lowercase letter,<br /> at least one number,  and at least one special character</p>
                    }
                    <div><a className="link link-hover text-gray-700 hover:font-bold">Forgot password?</a></div>

                    <button className="btn btn-primary text-black font-bold mt-4 ">Login</button>
                    <p className='mt-2 text-center'>New to Zap Shift <Link to='/regiester' className='ml-1 link link-hover text-blue-500 hover:font-bold'>Register</Link></p>
                </fieldset>
            </form>
            <SocalLogin></SocalLogin>
        </div>
    );
};

export default Login;