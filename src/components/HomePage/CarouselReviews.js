import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

import './CarouselReviews.css';

export default class CaroselReviews extends Component {
  render() {
    return (
    <div className='car-r-bg' id='reviews'>
      <Carousel>
        <Carousel.Item  className='car-r-bg car-r-bg-img1'>
            <Carousel.Caption  className="carousel-caption d-flex flex-column justify-content-center h-100">
                <div className='rev-bl'>
                    <h3>“Have customers review you and share what they had to say. Click to edit and add their testimonial.”</h3>
                    <p>Alexa Young, CA</p>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='car-r-bg car-r-bg-img2'>
          <Carousel.Caption  className="carousel-caption d-flex flex-column justify-content-center h-100">
                <div className='rev-bl'>
                    <h3>“Have customers review you and share what they had to say. Click to edit and add their testimonial.”</h3>
                    <p>Alexa Young, CA</p>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='car-r-bg car-r-bg-img3'>
          <Carousel.Caption  className="carousel-caption d-flex flex-column justify-content-center h-100">
                <div className='rev-bl'>
                    <h3>“Have customers review you and share what they had to say. Click to edit and add their testimonial.”</h3>
                    <p>Alexa Young, CA</p>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='car-r-bg car-r-bg-img4'>
          <Carousel.Caption  className="carousel-caption d-flex flex-column justify-content-center h-100">
                <div className='rev-bl'>
                    <h3>“Have customers review you and share what they had to say. Click to edit and add their testimonial.”</h3>
                    <p>Alexa Young, CA</p>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    )
  }
}
