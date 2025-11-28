import React from 'react';

import logo from '../../assets/logo.png'
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to="/">
            <div className='flex '>
            <img className='pb-1' src={logo} alt="" />
            <h3 className='text-3xl font-bold -ms-4 self-end'>ZapShift</h3>
        </div>
        </Link>
    );
};

export default Logo;