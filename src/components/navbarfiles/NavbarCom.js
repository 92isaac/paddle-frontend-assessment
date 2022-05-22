import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav} from "react-bootstrap"
import Button from "../utilities/Button"
import "./navbar.css"

const NavbarCom = () => {
  return (
<Navbar expand="lg" style={{backgroundColor: '#1D003F', paddingTop: '30px'}}>
  <Container>
    <Navbar.Brand to="/" style={{color: '#fff'}}>React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto items-link">
        <NavLink to="/about" className='nav-link mx-4' style={{color:"#fff"}}>About us</NavLink>
        <NavLink to="/blog" className='nav-link mx-4' style={{color:"#fff"}}>Blog</NavLink>
        <NavLink to="/contact" className='nav-link mx-4' style={{color:"#fff", backgroundColor:"#271AC1", padding: "10px 30px", borderRadius: "30px"}}>Contact</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavbarCom