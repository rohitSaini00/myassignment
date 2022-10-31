import React from 'react'
import { Carousel } from 'react-bootstrap'
import { images } from "../../assest/images"
import "./style.scss"//style

const HeroSection = () => {
    return (
        <div className='app-hero-carousel pb-4'>
            <div className="hero-carousel">
                <Carousel>
                    <Carousel.Item interval={5000}>
                        <div className="carousel_img">
                            <img
                                className="d-block w-100 img-fluid"
                                src={images.silder_1}
                                alt="First slide"
                            />
                        </div>
                   </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <div className="carousel_img">
                            <img
                                className="d-block w-100 img-fluid"
                                src={images.silder2}
                                alt="First slide"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <div className="carousel_img">
                            <img
                                className="d-block w-100 img-fluid"
                                src={images.silder_3}
                                alt="First slide"
                            />
                        </div>
                        </Carousel.Item>
                </Carousel>
            </div>
            </div>
    )
}

export default HeroSection