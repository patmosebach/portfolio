import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './SkillGrid.module.css';
import Logo from '../UI/Logo/Logo';

//Logos
import { ReactComponent as Angular } from '../../assets/images/angular.svg';
import { ReactComponent as Aws } from '../../assets/images/aws.svg';
import { ReactComponent as CSharp } from '../../assets/images/csharp.svg';
import { ReactComponent as Git } from '../../assets/images/git.svg';
import { ReactComponent as Octopus } from '../../assets/images/octopus.svg';
import { ReactComponent as ReactLogo } from '../../assets/images/react.svg';
import { ReactComponent as Sql } from '../../assets/images/sql.svg';
import { ReactComponent as Java } from '../../assets/images/java.svg';

const skillGrid = (props) => {

    
    const reactLink = 'https://reactjs.org/';
    const cSharpLink = 'https://dotnet.microsoft.com/';
    const angularLink = 'https://angularjs.org/';
    const sqlLink = 'https://www.microsoft.com/en-us/sql-server';
    const javaLink = 'https://www.java.com/en/';
    const awsLink = 'https://aws.amazon.com/?nc2=h_lg';
    const gitLink = 'https://git-scm.com/';
    const octopusLink = 'https://octopus.com/';

    return(
        <Container  className={classes.SkillGrid}>
            <Row className="justify-content-lg-center">
                <Col md={{ span: 2, offset: 2 }}>
                    <Logo link={reactLink} mouseOver={() => props.mouseOver('react')} mouseLeave={() => props.mouseLeave()}>
                        <ReactLogo className={classes.Blue} />
                    </Logo>
                </Col>
                <Col md={{ span: 2 }}>
                    <Logo link={cSharpLink} mouseOver={() => props.mouseOver('cSharp')} mouseLeave={() => props.mouseLeave()}>
                        <CSharp className={classes.Purple}/>
                    </Logo>
                </Col>
                <Col md={{ span: 2 }}>
                    <Logo link={angularLink} mouseOver={() => props.mouseOver('angular')} mouseLeave={() => props.mouseLeave()}>
                        <Angular className={classes.Red}/>
                    </Logo>
                </Col>
                <Col md={{ span: 2 }}>
                    <Logo link={sqlLink} mouseOver={() => props.mouseOver('sql')} mouseLeave={() => props.mouseLeave()}>
                        <Sql className={classes.Grey}/>
                    </Logo>
                </Col>
            </Row>
            <Row md={{offset:4}} className="justify-content-md-center">
                <Col md={{ span: 2, offset: 2 }}>
                    <Logo link={javaLink} mouseOver={() => props.mouseOver('java')} mouseLeave={() => props.mouseLeave()}>
                        <Java className={classes.Scarlet}/>
                    </Logo>
                </Col>
                <Col md={{ span: 2 }}>
                    <Logo link={awsLink} mouseOver={() => props.mouseOver('aws')} mouseLeave={() => props.mouseLeave()}>
                        <Aws className={classes.Orange}/>
                    </Logo>
                </Col>
                <Col md={{ span: 2 }}>
                    <Logo link={gitLink} mouseOver={() => props.mouseOver('git')} mouseLeave={() => props.mouseLeave()}>
                        <Git className={classes.Scarlet}/>
                    </Logo>
                </Col>
                <Col md={{ span: 2 }}>
                    <Logo link={octopusLink} mouseOver={() => props.mouseOver('octopus')} mouseLeave={() => props.mouseLeave()}>
                        <Octopus className={classes.Blue}/>
                    </Logo>
                </Col>
            </Row>
        </Container>

    );

};

export default skillGrid;