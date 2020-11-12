import React, { Component } from 'react';
import classes from './Projects.module.css';
import PCarousel from '../../../components/UI/PCarousel/Pcarousel';
import CarouselDescription from '../../../components/UI/CarouselDescription/CarouselDescription';


import marsRover from '../../../assets/images/mars_rover.jpg';
import cpuArch from '../../../assets/images/cpu_project.jpg'; 
import camera from '../../../assets/images/camera_project_target.png';


const PROJECTS = [
    {
        title: 'Mars Rover',
        image: marsRover,
        black: true,
        description: 'The objective of the mars rover project was to program a robot to traverse a dangerous environment autonomously. The iRobot Create that we were supplied with was customized with an arduino Atmel ATmega 128 microprocessor. By compartmental implementing sensors that the microprocessor could access, we slowly increased the ability of the robot. When we had full control of the robot was when we started writing software to control it without looking where we were going. Using the sensors we were able to navigate the course successfully and eventually have the robot reach the checkpoint autonomously. While doing the project I learned embedded systems design, project management, embedded C programming, and basic microprocessor implementation.'
    },
    {
        title: 'CPU Pipeline',
        image: cpuArch,
        black: true,
        description: 'During this project I learned how to program with VHDL, avoid pipeline hazards, how to effectively write MIPS 32 assembly and implement various CPU components (i.e. ALU, Control Unit). By implementing this processor in VHDL we were able to test weather we could run assembly code correctly in simulations. Using wave forms of signals and virtual instantiates of the registers and a computer\'s memory we could watch the processor execute assembly and C code step-by-step. Learning how a pipeline processor works is an important topic because it is far more efficient than just a single cycle. The purpose of this project was to implement the pipeline, experience  errors and learn to overcome them with more robust logic.',
    },
    {
        title: 'Digital Camera Processing',
        image: camera,
        black: false,
        description: 'While taking embedded systems 2 we designed a digital camera that displayed via HDMI to a monitor. The hardware portion of this project consisted of connecting a vdma, video timing clock and video out modules in order to set up the correct connections. While writing the software that programmed the system we learned about rgb to YCrCb conversion as well as outputting 4:2:2 format YCrCb. We also learned about how frame buffers work and in what ways the vdma can allow us to access that memory efficiently.',
    }
];

class Projects extends Component {

    state = {
        currentProject: PROJECTS[0] 
    };

    handleSlide = (index) => {
        this.setState({currentProject: PROJECTS[index]});
    };


    render(){

        const projects = [
            {
                title: 'Mars Rover',
                image: marsRover,
                black: true
            },
            {
                title: 'CPU Pipeline',
                image: cpuArch,
                black: true
            },
            {
                title: 'Digital Camera Processing',
                image: camera,
                black: false
            }
        ];
    
        return (
    
            <div className={classes.Projects}>
                <h1 className={classes.ProjectTitle}>
                    Projects
                </h1>
    
                <div className={classes.ProjectCarousel}>
                    <PCarousel interval={6000} slide={this.handleSlide} items={PROJECTS}/>
                </div>
                <CarouselDescription 
                    title={this.state.currentProject.title}
                    description={this.state.currentProject.description}
                />
            </div>
    
        );

    }


};

export default Projects;