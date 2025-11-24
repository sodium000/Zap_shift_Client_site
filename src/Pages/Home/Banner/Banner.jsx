import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/banner/banner1.png'
import banner2 from '../../../assets/banner/banner2.png'
import banner3 from '../../../assets/banner/banner3.png'
import BannerButton from '../../../Component/BannerButton/BannerButton';



const Banner = () => {
    return (
        <Carousel

            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            showArrows={false}
        // transitionTime= 1000
        >
            <div className='relative'>
                <img src={banner1} />
                <BannerButton></BannerButton>
            </div>
            <div className='relative'> 
                <img src={banner2} />
                <BannerButton></BannerButton>
            </div>
            <div className='relative'>
                <img src={banner3} />
                <BannerButton></BannerButton>
                </div>
        </Carousel>
    );
};

export default Banner;