import React, {useState} from 'react';
import "./Navigation.css"
import {Container,  Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from "../../assets/logo.jpg";
function Navigation() {

  const[click, setClick] = useState(false)
  const handleClick = () =>setClick(!click);

  return (
    <Navbar className="navbar">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand ><img src={logo} alt="" /></Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto small-device">
            <Nav.Link href="/login" className="nav-link">About us</Nav.Link>
            <Nav.Link href="/login" className="nav-link">Shop Now</Nav.Link>
            <Nav.Link href="/login" className="nav-link">Contact</Nav.Link>
            {/* <Nav.Link href="/login">Login</Nav.Link> */}

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;