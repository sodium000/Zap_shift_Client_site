import React from 'react';
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const BannerButton = () => {
    return (
        <>
            <div className="absolute bottom-17 left-10 flex items-center gap-4 ">
                <div className='flex min-h-6 items-center'>
                    <div className='bg-primary rounded-4xl'>
                        <button className='text-xl font-bold p-3'>Track Your Parcel</button>
                    </div>
                    <div className="rounded-full  flex items-center justify-center bg-primary">
                        <BsArrowUpRightCircleFill size={40} />
                    </div>
                </div>
                <div className='border font-semibold rounded-2xl border-gray-300 text-xl p-3'>
                    Be A Rider
                </div>
            </div>
        </>
    );
};

export default BannerButton;