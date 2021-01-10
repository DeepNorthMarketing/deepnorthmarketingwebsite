import React from 'react';

import Form from '../components/Form/Form';
import './Contact.css';
const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-text'>
                <h2>Connect with us!</h2>
                <p>
                    We love watching the companies we work with grow. Working with Deep North is not just a one time transaction. It's a partnership and one that we are excited 
                    to see grow.
                </p>
                <p>Fill out this form or shoot us an email. We can't wait to start working with you!</p>
            </div>
            <div className='form'>
                <Form />
            </div>
        </div>
    )
}

export default Contact;