import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import MyHeader from "./components/Header";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Router>
    <MyHeader/>
    <MyNavbar/>
    <Container>
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
    </Container>
    <Footer/>
    </Router>
  );
}

export default App;