// src/components/Navbar.jsx
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const NavigationBar = () => {
  const location = useLocation();

  return (
    <Navbar bg="light" expand="lg" className="fixed-top shadow-sm">
      <Container fluid className="px-3 px-lg-5">
        <Navbar.Brand as={Link} to="/india-map-portal/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            className="navbar-logo me-2"
          />
          <span style={{ fontWeight: 500, fontSize: "1.25rem", marginLeft: "20px" }}>
            India Map Portal
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="bg-light p-3 p-lg-0 rounded-bottom"
        >
          <Nav className="ms-auto text-center">
            <Nav.Link
              as={Link}
              to="/"
              active={location.pathname === "/"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              active={location.pathname === "/about"}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              active={location.pathname === "/contact"}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Mapview"
              active={location.pathname === "/Mapview"}
            >
              Explore Map
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
