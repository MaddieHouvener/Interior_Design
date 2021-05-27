import React from 'react'
import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Carousel, DropdownButton, Dropdown } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

import "bootstrap/dist/css/bootstrap.min.css";

import Projects from '../components/Projects';

export default props => {

    //Get the button:
    // const mybutton = document?.getElementById("myBtn");
    // console.log("myBtn", mybutton)

    // When the user scrolls down 20px from the top of the document, show the button
    // window.onscroll = function () { scrollFunction() };

    // function scrollFunction() {
    //     if (document) {
    //         if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //             if (mybutton) {
    //                 mybutton.style.display = "block";
    //             }
    //         } else {
    //             if (mybutton) {
    //                 mybutton.style.display = "none";
    //             }
    //         }
    //     }
    // }

    // When the user clicks on the button, scroll to the top of the document
    // function topFunction() {
    //     document.body.scrollTop = 0; // For Safari
    //     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    // }

    return (
        <div className="App">
            <div class="header">
            </div>
            <div class="topnav">
                <a href="#home">Home</a>
                <a href="#aboutme" style={{ scrollBehavior: "smooth" }}>About</a>
                <a href="/services">Services</a>
                <a href="#projects">Projects</a>
                <a href="/contact">Contact</a> */}
                <button className="menu">MENU</button>

                {/* <DropdownButton className="menuButton" id="dropdown-basic-button" title="Menu">
                    <Dropdown.Item href="#aboutme">About</Dropdown.Item>
                    <Dropdown.Item href="/services">Services</Dropdown.Item>
                    <Dropdown.Item href="#projects">Projects</Dropdown.Item>
                    <Dropdown.Item href="/contact">Contact</Dropdown.Item>
                </DropdownButton> */}
            </div>

            <Carousel fade>
                <Carousel.Item>
                    <h1 className="h1-img">Kari Skoog Design</h1>
                    <p className="h2-img">Love the space you live in</p>
                    <Col className="headerImage">
                        <img
                            className="d-block w-100"
                            src="https://images.squarespace-cdn.com/content/v1/54c04d65e4b0dc084d050a03/1553814352537-0ZHLEZ3U3PFZMMMWCJAL/ke17ZwdGBToddI8pDm48kA_SSaoz4elkj-HsZd8gX3Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWPwZyNcweDIvdeL5kotwkIXjs9g0WibSO_cU-Ijy4Pwg6poS-6WGGnXqDacZer4yQ/Bigg%27s+edited+for+web+%281+of+28%29.jpg?format=2500w"
                            alt="First slide"
                        />
                    </Col>
                </Carousel.Item>
                <Carousel.Item>
                    <h1 className="h1-img">Kari Skoog Design</h1>
                    <p className="h2-img">Love the space you live in</p>
                    <Col className="headerImage">
                        <img
                            className="d-block w-100"
                            src="bathroomSink.png"
                            alt="second slide"
                        />
                    </Col>
                </Carousel.Item>
                <Carousel.Item>
                    <h1 className="h1-img">Kari Skoog Design</h1>
                    <p className="h2-img">Love the space you live in</p>
                    <Col className="headerImage">
                        <img
                            className="d-block w-100"
                            src="wall.png"
                            alt="Third slide"
                        />
                    </Col>
                </Carousel.Item>
            </Carousel>
            <div className="aboutMe">
                <div id="aboutme">
                    <div className="seperatorSmall"></div><p className="work">We cant wait to work with you</p><div className="seperatorSmall"></div>
                    <Container>
                        <Row>
                            <Col>
                                {/* <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/34552f23-2ae8-4f64-9dfd-10fadf39232a/da45vja-9a9896da-fc42-440c-8d59-0b736b287226.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM0NTUyZjIzLTJhZTgtNGY2NC05ZGZkLTEwZmFkZjM5MjMyYVwvZGE0NXZqYS05YTk4OTZkYS1mYzQyLTQ0MGMtOGQ1OS0wYjczNmIyODcyMjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pbBqtCCGrfrHPSCQhGcmxkpNg_4dsqr7nN2CqdjbYdM" alt="" /> */}
                                <h2 className="title">About Us</h2>
                                <div className="aboutMeText">
                                    <p>Kari Joki has been in the interior design industry for nearly 15 years. She spent many of those years on an award winning design team at a highly respected northwest interior design firm. As a team they designed many Street of Dream homes. Kari truly loves working with both new and return clients on projects of all sizes. Kari’s focus is with interior furnishings as well as remodel and new construction. Her passion for design and creative, functional styling have made her the choice of clients that want their house to be a home.</p>
                                    <iframe className="video" width="1280" height="720" src="https://www.houzz.com/embed/highlightVideo/0910939e0dd59797" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </Col>
                            <Col>
                                <img className="kari" src="https://images.squarespace-cdn.com/content/v1/54c04d65e4b0dc084d050a03/1440457823004-SSKWJV6PIG22R9OHIEBR/ke17ZwdGBToddI8pDm48kDwCBPMkXzHlJbfjzSAukIIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2disoJXzGpdGP9c-uwjPeoPABkIdKgsyIG4bzbLEH5msm_AaHWq01a8yFgqe9oqFs/Kari+bio.jpg?format=1500w" alt="Kari Joki" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="testimonials">
                <div className="seperator"></div>

                <div className="fixed-img">

                    <h4 className="topic">Testimonials</h4>

                    <div className="seperatorSmall"></div>
                    <div className="textInner">
                        <p>"Kari is the most versatile, talented designer I have ever worked with. She understands budget and time constraints, is flexible, and it would be hard to find a lovelier person. We met through a house build project. Now I consider her much more than a consultant. She is a wonderful friend!" </p>
                        <p className="referral">-Susan N</p>
                    </div>
                </div>
            </div>
            <div id="projects">
                <Projects />
            </div>

            {/* navigate to top */}
            {/* <button onclick={topFunction()} id="myBtn" title="Go to top" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                </svg>
            </button> */}

            {/* footer */}
            <div className="footer">
                <div className="socials">
                    <SocialIcon url="https://facebook.com/karijokidesign" />
                    <SocialIcon url="https://instagram.com/karjokidesign" />
                </div>
            </div>
        </div >
    )
}
