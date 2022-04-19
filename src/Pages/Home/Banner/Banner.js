import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (

        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Here Mr.Fixer Man always ready for you </h3>
                    <p>“I couldn't have been happier with the service I received from Steve Weber when he came to fix my stove! He was professional, courteous, and on time. I will for sure use them again for any of my appliance needs. I plan on telling my neighbors about this won”
                        - Nancy R.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>My Vision</h3>
                    <p>To be the appliance service leader renowned for integrity and dependability.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>My Mission</h3>
                    <p>
                    To create encore experiences that customers can't wait to share with others.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}



export default Banner;