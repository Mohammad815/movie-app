import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import user from "../../images/forhad.png";
import "./Header.scss";

const Header = () => {
    return (
      //   <div className="header">
      //   <Link to="/">
      //     <div className="logo">Movie App</div>
      //   </Link>
      //   <div>
      //   <div className="right-side">
      //     <Link to="/home">
      //       <div >Home</div>
      //     </Link>
      //     <Link to="/home">
      //       <div >About</div>
      //     </Link>
      //     <Link to="/home">
      //       <div >Contact US</div>
      //     </Link>
      //     <Link to="/home" className="user-image">
      //     <img src={user} alt="user" />
      //     </Link>    
      //     </div>
      //   </div>
      // </div>
      <div className="header">     
          <Navbar className="navbar" collapseOnSelect expand="lg"   variant="dark">
          <Container>
          <Link className="navLink" to="/home">
              Movie App
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="text-black" id="responsive-navbar-nav">
              <Nav className="ms-auto navbar">
              <Link className="navLink" to="/home">
                <div >Home</div>
            </Link>
            <Link className="navLink" to="/home">
                <div >About</div>
            </Link>
            <Link className="navLink" to="/home">
              <div >Contact US</div>
            </Link>
            <Link  to="/home" className="user-image">
              <img src={user} alt="user" />
            </Link> 
              
              </Nav>
          </Navbar.Collapse>
          </Container>
          
      </Navbar>
    </div>
    );
};


export default Header;