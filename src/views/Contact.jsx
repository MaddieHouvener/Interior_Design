import React, { useState } from 'react'
import '../App.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { Paper, StylesProvider, FormControl, Button, OutlinedInput, InputLabel } from '@material-ui/core';

export default props => {

    const { onSubmitProp } = props;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();

        onSubmitProp({ name, email, message });
    }


    return (
        <div className="App">
            <div class="topnav">
                <a class="active" href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </div>
            <h1>under construction</h1>
            <h3 className="topic">Contact Us</h3>
            <div className="seperatorSmall"></div>
            <div>
                Phone : (425)XXX-XXXX
            </div>
            <div>
                Email : karijokidesing@gmail.com
            </div>


            <div>
                <Form className="form" method="post">
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label className="formLabel">Your Name</Form.Label>
                        <Form.Control type="name" />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label className="formLabel">Email address</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Label className="formLabel">Write us a message</Form.Label>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="outline-dark">Submit</Button>
                </Form>
            </div>




            {/* <Container>
                <Row>
                    <Col sm={8}>
                        <Form method="post">
                            <Row>
                                <Form.Label> Your Name</Form.Label>
                                <Col>
                                    <Form.Control placeholder="First name" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Last name" />
                                </Col>
                            </Row>
                            <Row>
                                <Form.Label>Email address</Form.Label>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                            </Row>
                            <Form.Label>Write us a message</Form.Label>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Col> */}

            {/* <Col sm={4}>
                <p>Contact Us
                If you'd like more information about our design services or have a question for us, simply fill our this contact form with your info and we'll get in touch with you right away! We look forward to hearing from you!
                        -KJD</p></Col> */}
            {/* </Row>
            </Container> */}
            <div className="footer">
                <div className="socials">
                    <SocialIcon url="https://facebook.com/karijokidesign" />
                    <SocialIcon url="https://instagram.com/karijokidesign" />
                </div>
            </div>
        </div >
    )

}