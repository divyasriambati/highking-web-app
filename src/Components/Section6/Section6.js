import React, { Component } from 'react';
import './Section6.css';
import section6_image from '../../assets/images/lets\ enjoy\ nature\ with\ us.png';

export default class Section6 extends Component{
    render(){
        return(
            <div className='section6'>

                <div className='section6-container'>

                    <div className='section6-image'>
                        <img src={section6_image}></img>
                    </div>

                    <div className='section6-content'>
                        <div className='section6-header'>Let's Enjoy<br></br> Nature with us</div>
                        <div className='section6-subheader'>Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.</div>
                        <div className='section6-buttons'><button className='section6-filledbtn'>Learn More</button></div>
                    </div>

                </div>
            </div>
        )
    }

}