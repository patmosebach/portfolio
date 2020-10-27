import React, { Component } from 'react';
import logo from '../../assets/images/portfolio.png';
import { ReactComponent as TmLogo } from '../../assets/images/ticketmaster.svg';
import { ReactComponent as IsuLogo } from '../../assets/images/isu.svg'
import tmLogo from '../../assets/images/ticketmaster.svg';
import isuLogo from '../../assets/images/iowa-state-grey.png';
import Divide from '../../hoc/Divide/Divide';
import Adj from '../../hoc/Adj/Adj';
import classes from './Portfolio.module.css';
import Image from 'react-bootstrap/Image';
import Bubble from '../../components/Bubble/Bubble';

class Portfolio extends Component {


    render(){

        const intro = 'Patrick Mosebach is a full stack engineer with a passion for making scalable solutions.';
        const description = 'Proven experience at Ticketmaster working on web applications the quick brown fox jumped over the lazy dog';

        return(
            <Adj>
                <Divide white>
                    <div className={classes.Intro}>
                        Patrick Mosebach is a <a>full stack engineer</a> with a passion for making scalable solutions.
                    </div>
                    <div className={classes.Description}>
                        {description}
                    </div>
                    <div className={classes.WorkPlaces}>
                        <a href="https://www.ticketmaster.com/" target="_blank">
                            <TmLogo className={classes.TmLogo}></TmLogo>
                        </a>
                        <div>2018  -  2020</div>
                        <a href="https://www.iastate.edu/" target="_blank">
                            <IsuLogo className={classes.IsuLogo}></IsuLogo>
                        </a>
                        <div>2013  -  2017</div>
                    </div>
                </Divide>
                <Divide black>
                    
                </Divide>
                <Divide white> I'm on the left?</Divide>
                <Divide black> I'm on the right</Divide>


                <Bubble number={1} white>
                    <Image className={ classes.BubbleImage }fluid roundedCircle src={logo}></Image>
                </Bubble>
                <Bubble number={2} black>
                    <div className={classes.Circle}/>
                </Bubble>
                <Bubble number={3} white>three</Bubble>
                <Bubble number={4} black>four</Bubble>
            </Adj>

        );
    }
}

export default Portfolio;