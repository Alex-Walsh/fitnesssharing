import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "../styles/style.css";

export default class Mainnav extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>fithub</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/FAQ">
              <Nav.Item style={{ paddingRight: "10px" }} className="navbarLink">
                FAQ
              </Nav.Item>
            </Link>
            <Link to="/Test">
              <Nav.Item style={{ paddingRight: "10px" }} className="navbarLink">
                TEST
              </Nav.Item>
            </Link>
            <Link to="/main">
              <Nav.Item className="navbarLink">Saved Workouts</Nav.Item>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
