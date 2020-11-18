import React from 'react';
import classes from './CarouselDescription.module.css';

const carouselDescription = (props) => {

    return( 
        <div className={classes.CarouselDescription}>
            <h3>
                {props.title}
            </h3>
            <div className={classes.Description}>
                {props.description}
            </div>
        </div>

    );

};

export default carouselDescription;