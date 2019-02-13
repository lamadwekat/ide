import{ Navbar,Nav,Image } from 'react-bootstrap'
import download from '../img/download.png'
import React, { Component } from 'react'
import './navbar.css';
import { NavLink} from 'react-router-dom'
export default class navbar extends Component {
  render() {
    return (
        <div  >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar">
  <Navbar.Brand  className="nav" href="#home">Cloud IDE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
   
  <NavLink  className="nav"  exact to="/Ask">Ask</NavLink> 
      
      <NavLink className="nav"  exact to="/Code">Lets code</NavLink>
      
      <NavLink exact to="/Profile">
    <Image className="pimg" width="55px" height="55px" src={download} roundedCircle />
    </NavLink>
  
    
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>

    );
  }
}
