import React, { Component } from 'react';
import classes from './Contact.module.css';
import Button from 'react-bootstrap/Button';

class Contact extends Component  {

    sentEmail = () => {
        
    };


    render(){
        return(
            <div className={classes.Contact}>
                <h1 className={classes.ContactTitle}>
                    Contact Me!
                </h1>
    
                <ul className={classes.ContactList}>
                    <li>Web application Development</li><br/>
                    <li>Mobile application Development</li><br/>
                    <li>Freelance development</li><br/>
                    <li>Website updates</li><br/>
                    <li>Database maintanence</li><br/>
                </ul>
    
                <input placeholder={'Email'} className={classes.InputMargin}/><br/>
                <input placeholder={'Subject'} className={classes.InputMargin}/><br/>
                <textarea placeholder={'Message'} className={classes.InputMargin}/><br/>
                <Button>Send</Button>
            </div>
        );
    }


};

export default Contact;