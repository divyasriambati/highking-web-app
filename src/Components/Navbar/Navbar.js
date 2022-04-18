import React, { Component } from 'react';
import './Navbar.css';
import logo from '../../assets/icons/logo.svg'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className='navbar'>
                    <div>
                        <img className='navbar-logo' src={logo}></img>
                    </div>
                    <div className='navbar-navs'>
                        <a className='navbar-link'>Location</a>
                        <a className='navbar-link'>Blogs</a>
                        <a className='navbar-link'>Testimonials</a>
                        <a className='navbar-link'>Contact</a>
                    </div>
                </div>
            </div>
        )
    }

}