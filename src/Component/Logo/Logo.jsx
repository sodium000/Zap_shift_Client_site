import React from 'react';

import logo from '../../assets/logo.png'

const Logo = () => {
    return (
        <div className='flex '>
            <img className='pb-1' src={logo} alt="" />
            <h3 className='text-3xl font-bold -ms-4 self-end'>ZapShift</h3>
        </div>
    );
};

export default Logo;