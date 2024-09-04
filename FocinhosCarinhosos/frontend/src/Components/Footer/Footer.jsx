import React from 'react';
import './Footer.css';
import { Nav, Image } from 'react-bootstrap';
import logo from './logo.svg';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__info">
        <p>© DESENVOLVIDO POR GRUPO ALAS</p>
      </div>
      
      <div className="footer__contacts">
        <h5>CONTATOS</h5>
        <Nav className='flex-column'>
          <Nav.Link href="#" className="px-0 footer__contacts_align_icons">
          <FaInstagram size={24} className='me-2'/> @FOCINHOS_CARINHOSOS_ONG_BH
          </Nav.Link>
          <Nav.Link href="#" className="px-0 footer__contacts_align_icons">
          <FaWhatsapp size={24} className='me-2'/> (31) 99999-9999
          </Nav.Link >
          <Nav.Link href="#" className="px-0 footer__contacts_align_icons">
          <MdOutlineAttachEmail size={24} className='me-2'/> FOCINHOSCARINHOS@ONG.COM.BR
          </Nav.Link>
        </Nav>
      </div>
      
      <div>
        <Image src={logo} alt="Logo da ONG"/>
      </div>
    </footer>
  );
};

export default Footer;
