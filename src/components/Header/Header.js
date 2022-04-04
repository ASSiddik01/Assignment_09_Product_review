import React from "react";
import "./Header.css";
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
  return (
    <nav>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto my-4">
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/reviews">Reviews</CustomLink>
              <CustomLink to="/dashboard">Dashboard</CustomLink>
              <CustomLink to="/blogs">Blogs</CustomLink>
              <CustomLink to="/about">About</CustomLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Header;
