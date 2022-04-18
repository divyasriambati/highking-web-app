import React, { Component } from 'react';
import './Section4.css';
import travel_advisors from '../../assets/icons/Travel\ Advisor.svg';
import united_travel from '../../assets/icons/United\ Travel.svg';
import travel_channel from '../../assets/icons/Travel\ Channel.svg';
import tripraja from '../../assets/icons/tripraja.svg';
import booking from '../../assets/icons/Booking.svg';


export default class Section4 extends Component{
    render(){
        return(
            <div>
                <div className='section4-container'>
                    <div className='section4-header-content'>Safe Journey</div>
                    <div className='section4-heading' >Trusted by Big Companies</div>
                    <div className='section4-testimonials-container'>
                        <img className='section4-testimonials' src={travel_advisors}></img>
                        <img className='section4-testimonials' src={united_travel}></img>
                        <img className='section4-testimonials' src={travel_channel}></img>
                        <img className='section4-testimonials' src={tripraja}></img>
                        <img className='section4-testimonials' src={booking}></img>
                    </div>
                </div>
            </div>
        )
    }
}