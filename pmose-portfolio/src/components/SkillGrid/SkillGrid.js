import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './SkillGrid.module.css';

//Logos
import { ReactComponent as Angular } from '../../assets/images/angular.svg';
import { ReactComponent as Aws } from '../../assets/images/aws.svg';
import { ReactComponent as CSharp } from '../../assets/images/csharp.svg';
import { ReactComponent as Git } from '../../assets/images/git.svg';
import { ReactComponent as Octopus } from '../../assets/images/octopus.svg';
import { ReactComponent as ReactLogo } from '../../assets/images/react.svg';
import { ReactComponent as Sql } from '../../assets/images/sql.svg';
import { ReactComponent as Java } from '../../assets/images/java.svg';

const skillGrid = (props) => (

    <Container  className={classes.SkillGrid}>
        <Row className="justify-content-lg-center">
            <Col md={{ span: 2, offset: 2 }}>
                <Angular/>
            </Col>
            <Col md={{ span: 2 }}>
                <Aws/>
            </Col>
            <Col md={{ span: 2 }}>
                <CSharp/>
            </Col>
            <Col md={{ span: 2 }}>
                <Git/>
            </Col>
        </Row>
        <Row md={{offset:4}} className="justify-content-md-center">
            <Col md={{ span: 2, offset: 2 }}>
                <Octopus/>
            </Col>
            <Col md={{ span: 2 }}>
                <ReactLogo/>
            </Col>
            <Col md={{ span: 2 }}>
                <Sql/>
            </Col>
            <Col md={{ span: 2 }}>
                <Java/>
            </Col>
        </Row>
    </Container>

);

export default skillGrid;