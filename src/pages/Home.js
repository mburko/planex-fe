import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeHeader from '../components/HomePage/HomeHeader';
import AboutUs from '../components/HomePage/AboutUs';
import CarouselReviews from '../components/HomePage/CarouselReviews';
import FooterHome from '../components/HomePage/FooterHome';
import MainHome from '../components/HomePage/MainHome';
import PlanexFunctions from '../components/HomePage/PlanexFunctions';

export default class Home extends Component {
  render() {
    return (
      <div>
      <HomeHeader/>
      <main>
        <MainHome/>
        <PlanexFunctions/>
        <AboutUs/>
        <CarouselReviews/>
        <FooterHome/>
    
      </main>
      
      </div>
    );
  }
}

