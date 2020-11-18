import React from 'react';
import classes from './Bubble.module.css';

const bubble = (props) => {

    let style = [classes.Bubble];

    switch(props.number){
        case(1):
            style.push(classes.One);
            break;
         case(2):
            style.push(classes.Two);
            break;
        case(3):
            style.push(classes.Three);
            break;
        case(4):
            style.push(classes.Four);
            break;
        case(5):
            style.push(classes.Five);
            break;
        case(6):
            style.push(classes.Six);
            break;
        default:
            break;
    }

    if(props.white){
        style.push(classes.White);
    }

    if(props.black){
        style.push(classes.Black);
    }

    return(
        <div className={style.join(' ')}>
            {props.children}
        </div>
    );

};

export default bubble;