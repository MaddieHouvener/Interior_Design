import React from 'react'
import '../App.css';
import { SocialIcon } from 'react-social-icons';
import { Container } from 'react-bootstrap';

export default props => {

    return (
        <div className="App">
            <div class="topnav">
                <a class="active" href="/">Home</a>
                <a href="#aboutme">About</a>
                <a href="/services">Services</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </div>
            <p className="topic"> Services</p>
            <Container >
                <div className="flexServices">
                    <p className="services">Karin Bennett Designs is a full-service design firm focusing on quality projects with our signature style that marries clean lines and natural materials. We have a reputation for giving our clients a balanced design; mixing warm neutrals with pops of black and white and incorporating lots of texture. This style is evident in each project we design.</p>
                    <img className="livingroom" src="verticalLivingRoom.jpg" alt="" />
                    <div>
                        <p className="servicesRight">We offer a consistent approach to project management ensuring each project runs smoothly and is cohesive from concept to completion. Our firm can assist on every aspect of the design process including partnering with architects, builders and contractors. We provide AutoCAD drawings, floor plans, lighting strategies, elevations, custom furnishings & window treatments, art procurement and more.</p>
                    </div>
                </div>
            </Container>

            <div className="footer">
                <div className="socials">
                    <SocialIcon url="https://facebook.com/karijokidesign" />
                    <SocialIcon url="https://instagram.com/karijokidesign" />
                </div>
            </div>
        </div >
    )
}

