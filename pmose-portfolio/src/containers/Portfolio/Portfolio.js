import React, { Component } from 'react';
import logo from '../../assets/images/portfolio.png';
import Divide from '../../hoc/Divide/Divide';
import Adj from '../../hoc/Adj/Adj';
import classes from './Portfolio.module.css';

class Portfolio extends Component {


    render(){
        return(
            <Adj>
                <div className={classes.Left}>I'm on the left</div>
                <div className={classes.Right}>I'm on the right</div>                
                <div className={classes.Left}>I'm on the left</div>
                <div className={classes.Right}>I'm on the right</div>
                <div className={classes.Bubble}>Bubble</div>
                <div className={classes.Bubble2}>Bubble 2</div>
            </Adj>

        );
    }
}

export default Portfolio;