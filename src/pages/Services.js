import React from 'react';

import WebsiteDevelopment from '../shared/images/WebsiteDevelopment.svg';
import WebsiteDesign from '../shared/images/WebsiteDesign.svg';
import ResponsiveDesign from '../shared/images/ResponsiveDesign.svg';
import WebsiteHosting from '../shared/images/WebsiteHosting.svg';
import SEO from '../shared/images/SEO.svg';
import SocialMedia from '../shared/images/SocialMedia.svg';
import EmailMarketing from '../shared/images/EmailMarketing.svg';
import Apparel from '../shared/images/Apparel.svg';
import './Services.css';

const Services = () => {
    return (
        <div className='services'>
            <div className='services-text'>
                <h2>OUR SERVICES</h2>
                <p>
                    Deep North Marketing partners with local businesses of various sizes in many diverse industries. We dedicate our work to solving your most complex problems 
                    and ensuring the brand you worked so hard to build translates beautifully online to your ideal audience. 
                </p>
                <p>
                    Offering a variety of digital solutions, we are always just a click away!
                </p>
            </div>
            <div className='all-services'>
                <div className='individual-services'>
                    <img src={ WebsiteDevelopment} alt='Website Development' />
                    <div>
                        <h3>Website Development</h3>
                        <p>Customized solutions that support your business as it grows.</p>
                    </div>
                </div>
                <div className='individual-services'>
                    <img src={ WebsiteDesign} alt='Website Design' />
                    <div>
                        <h3>Website Design</h3>
                        <p>Highlight your brand's identity through an advanced user experience.</p>
                    </div>
                </div>
                <div className='individual-services'>
                    <img src={ ResponsiveDesign} alt='Responsive Design' />
                    <div>
                        <h3>Responsive Design</h3>
                        <p>Your website should work for your customers on any device.</p>
                    </div>
                </div>
                <div className='individual-services'>
                    <img src={ WebsiteHosting} alt='Website Hosting' />
                    <div>
                        <h3>Website Hosting</h3>
                        <p>Keep your website secure, stable and virus free.</p>
                    </div>
                </div>
                <div className='individual-services'>
                    <img src={ SEO } alt='SEO' />
                    <div>
                        <h3>SEO/SEM</h3>
                        <p>Grab Google's attention with the right content and a solid framework.</p>
                    </div>
                </div>
                <div className='individual-services'>
                    <img src={ SocialMedia } alt='Social Media' />
                    <div>
                        <h3>Social Media</h3>
                        <p>Don't wait for your customers to come to you. Reach them where they already are!</p>
                    </div>
                </div>
                <div className='individual-services'>
                    <img src={ EmailMarketing } alt='Email Marketing' />
                    <div>
                        <h3>Email Marketing</h3>
                        <p>Market your business directly to your cutomers.</p>
                    </div>
                </div>
                <div className='individual-services'>
                    <img src={ Apparel } alt='Apparel' />
                    <div>
                        <h3>Apparel</h3>
                        <p>The best advertisers are the ones that walk and talk. Load your team up with custom, branded gear.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;