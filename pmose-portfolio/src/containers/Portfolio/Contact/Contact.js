import React, { Component } from 'react';
import classes from './Contact.module.css';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';


class Contact extends Component  {

    constructor(){
        super();

        emailjs.init("user_NCQi93r4LPgHD8dtuU90d");
    }

    state = {
        email: '',
        subject: '',
        message: ''
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value})
    }

    handleSend = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_5lafehf', 'template_ucqiqz7', event.target, 'user_NCQi93r4LPgHD8dtuU90d')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }


    render(){
        return(
            <div className={classes.Contact}>
                <h1 className={classes.ContactTitle}>
                    Contact Me!
                </h1>
    
                <ul className={classes.ContactList}>
                    <li>Web Applications</li><br/>
                    <li>Mobile Applications</li><br/>
                    <li>Application Ideas</li><br/>
                    <li>Freelance Gigs</li><br/>
                </ul>
                <form name="contactForm" onSubmit={this.handleSend} className={classes.EmailForm}>
                    <input name="from_name" placeholder={'Name'} className={classes.InputMargin}/><br/>
                    <input name="from_email" placeholder={'Email'} className={classes.InputMargin}/><br/>
                    <textarea name="message"  placeholder={'Message'} className={classes.MessageBody}/><br/>
                    <Button type="submit" value="Send">Send</Button>
                </form>

            </div>
        );
    }


};

export default Contact;