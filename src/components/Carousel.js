import React from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Artist1 from '../album_image/album_banner_3.jpg'
import Artist2 from '../album_image/album_banner_5.jpg'
import Artist3 from '../album_image/album_banner_6.jpg'
import Artist4 from '../album_image/album_banner_1.jpg'
import Artist5 from '../album_image/album_banner_4.jpg'
import './Carousel.css';

function HomepageCarousel() {
  return (
    <Carousel interval="5000">
      <Carousel.Item>

        <img
          className="d-block w-100 carousel-img"
          src={Artist1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="title">
            <h3 className="online-course">Online courses by superstars</h3>

          </div>

          <div className="baner-text">

            <h2 className="actors-name" >Nawazuddin Siddiqui</h2>
            <h3>Teaches Acting</h3>
            <Link to="/login">
            <Button href="" style={{ marginRight: '15px' }} variant="outline-light">GET ALL COURSES</Button>

            <Button href="https://www.celebrityschool.in/nawazuddin-siddiqui-acting-classes" variant="outline-light">JOIN NOW</Button>

            </Link>
           
          </div>

        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={Artist2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="title">
            <h3 className="online-course">Online courses by superstars</h3>

          </div>
          <div className="baner-text">

            <h2 className="actors-name" >Shaan</h2>
            <h3>Teaches Singing</h3>
            <Link to="/login">
              <Button href="https://www.celebrityschool.in/shaan-singing-classes" style={{ marginRight: '15px' }} variant="outline-light">GET ALL COURSES</Button>
              <Button href="" variant="outline-light">JOIN NOW</Button>

            </Link>
          </div>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>

        <img
          className="d-block w-100 carousel-img"
          src={Artist3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className="title">
            <h3 className="online-course sab">Online courses by superstars</h3>

          </div>
          <div className="baner-text">

            <h2 className="actors-name" >Sabira Merchant</h2>
            <h3>Teaches Communication Skills</h3>
            <Link to="/login">
              <Button  href="" style={{ marginRight: '15px' }} variant="outline-light">GET ALL COURSES</Button>
              <Button href="https://www.celebrityschool.in/sabira-merchant-communication-skills-classes" variant="outline-light">JOIN NOW</Button>

            </Link>
          </div>
        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={Artist4}
          alt="Forth slide"
        />
        <Carousel.Caption>
          <div className="title">
            <h3 className="online-course">Online courses by superstars</h3>

          </div>
          <div className="baner-text">

            <h2 className="actors-name" >Madhur Bhandarkar</h2>
            <h3>Teaches Direction</h3>
            <Link to="/login">
            </Link>
            <Button style={{ marginRight: '15px' }} variant="outline-light">GET ALL COURSES</Button>

            <Button href="https://www.celebrityschool.in/madhur-bhandarkar-classes" variant="outline-light">JOIN NOW</Button>

          </div>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>

        <img
          className="d-block w-100 carousel-img"
          src={Artist5}
          alt="Fifth slide"
        />

        <Carousel.Caption>
          <div className="title">
            <h3 className="online-course">Online courses by superstars</h3>

          </div>
          <div className="baner-text">

            <h2 className="actors-name" >Siddharth Prabhakar</h2>


            <h3>Teaches Business</h3>
            <Link to="/login">
            </Link>
            <Button style={{ marginRight: '15px' }} variant="outline-light">GET ALL COURSES</Button>
            <Button href="https://www.celebrityschool.in/siddharth-prabhakar-business-classes" variant="outline-light">JOIN NOW</Button>

          </div>

        </Carousel.Caption>

      </Carousel.Item>


    </Carousel>



  );
}

export default HomepageCarousel;
