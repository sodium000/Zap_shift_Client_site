import React from 'react';
import amazon_vactor from '../../../assets/brands/amazon_vector.png'
import amazon from '../../../assets/brands/amazon.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstas from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import star_people from '../../../assets/brands/start_people.png'
import Marquee from 'react-fast-marquee';

const brand = [amazon_vactor, amazon, casio, moonstar, randstas, star, star_people]

const Brand = () => {
    return (
        <div className='mt-25 flex flex-col gap-10 justify-center items-center '>
            <div className='font-bold text-2xl text-secondary'>
                We've helped thousands of sales teams
            </div>
            <div className='flex gap-5 items-center max-w-7xl mx-auto'> 
                <Marquee
                 autoFill={true}
                 >
                    {
                        brand.map((logo,index)=><div className='mx-10 flex items-center' key={index}><img src={logo} alt="" /></div>)
                    }
                </Marquee>
            </div>
        </div>
    );
};

export default Brand;