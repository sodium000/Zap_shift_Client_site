import React from 'react';
import SerLogo from '../../../assets/service.png'

const Services = () => {
    return (
        <div className='mt-30 bg-secondary rounded-2xl'>
            <div className='px-20 py-30 flex flex-col gap-5  '>
                <div className='text-center text-white text-3xl font-bold'>
                    Our Services
                </div>
                <div className='text-center text-white'>
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.
                </div>
                <div className='grid grid-cols-3 gap-5 mt-6 text-center '>
                    <div className='flex flex-col gap-5 items-center  px-5 py-15 rounded-2xl bg-white hover:bg-primary'>
                        <div><img src={SerLogo} alt="" className=' rounded-full' /></div>
                        <div className='font-bold text-xl text-secondary'>Express  & Standard Delivery</div>
                        <div>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</div>
                    </div>
                    <div className='flex flex-col gap-5 items-center  px-5 py-15 rounded-2xl bg-white hover:bg-primary'>
                        <div><img src={SerLogo} alt="" className=' rounded-full' /></div>
                        <div className='font-bold text-xl text-secondary'>Nationwide Delivery</div>
                        <div>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</div>
                    </div>
                    <div className='flex flex-col gap-5 items-center  px-5 py-15 rounded-2xl bg-white hover:bg-primary'>
                        <div><img src={SerLogo} alt="" className=' rounded-full' /></div>
                        <div className='font-bold text-xl text-secondary'>Fulfillment Solution</div>
                        <div>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</div>
                    </div>
                    <div className='flex flex-col gap-5 items-center  px-5 py-15 rounded-2xl bg-white hover:bg-primary'>
                        <div><img src={SerLogo} alt="" className=' rounded-full' /></div>
                        <div className='font-bold text-xl text-secondary'>Cash on Home Delivery</div>
                        <div>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</div>
                    </div>
                    <div className='flex flex-col gap-5 items-center  px-5 py-15 rounded-2xl bg-white hover:bg-primary'>
                        <div><img src={SerLogo} alt="" className=' rounded-full' /></div>
                        <div className='font-bold text-xl text-secondary'>Corporate Service / Contract In Logistics</div>
                        <div>Customized corporate services which includes warehouse and inventory management support.</div>
                    </div>
                    <div className='flex flex-col gap-5 items-center  px-5 py-15  rounded-2xl bg-white hover:bg-primary'>
                        <div><img src={SerLogo} alt="" className=' rounded-full' /></div>
                        <div className='font-bold text-xl text-secondary'>Parcel Return</div>
                        <div>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;