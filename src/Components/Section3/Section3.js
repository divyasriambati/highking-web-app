import React, { Component } from 'react';
import './Section3.css';
import section3_image from '../../assets/images/safe\ and\ affordable.png';

export default class Section3 extends Component{
    render(){
        return(
            <div className='section3-bg'>

                <div className='section3-container'>

                    <div className='section3-image'>
                        <img src={section3_image}></img>
                    </div>

                    <div className='section3-content'>
                        <div className='section3-header'>Safe, <br></br> Affordable, And <br></br> Trusted</div>
                        <div className='section3-subheader'>Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.</div>
                        <div className='section3-buttons'><button className='section3-filledbtn'>Contact US</button></div>
                    </div>

                </div>
            </div>
        )
    }

}