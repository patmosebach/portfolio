import React from 'react';
import Adj from '../../../hoc/Adj/Adj';
import classes from './Intro.module.css';
import Logo from '../../../components/UI/Logo/Logo';
import Image from 'react-bootstrap/Image';

import { ReactComponent as TmLogo } from '../../../assets/images/ticketmaster.svg';
import { ReactComponent as IsuLogo } from '../../../assets/images/isu.svg'
import selfPic from '../../../assets/images/portfolio.png';
import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';

const intro = (props) => {

    const description = 'Proven experience at Ticketmaster working on web applications. Looking to build upon these experiences with freelance and consulting opportunities and personal projects.';

    const tmLink = "https://www.ticketmaster.com/";
    const isuLink = "https://www.iastate.edu/";

    return(
        <Adj>
            <Image className={ classes.SelfPicture }fluid roundedCircle src={selfPic}></Image>
            <div className={classes.Intro}>
                Patrick Mosebach is a <span>full stack engineer</span> with a passion for making scalable solutions.
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
                <div className={classes.BottomDate}>2013  -  2017</div>
            </div>
        </Adj>
    );



};

export default intro;