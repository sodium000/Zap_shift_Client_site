import React from 'react';
import Banner from '../Banner/Banner';
import HowWork from '../HowWork/HowWork';
import Services from '../Service/Services';
import Brand from '../Brand/Brand';
import Review from '../Brand/Review/Review';
import Support from '../support/Support';
import Merchent from '../Merchent/Merchent';

const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowWork></HowWork>
            <Services></Services>
            <Brand></Brand>
            <div className=' border-dashed border broder-t my-20 border-gray-500'></div>
            <Support></Support>
            <div className=' border-dashed border broder-t my-20 border-gray-500'></div>
            <Merchent></Merchent>
            <Review reviewsPromise={reviewsPromise}></Review>
        </div>
    );
};

export default Home;