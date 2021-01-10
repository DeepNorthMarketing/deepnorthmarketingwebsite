import React from 'react';

import './Form.css';

function Form() {
    return (
        <form className="contact-form">
            <input type='text' name='firstName' placeholder='First Name' />
            <input type='text' name='lastName' placeholder='Last Name' />
            <input type='email' name='email' placeholder='Email'/>
            <input type='tel' name='phone' placeholder='Phone' />
            <textarea name='message' rows="5" cols="39" placeholder='Message' />
            <button>SEND IT!</button>
        </form>
    );
}

export default Form;
