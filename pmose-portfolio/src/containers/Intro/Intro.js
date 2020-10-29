import React from 'react';
import Adj from '../../hoc/Adj/Adj';
import classes from './Intro.module.css';
import Logo from '../../components/UI/Logo/Logo';

import { ReactComponent as TmLogo } from '../../assets/images/ticketmaster.svg';
import { ReactComponent as IsuLogo } from '../../assets/images/isu.svg'

const intro = (props) => {

    const description = 'Proven experience at Ticketmaster working on web applications the quick brown fox jumped over the lazy dog';

    const tmLink = "https://www.ticketmaster.com/";
    const isuLink = "https://www.iastate.edu/";

    return(
        <Adj>
            <div className={classes.Intro}>
                Patrick Mosebach is a <a>full stack engineer</a> with a passion for making scalable solutions.
            </div>
            <div className={classes.Description}>
                {description}
            </div>
            <div className={classes.WorkPlaces}>
                <Logo link={tmLink}>
                    <TmLogo className={classes.TmLogo}></TmLogo>
                </Logo>
                <div>2018  -  2020</div>
                <Logo link={isuLink}>
                    <IsuLogo className={classes.IsuLogo}></IsuLogo>
                </Logo>
                <div>2013  -  2017</div>
            </div>
        </Adj>
    );



};

export default intro;