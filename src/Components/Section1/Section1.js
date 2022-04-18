import React, { Component } from 'react';
import './Section1.css';
import section1_image from '../../assets/images/be\ prepared\ image.png'
import Navbar from '../Navbar/Navbar';

export default class Section1 extends Component {
    render() {
        return (
            <div>
            <div className='section1-bg'>
                <div>
                    <Navbar/>
                </div>
                <div className='section1-container'>
                    <div className='section1-content'>
                        <div className='section1-header'>Be prepared for the mountains and beyond.</div>
                        <div className='section1-subheader'>Are you looking for amazing hiking <br></br> travel? Don't worry! We got it for you!</div>
                        <div className='section1-buttons'>
                            <button className='section1-filledbtn'>Contact US</button>
                            <button className='section1-outlinebtn' >Watch Video</button>
                        </div>
                    </div>

                    <div className='section1-image'>
                        <img src={section1_image}></img>
                    </div>

                </div>
            </div>

            
            </div>
        )
    }

}