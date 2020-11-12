import React, { Component } from 'react';
import classes from './Travel.module.css';
import PCarousel from '../../../components/UI/PCarousel/Pcarousel';
import CarouselDescription from '../../../components/UI/CarouselDescription/CarouselDescription';

import canyonlandsTrail from '../../../assets/images/Canyonlands_Trail.png';
import canyonlands from '../../../assets/images/Canyonlands.png';
import sawtoothTrail from '../../../assets/images/Sawtooth_Trail.png';
import sawtooth from '../../../assets/images/Sawtooth.png';
import tetonsTrail from '../../../assets/images/Tetons_Trail.png';
import tetons from '../../../assets/images/Tetons_2.jpg';
import windRiverTrail from '../../../assets/images/WindRiver_Trail.png';
import windRiver from '../../../assets/images/WindRiver.png';

const PROJECTS = [
    {
        title: 'Canyonlands 2017',
        image: canyonlandsTrail,
        black: true,
        description: 'The objective of the mars rover project was to program a robot to traverse a dangerous environment autonomously. The iRobot Create that we wercessor implementation.'
    },
    {
        title: 'Canyonlands 2017',
        image: canyonlands,
        black: true,
        description: 'During this project I learned how to program with VHDL, avoid pipeline hazards, how to effectively write MIPS 32 assembly and implement various CPU components (i.e. ALU, Control Unit). By implementing this processor in VHDL we were able to test weather we could run assembly code correctly in simulations. Using wave forms of signals and virtual instantiates of the registers and a computer\'s memory we could watch the processor execute assembly and C code step-by-step. Learning how a pipeline processor works is an important topic because it is far more efficient than just a single cycle. The purpose of this project wa',
    },
    {
        title: 'Sawtooth 2020',
        image: sawtoothTrail,
        black: false,
        description: 'While taking embedded systems 2 we designed a digital camera that displayed via HDMI to a monitor. The hardware portion of this project consisted of connecting a vdma, video timing clock and video out modules in order to set up the correct connections. While writing the software that programmed the system we learned about rgb to YCrCb conversion as well as outputting 4:2:2 format YCrCb. We also learned about how frame buffers work and in what ways the vdma can allow us to access that memory efficiently.',
    },    {
        title: 'Sawtooth 2020',
        image: sawtooth,
        black: true,
        description: 'The objective of the mars rover project was to program a robot to traverse a dangerous environment autonomously. The iRobot Create that we were supplied with was customized with an arduino Atmel ATmega 128 microprocessor. By compartmental implementing sensors that the microprocessor could access, we slowly increased the ability of the robot. When we had full control of the robot was when we started writing software to control it without looking where we were going. Using the sensors we were able to navigate the course successfully and eventually have the robot reach the checkpoint autonomously. While doing the project'
    },
    {
        title: 'Grand Tetons 2016',
        image: tetonsTrail,
        black: true,
        description: 'During this project I learned how to program with VHDL, avoid pipeline hazards, how to effectively write MIPS 32 assembly and implement various CPU components (i.e. ALU, Control Unit). By implementing this processor in VHDL we were able to test weather we could run assembly code correctly in simulations. Using wave forms of signals and virtual instantiates of the registers and a computer\'s memory we could watch the processor execute assembly and C code step-by-step. Learning how a pipeline processor works is an important topic because it is far more efficient than just a single cycle. The purpose of this pro',
    },
    {
        title: 'Grand Tetons 2016',
        image: tetons,
        black: false,
        description: 'While taking embedded systems 2 we designed a digital camera that displayed via HDMI to a monitor. The hardware portion of this project consisted of connecting a vdma, video timing clock and video out modules in order to set up the correct connections. While writing the software that programmed the system we learned about rgb to YCrCb conversion as well as outputting 4:2:2 format YCrCb. We also learned about how frame buffers work and in what ways the vdma can allow us to access that memory efficiently.',
    },    {
        title: 'Wind River 2019',
        image: windRiverTrail,
        black: true,
        description: 'The objective of the mars rover project was to program a robot to traverse a dangerous environment autonomously. The iRobot Create that we were supplied with was customized with an arduino Atmel ATmega 128 microprocessor. By compartmental implementing sensors that the microprocessor could access, we slowly increased the ability of the robot. When we had full control of the robot was when we started writing software to control it without looking where we were going. Using the sensors we were able to navigate the course successfully and eventually have the robot reach the checkpoint autonomously. While doin'
    },
    {
        title: 'Wind River 2019',
        image: windRiver,
        black: true,
        description: 'During this project I learned how to program with VHDL, avoid pipeline hazards, how to effectively write MIPS 32 assembly and implement various CPU components (i.e. ALU, Control Unit). By implementing this processor in VHDL we were able to test weather we could run assembly code correctly in simulations. Using wave forms of signals and virtual instantiates of the registers and a computer\'s memory we could watch the processor execute assembly and C code step-by-step. Learning how a pipeline processor works is an important topic because it is far more efficient than just a single cycle. The purpose of this project w.',
    }
];

class Travel extends Component {

    state = {
        currentProject: PROJECTS[0] 
    };

    handleSlide = (index) => {
        this.setState({currentProject: PROJECTS[index]});
    };

    render(){


        return(

            <div className={classes.Travel}>
                    <h1 className={classes.TravelTitle}>
                        Travel
                    </h1>
    
                    <div className={classes.TravelDescription}>
                        <CarouselDescription 
                            
                            title={this.state.currentProject.title}
                            description={this.state.currentProject.description}
                        />
                    </div>

    
                    <div className={classes.TravelCarousel}>
                        <PCarousel interval={8000} slide={this.handleSlide} items={PROJECTS}/>
                    </div>
    
            </div>
    
        );

    };
};

export default Travel;