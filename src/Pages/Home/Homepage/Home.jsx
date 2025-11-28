import React from 'react';
import Banner from '../Banner/Banner';
import HowWork from '../HowWork/HowWork';
import Services from '../Service/Services';
import Brand from '../Brand/Brand';
import Review from '../Brand/Review/Review';

const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HowWork></HowWork>
           <Services></Services>
           <Brand></Brand>
            <Review reviewsPromise={reviewsPromise}></Review>
        </div>
    );
};

export default Home;