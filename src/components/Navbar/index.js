import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Link} from "react-router-dom";

function MyNavbar() {
    return(
        <Navbar bg="dark" variant="dark" className="Navbar">
        <Nav>
            <Link className="nav-link" to="/">About</Link>
            <Link className="nav-link" to="/portfolio">Portfolio</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            <Nav.Link href="https://docs.google.com/document/d/1EFb6fD7jt9nr4023E_L3wkIkPHb7o3mSGsQcHiFlllY/edit?usp=sharing" target="_blank">Resume</Nav.Link>
        </Nav>
    </Navbar>
    )
}

export default MyNavbar;