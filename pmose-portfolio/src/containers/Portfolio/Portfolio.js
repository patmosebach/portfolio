import React, { Component } from 'react';
import logo from '../../assets/images/portfolio.png';


import Intro from './Intro/Intro';
import SkillLinks from './SkillLinks/SkillLinks';
import Projects from './Projects/Projects';
import Travel from './Travel/Travel';
import Contact from './Contact/Contact';

import Divide from '../../hoc/Divide/Divide';
import Adj from '../../hoc/Adj/Adj';
import classes from './Portfolio.module.css';
import Image from 'react-bootstrap/Image';
import Bubble from '../../components/Bubble/Bubble';

class Portfolio extends Component {

    render(){



        return(
            <Adj>
                <Divide white>
                    <Intro/>
                </Divide>

                <Divide black>
                    <SkillLinks/>
                </Divide>

                <Divide white> 
                    <Projects/>
                </Divide>
                <Divide black>
                    <Travel/>
                </Divide>
                <Divide white>
                    <Contact/>
                </Divide>
                <Divide black>
                    <iframe title="resume" style={{margin: '5% 0% 0% 28%', height: '88%', width: '65%'}} src="https://docs.google.com/viewer?srcid=12gM40HveAqWq2vB6ZsfwUGLdrZ74XCkP&pid=explorer&efh=false&a=v&chrome=false&embedded=true" ></iframe>
                </Divide>


                <Bubble number={1} white>
                    <Image className={ classes.BubbleImage }fluid roundedCircle src={logo}></Image>
                </Bubble>
                <Bubble number={2} black>
                    <div className={classes.WhiteCircle}/>
                </Bubble>
                <Bubble number={3} white>
                    <div className={classes.BlackCircle}/>
                </Bubble>
                <Bubble number={4} black>
                    <div className={classes.WhiteCircle}/>
                </Bubble>
                <Bubble number={5} white>
                    <div className={classes.BlackCircle}/>
                </Bubble>
                <Bubble number={6} black>
                    <div className={classes.WhiteCircle}/>
                </Bubble>
            </Adj>

        );
    }
}

export default Portfolio;