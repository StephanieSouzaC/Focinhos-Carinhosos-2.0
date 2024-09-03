import React from 'react';
import './Header.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaUserCog, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#" className="text-left navbar-brand">
          FOCINHOS CARINHOSOS
          <p className="subtext">ADMINISTRADOR</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            <Nav.Link href="#">Home</Nav.Link>
            <NavDropdown title="Cadastro" id="cadastro-dropdown">
              <NavDropdown.Item href="#">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Option 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Buscar" id="buscar-dropdown">
              <NavDropdown.Item href="#">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Option 2</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#"><FaSearch /></Nav.Link>
            <Nav.Link href="#"><FaUserCog /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;

