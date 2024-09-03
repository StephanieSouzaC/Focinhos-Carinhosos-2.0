import React from 'react';
import './Header.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaUserCog, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar expand="lg" className="header__custom-navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#" className="text-left header__navbar-brand">
          FOCINHOS CARINHOSOS
          <p className="header__subtext">ADMINISTRADOR</p>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            <Nav.Link href="#">Home</Nav.Link>
            <NavDropdown title="Cadastro" id="cadastro-dropdown" className="custom-dropdown">
              <NavDropdown.Item href="#">Animais</NavDropdown.Item>
              <NavDropdown.Item href="#">Funcionarios</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Buscar" id="buscar-dropdown" className="custom-dropdown">
              <NavDropdown.Item href="#">Animais</NavDropdown.Item>
              <NavDropdown.Item href="#">Funcionarios</NavDropdown.Item>
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




