import React, { Component } from 'react';
import './Section2.css';
import location from '../../assets/icons/location.svg';
import shoe from '../../assets/icons/shoe.svg';
import bag from '../../assets/icons/bag.svg';


export default class Section2 extends Component {
    render() {
        return (
            <div >
                <div className='section2-container'>

                    <div className='section2-card'>
                        <img className='section2-card-img' src={location}></img>
                        <div className='section2-card-heading'>Secret Locations</div>
                        <div className='section2-card-content'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</div>
                        <a className='section2-card-readmore'><u>Read More</u></a>
                    </div>

                    <div className='section2-card'>
                        <img className='section2-card-img' src={shoe}></img>
                        <div className='section2-card-heading'>Safe Adventure</div>
                        <div className='section2-card-content'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</div>
                        <a className='section2-card-readmore'>Read More</a>
                    </div>

                    <div className='section2-card'>
                        <img className='section2-card-img' src={bag}></img>
                        <div className='section2-card-heading'>Professional Hikers</div>
                        <div className='section2-card-content'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</div>
                        <a className='section2-card-readmore'>Read More</a>
                    </div>

                </div>

                <div className='section2-footer'>Don't hesitate to contact us to get better Information  <a className='section2-footer-link'> EXPLORE ALL TREKKING</a></div>
                
            </div>
        )
    }

}