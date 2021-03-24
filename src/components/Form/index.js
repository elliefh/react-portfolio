import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GithubIcon from '../Form/github.png';
import EmailIcon from '../Form/email.png';
import LinkedinIcon from '../Form/linkedin.png';
import PhoneIcon from '../Form/phone.png';
import './style.css';

function MyContactForm() {
    return (
    <div className="contact-form">
        <Row className="justify-content-center">
            <p className = "page-title">Questions or Comments?</p>
        </Row>
        <p className="text-center">Reach out to me through the form below or connect with me through Github, Linkedin, Email or Phone.</p>
        <Row className="justify-content-center">
            <Col sm={10}>
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>            
                <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" placeholder="example@gmail.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Inquiry/Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="secondary" type="submit" className="submitBtn">
                    Submit
                </Button>
                </Form>
            </Col>
        </Row>

        <Row className="icons justify-content-md-center">
                <Button variant="link" href="https://github.com/elliefh" target="_blank"> 
                    <img src= {GithubIcon} alt="logo" height="40px" width="40px"/>
                </Button>

                <Button variant="link" href="mailto:elliefh@uw.edu">
                <img src= {EmailIcon} alt="logo"height="40px" width="40px"/>
                </Button>

                <Button variant="link" href="https://www.linkedin.com/in/ellie-fu-138ba3208/" target="_blank">
                    <img src= {LinkedinIcon} alt="logo"height="40px" width="40px"/>
                </Button>

                <Button variant="link" href="tel:406-518-1203‬">
                    <img src= {PhoneIcon} alt="logo"height="40px" width="40px"/>
                </Button>

        </Row>
    </div>
)}

export default MyContactForm;