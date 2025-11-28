
import React from 'react';
import merchentLogo from '../../../assets/location-merchant.png'

const Merchent = () => {
    return (
        <div>
            <section className="w-full  bg-[#003233] text-white rounded-3xl  md:p-16 flex flex-col md:flex-row items-center justify-between gap-5">
                <div className="space-y-6 relative left-15 ">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                        Merchant and Customer Satisfaction <br />
                        is Our First Priority
                    </h1>

                    <p className="text-gray-200 max-w-130">
                        We offer the lowest delivery charge with the highest value along with
                        100% safety of your product. Pathao courier delivers your parcels in every
                        corner of Bangladesh right on time.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 ">
                        <button className="px-6 py-3 cursor-pointer  bg-[#C6FF80] text-[#003233] font-semibold rounded-full shadow-md">
                            Become a Merchant
                        </button>

                        <button className="px-6 py-3 cursor-pointer bg-transparent border border-[#C6FF80] text-[#C6FF80] font-semibold rounded-full">
                            Earn with ZapShift Courier
                        </button>
                    </div>
                </div>


                <div className="flex justify-center relative right-15 ">
                    <img
                        src={merchentLogo}
                        alt="courier-box"
                        className="max-w-xs md:max-w-md"
                    />
                </div>
            </section>
        </div>
    );
};

export default Merchent;