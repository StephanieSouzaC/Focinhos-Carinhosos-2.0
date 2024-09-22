// import React from 'react';
// import './Header.css';
// import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
// import { FaUserCog, FaSearch } from 'react-icons/fa';
// import { Link } from 'react-router-dom';  // Importa Link para navegação

// const Header = () => {
//   return (
//     <Navbar expand="lg" className="header__custom-navbar">
//       <div className="container-fluid d-flex justify-content-between align-items-center header__conteiner">
//         <Navbar.Brand href="#" className="text-left header__navbar-brand">
//           <h1 className="header__navbar-title">FOCINHOS CARINHOSOS</h1>
//           <p className="header__subtext">ADMINISTRADOR</p>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
//           <Nav className="align-items-center header__navbar">
//             <Nav.Link href="#">Home</Nav.Link>
//             <NavDropdown title="Cadastro" id="cadastro-dropdown" className="custom-dropdown">
//               <NavDropdown.Item href="#">Animais</NavDropdown.Item>
//               <NavDropdown.Item href="#">Funcionarios</NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown title="Buscar" id="buscar-dropdown" className="custom-dropdown">
//               <NavDropdown.Item href="#">Animais</NavDropdown.Item>
//               <NavDropdown.Item href="#">Funcionarios</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#"><FaUserCog /></Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </div>
//     </Navbar>
//   );
// }

// export default Header;


import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCog } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <Navbar expand="lg" className="header__custom-navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center header__conteiner">
        <Navbar.Brand className="text-left header__navbar-brand">
          <h1 className="header__navbar-title">FOCINHOS CARINHOSOS</h1>
          <p className="header__subtext">ADMINISTRADOR</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center header__navbar">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Cadastro" id="cadastro-dropdown" className="custom-dropdown">
              <NavDropdown.Item as={Link} to="/cadastro-animal">Animais</NavDropdown.Item>
              <NavDropdown.Item to="#">Funcionarios</NavDropdown.Item>
              {/* Outros cadastros podem ser adicionados aqui */}
            </NavDropdown>
            <NavDropdown title="Buscar" id="buscar-dropdown" className="custom-dropdown">
              <NavDropdown.Item as={Link} to="/buscar-animal">Animais</NavDropdown.Item>
              <NavDropdown.Item to="#">Funcionarios</NavDropdown.Item>
              {/* Outros tipos de busca podem ser adicionados aqui */}
            </NavDropdown>
            <Nav.Link><FaUserCog /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;



