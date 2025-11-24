import React from 'react';
import Delivery_logo from '../../../assets/bookingIcon.png'

const HowWork = () => {
    return (
        <div className='mt-40 px-15 flex flex-col gap-10'>
            <div className='font-bold text-2xl'>
                How it Works
            </div>
            <div className='grid grid-cols-4  gap-6  '>
                <div className=' p-5 flex flex-col gap-3 rounded-2xl '>
                    <div>
                        <img src={Delivery_logo} alt="" />
                    </div>
                    <div className='font-semibold'>
                        Booking Pick & Drop
                    </div>
                    <div>
                        From personal packages to business shipments — we deliver on time, every time.
                    </div>
                </div>
                <div className=' p-5 flex flex-col gap-3 rounded-2xl'>
                    <div>
                        <img src={Delivery_logo} alt="" />
                    </div>
                    <div className='font-semibold'>
                        Cash On Delivery
                    </div>
                    <div>
                        From personal packages to business shipments — we deliver on time, every time.
                    </div>
                </div>
                <div className=' p-5 flex flex-col gap-3 rounded-2xl'>
                    <div>
                        <img src={Delivery_logo} alt="" />
                    </div>
                    <div className='font-semibold'>
                        Delivery Hub
                    </div>
                    <div>
                        From personal packages to business shipments — we deliver on time, every time.
                    </div>
                </div>
                <div className=' p-5 flex flex-col gap-3 rounded-2xl'>
                    <div>
                        <img src={Delivery_logo} alt="" />
                    </div>
                    <div className='font-semibold'>
                        Booking SME & Corporate
                    </div>
                    <div>
                        From personal packages to business shipments — we deliver on time, every time.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWork;