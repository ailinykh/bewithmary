import React from 'react';
import Navbar from '../navbar/navbar'
import Hero from '../hero/hero';
import Features from '../features/features';
import Services from '../services/services';
import Reviews from '../reviews/reviews';
import Education from '../education/education';
import Footer from '../footer/footer';
import './landing.scss';

export default () => <React.Fragment>
        <Navbar/>
        <Hero/>
        <Features/>
        <Services/>
        <Reviews/>
        <Education/>
        <Footer/>
    </React.Fragment>
