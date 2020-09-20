import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Artist1 from '../album_image/album_banner_3.jpg'
import Artist2 from '../../artist_image/album_banner_5.jpg';
import Artist3 from '../../artist_image/album_banner_6.jpg';
import Artist4 from '../../artist_image/album_banner_1.jpg';
import Artist5 from '../../artist_image/album_banner_4.jpg';
import './Carousel.css';

function HomepageCarousel() {
  return (
    <Carousel interval="4000">
      <Carousel.Item>

        <img
          className="d-block w-100 carousel-img"
          src={Artist1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Online courses by superstars</h5>
          <h5>Nawazuddin Siddiqui</h5>
          <h6>Teaches Acting</h6>


        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={Artist2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Online courses by superstars</h5>
          <h5>Shaan</h5>
          <h6>Teaches Singing</h6>


        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>

        <img
          className="d-block w-100 carousel-img"
          src={Artist3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Online courses by superstars</h5>
          <h5>Sabira Merchant</h5>
          <h6>Teaches Communication Skills</h6>
        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={Artist4}
          alt="Forth slide"
        />
        <Carousel.Caption>
        <h5>Online courses by superstars</h5>
          <h5>Madhur Bhandarkar</h5>
          <h6>Teaches Direction</h6>        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>

        <img
          className="d-block w-100 carousel-img"
          src={Artist5}
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h5>Online courses by superstars</h5>
          <h5>Siddharth Prabhakar</h5>
          <h5>Teaches Business</h5>
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>

  );
}

export default HomepageCarousel;
