import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import classes from './PCarousel.module.css';

const pCarousel = (props) => (
    <Carousel interval={props.interval} onSelect={props.slide} >
        {props.items.map(item => 
        {
            return <Carousel.Item>
                <img
                className="d-block w-100"
                src={item.image}
                alt="First slide"
                />
                <Carousel.Caption className={item.black ? classes.BlackCaption : null}>
                </Carousel.Caption>
            </Carousel.Item>
        })}
    </Carousel>


);

export default pCarousel;