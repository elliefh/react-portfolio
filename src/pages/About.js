import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutMeGif from "../images/aboutme.gif";

function About() {
    return(
        <Container>
            <Row className = "d-flex justify-content-center">
                <p className = "page-title">About Me</p>
            </Row>
            <Row className = "d-flex justify-content-center">
                <img src = {AboutMeGif} alt="gif" width="200" height="200"/>          
            </Row>
            <Row className = "d-flex justify-content-center">
                <Col className = "d-flex justify-content-center" xs={6}>
                    <p className="text-center">Hello and thank you for visiting my website.<br/><br/>
                    My name is Ellie and I am currently pursuing a full stack web development certificate through the University of Washington's Coding Bootcamp Program. I am also a student at the Academy of Art University pursuing my MFA. 
                    <br/><br/>
                    You can check out some of my highlighted projects in my <a href="/portfolio">portfolio page</a>. If you have any questions or comments, please feel free to reach out to me through my <a href="/contact">contact page</a>.<br/><br/>
                    </p>
                </Col>
            </Row>
        </Container>    
    )
}

export default About;