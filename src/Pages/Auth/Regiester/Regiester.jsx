import React from 'react';
import { useForm } from 'react-hook-form';

const Regiester = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handelRegiester = (data) => {
        console.log(data)

    }
    return (
        <div>
            <form onSubmit={handleSubmit(handelRegiester)}>
                <fieldset className="fieldset">

                    {/* Name */}
                    <label className="label">Full Name</label>
                    <input type="text" {...register('Name', {
                        required: true,
                        maxLength: 20
                    })} className="input border-sky-300 focus-within:outline-sky-300 focus-within:border-none" placeholder="Email" />
                    {
                        errors.Name?.type === "required" && <p className='text-red-500 font-bold'>Name is Required</p>
                    }

                    {/* email */}
                    <label className="label">Email</label>
                    <input type="email" {...register('Email', {
                        required: true
                    })} className="input border-sky-300 focus-within:outline-sky-300 focus-within:border-none" placeholder="Email" />
                    {
                        errors.Email?.type === "required" && <p className='text-red-500 font-bold'>Email is Required</p>
                    }
                    {/* password */}
                    <label className="label border-sky-300 focus-within:outline-sky-300 focus-within:border-none">Password</label>
                    <input type="password" {...register('Password', {
                        required: true,
                        minLength: 6,
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
                    })} className="input border-sky-300 focus-within:outline-sky-300 focus-within:border-none" placeholder="Password" />
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

                    <button className="btn btn-primary text-black font-bold mt-4 mx-auto">Login</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Regiester;