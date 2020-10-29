import React, { Component } from 'react';
import logo from '../../assets/images/portfolio.png';

import { ReactComponent as LinkedinLogo } from '../../assets/images/linkedin.svg';
import { ReactComponent as GitHubLogo } from '../../assets/images/github.svg'
import { ReactComponent as AngelLogo } from '../../assets/images/angel.svg'

import SkillGrid from '../../components/SkillGrid/SkillGrid';

import Intro from '../Intro/Intro';

import Divide from '../../hoc/Divide/Divide';
import Adj from '../../hoc/Adj/Adj';
import classes from './Portfolio.module.css';
import Image from 'react-bootstrap/Image';
import Bubble from '../../components/Bubble/Bubble';
import Logo from '../../components/UI/Logo/Logo';

class Portfolio extends Component {


    render(){

        return(
            <Adj>
                <Divide white>
                    <Intro/>
                </Divide>

                <Divide black>
                    <div className={classes.Links}>
                        <Logo link="https://www.linkedin.com/in/patrickmosebach/">
                            <LinkedinLogo/>
                        </Logo>
                        <a href="https://github.com/patmosebach" target="_blank">
                            <GitHubLogo ></GitHubLogo>
                        </a>
                        <a href="https://angel.co/u/patrick-mosebach" target="_blank">
                            <AngelLogo ></AngelLogo>
                        </a>
                    </div>
                    <div className={classes.Skills}>Skills</div>
                    <SkillGrid/>
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