import React from 'react';
import liveLOgo from '../../../assets/live-tracking.png'    
import safeDel from '../../../assets/tiny-deliveryman.png'    
import callsupport from '../../../assets/safe-delivery.png'    

const Support = () => {
    return (
        <div className='flex flex-col gap-10  my-30'>
            <div className='grid grid-cols-12 justify-center items-center rounded-2xl ' >
                <div className='col-span-2 '>
                    <img src={liveLOgo} alt=""  className='ml-10'/>
                </div>
                {/* divider */}
                <div className='col-span-2  justify-self-center'>
                    <div className="h-40 border-l border-dashed border-gray-700"></div>
                </div>
                {/* text */}
                <div className='col-span-8'>
                    <h3 className='text-2xl font-bold mb-5'>Live Parcel Tracking</h3>
                    <p>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
                </div>
            </div>

            <div className='grid grid-cols-12 justify-center items-center rounded-2xl' >
                <div className='col-span-2 '>
                    <img src={safeDel} alt="" />
                </div>
                {/* divider */}
                <div className='col-span-2  justify-self-center'>
                    <div className="h-40 border-l border-dashed border-gray-700"></div>
                </div>
                {/* text */}
                <div className='col-span-8'>
                    <h3 className='text-2xl font-bold mb-5'>24/7 Call Center Support</h3>
                    <p>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
                </div>
            </div>

            <div className='grid grid-cols-12 justify-center items-center rounded-2xl' >
                <div className='col-span-2 '>
                    <img src={callsupport} alt="" className='ml-10'/>
                </div>
                {/* divider */}
                <div className='col-span-2  justify-self-center'>
                    <div className="h-40 border-l border-dashed border-gray-700"></div>
                </div>
                {/* text */}
                <div className='col-span-8'>
                    <h3 className='text-2xl font-bold mb-5'>Live Parcel Tracking</h3>
                    <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
        </div>
    );
};

export default Support;