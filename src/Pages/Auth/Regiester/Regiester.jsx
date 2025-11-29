import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import SocalLogin from '../SocalLogin';
import axios from 'axios';

const Regiester = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { registerUser, Updateprofile } = useAuth();

    const handelRegiester = (data) => {
        const ProfilImage = data.Photo[0];

        registerUser(data.Email, data.Password)
            .then(result => {
                console.log(result.user);

                // storage imge url
                const fromData = new FormData()
                fromData.append('image', ProfilImage);

                const image_Api_Url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`

                axios.post(image_Api_Url, fromData)
                    .then(res => {
                        // update user profile
                        const UserProfile = {
                            displayName: data.Name,
                            photoURL: res.data.data.url
                        }

                        Updateprofile(UserProfile)
                    })
            })
            .catch(error => console.log(error))
    }
    
    return (
        <div className='mx-auto mt-10 max-w-[400px] '>
            <form onSubmit={handleSubmit(handelRegiester)} className='ml-20 mt-20'>
                <h3 className='text-3xl font-bold text-center'>Create an Account</h3>
                <p className='text-center mb-5'>Register with ZapShift</p>
                <fieldset className="fieldset ">

                    {/* Name */}
                    <label className="label">Full Name</label>
                    <input type="text" {...register('Name', {
                        required: true,
                        maxLength: 20
                    })} className="input  font-black border-sky-300 focus-within:outline-sky-300 focus-within:border-none " placeholder="User Name" />
                    {
                        errors.Name?.type === "required" && <p className='text-red-500 font-bold'>Name is Required</p>
                    }

                    {/* email */}
                    <label className="label">Email</label>
                    <input type="email" {...register('Email', {
                        required: true
                    })} className="input border-sky-300  font-black focus-within:outline-sky-300 focus-within:border-none" placeholder="Email" />
                    {
                        errors.Email?.type === "required" && <p className='text-red-500 font-bold'>Email is Required</p>
                    }

                    {/* photo url */}
                    <label className="label">Photo</label>
                    <input type="file" {...register('Photo', {
                        required: true
                    })} className="file-input border-sky-300  font-black focus-within:outline-sky-300 focus-within:border-none" placeholder="Your Photo" />
                    {
                        errors.Photo?.type === "required" && <p className='text-red-500 font-bold'>Photo is Required</p>
                    }

                    {/* password */}
                    <label className="label  border-sky-300 focus-within:outline-sky-300 focus-within:border-none">Password</label>
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

                    <button className="btn btn-primary text-black font-bold mt-4">Regiester</button>
                    <p className='mt-2'>Already Have a Zap Shift Account<Link to='/login' className='ml-1 link link-hover text-blue-500 hover:font-bold'>Sign In</Link></p>
                </fieldset>
            </form>
            <SocalLogin></SocalLogin>
        </div>
    );
};

export default Regiester;