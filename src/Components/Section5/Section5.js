import React, { Component } from 'react';
import './Section5.css';
import section5_image from '../../assets/images/enjoy\ your\ life.png';

export default class Section5 extends Component{
    render(){
        return(
            <div className='section5-bg'>

                <div className='section5-container'>

                    <div className='section5-content'>
                        <div className='section5-header'>Enjoy Your Life <br></br> With Us Now</div>
                        <div className='section5-subheader'>Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.</div>
                        <div className='section5-buttons'><button className='section5-filledbtn'>Contact US</button></div>
                    </div>

                    <div className='section5-image'>
                        <img src={section5_image}></img>
                    </div>


                </div>
            </div>
        )
    }

}