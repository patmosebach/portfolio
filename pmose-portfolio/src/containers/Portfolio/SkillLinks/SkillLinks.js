import React, { Component } from 'react';
import Adj from '../../../hoc/Adj/Adj';
import classes from './SkillLinks.module.css';
import SkillGrid from '../../../components/SkillGrid/SkillGrid';
import Logo from '../../../components/UI/Logo/Logo';

import { ReactComponent as LinkedinLogo } from '../../../assets/images/linkedin.svg';
import { ReactComponent as GitHubLogo } from '../../../assets/images/github.svg';
import { ReactComponent as AngelLogo } from '../../../assets/images/angel.svg';

const SKILLS = {
    react: 'React, React Native, Javascript',
    cSharp: 'C# ASP.Net API and Console Development',
    angular: 'Angularjs Frontend Development',
    sql: 'Microsoft SQL Server, MySQL',
    java: 'Java Application and Console development',
    aws: 'AWS Deployment and Application Hosting',
    git: 'git, Agile Based Development in Team Settings',
    octopus: 'Octopus Autonomous Deployments and CICD'
};

class SkillLinks extends Component {

    state = {
        skillDescription: ''
    }

    skillHoverHandler = (skill) => {
        this.setState({skillDescription: SKILLS[skill]});
    }

    skillLeaveHandler = () => {
        this.setState({skillDescription: ''});
    }


    render(){

        const linkedinLink = 'https://www.linkedin.com/in/patrickmosebach/';
        const githubLink = 'https://github.com/patmosebach';
        const angelLink = 'https://angel.co/u/patrick-mosebach';
    
        return(
            <Adj className={classes.SkillLinks}>
                <div className={classes.Links}>
                    <Logo link={linkedinLink}>
                        <LinkedinLogo/>
                    </Logo>
                    <Logo link={githubLink}>
                        <GitHubLogo/>
                    </Logo>
                    <Logo link={angelLink}>
                        <AngelLogo/>
                    </Logo>
                </div>
                <div className={classes.Skills}>Skills</div>
                <SkillGrid mouseOver={this.skillHoverHandler} mouseLeave={this.skillLeaveHandler}/>
                <div className={classes.SkillDescription}>{this.state.skillDescription}</div>
            </Adj>
        )
    }
};


export default SkillLinks;