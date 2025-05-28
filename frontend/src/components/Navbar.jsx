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
              to="/india-map-portal/"
              active={location.pathname === "/india-map-portal/"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/india-map-portal/about"
              active={location.pathname === "/india-map-portal/about"}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/india-map-portal/contact"
              active={location.pathname === "/india-map-portal/contact"}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/india-map-portal/Mapview"
              active={location.pathname === "/india-map-portal/Mapview"}
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
