import React, { Component } from 'react';
import './Footer.css';
import logo from '../../assets/icons/logo.svg';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/insta.svg';
import twitter from '../../assets/icons/twitter.svg'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className='footer-container'>
                    <div className='footer-section1'>
                        <div className='footer-section1-heading'>
                            Subscribe to Our Newsletter <br></br> For Weekly Artical Update
                        </div>
                        <div className='footer-section1-content'>
                            We have hiking-related blog so we can share our thought and rutinity<br></br> in our blog that updated weekly. We will not spam you, we promise.
                        </div>
                        <div className='footer-input-container'>
                            <input className='footer-input' placeholder='Enter your e-mail address' ></input>
                            <button className='footer-subscribe-button'>Subscribe</button>
                        </div>
                    </div>


                    <div className='footer-section2'>

                        <div className='footer-logo-section'>
                            <img className='footer-logo' src={logo}></img>
                            <div className='footer-logo-content'>We envision a world where everyone feels welcome in the American hiking community.</div>
                            <div className='footer-social-links'>
                                <img src={facebook}></img>
                                <img src={instagram}></img>
                                <img src={twitter}></img>
                            </div>
                        </div>

                        <div>
                            <div className='footer-link-headings'>Location</div>
                            <div className='footer-link'>America</div>
                            <div className='footer-link'>Asia</div>
                            <div className='footer-link'>Europe</div>
                            <div className='footer-link'>Africa</div>
                        </div>

                        <div>
                            <div className='footer-link-headings'>Contact</div>
                            <div className='footer-link'>About Me</div>
                            <div className='footer-link'>Teams</div>
                            <div className='footer-link'>Profile</div>
                            <div className='footer-link'>FAQ</div>
                        </div>

                        <div>
                            <div className='footer-link-headings'>Legals</div>
                            <div className='footer-link'>Privacy</div>
                            <div className='footer-link'>Disclaimer</div>
                            <div className='footer-link'>Terms</div>
                            <div className='footer-link'>Company</div>
                        </div>

                    </div>

                    <div className='footer-copyright'>Copyright © 2021. All Right Reserved.</div>

                </div>    
            </div>
        )
    }

}