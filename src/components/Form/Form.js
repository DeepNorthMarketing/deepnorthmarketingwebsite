import React from 'react';

import './Form.css';

function Form() {
    return (
        <form className="contact-form">
            <label>
                <input type='text' name='firstName' placeholder='First Name' />
            </label>
            <label>
                <input type='text' name='lastName' placeholder='Last Name' />
            </label>
            <label>
                <input type='email' name='email' placeholder='Email'/>
            </label>
            <label>
                <input type='tel' name='phone' placeholder='Phone' />
            </label>
            <label>
                <input 
                    type='textarea' 
                    name='message' 
                    placeholder='Message'
                    cols='30'
                    rows='5'
                />
            </label>
            <button>SEND IT!</button>
        </form>
    );
}

export default Form;
