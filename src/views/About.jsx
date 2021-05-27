import React from 'react'
import '../App.css';
import { SocialIcon } from 'react-social-icons';

export default props => {

    return (
        <div className="container">
            <div class="topnav">
                <a class="active" href="/">Home</a>
                <a href="#aboutme">About</a>
                <a href="/services">Services</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </div>
            <h1>Under Construction</h1>
            <div className="fixed-img">
                {/* <img src="shelving.jpg" alt="shelf image" /> */}
            </div>
            <div className="moveable">This div is only here to enable scrolling (height = 800 pixels).</div>
            <div className="footer">
                <div className="socials">
                    <SocialIcon url="https://facebook.com/karijokidesign" />
                    <SocialIcon url="https://instagram.com/karijokidesign" />
                </div>
            </div>
        </div>
    )
}