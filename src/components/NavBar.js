import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import './Navbar.css';
import { Link } from 'react-router-dom';



function NavBar() {

      return (
            <Navbar scrolling dark expand="md" fixed="top" >

                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="container-fluid" >
                              <Nav.Link
                                    as={Link}
                                    to="/" >HOME</Nav.Link>

                              <Nav.Link
                              style={{ marginLeft: '1000px' }}
                                    as={Link}
                                    to="/lessons">ALL LESSONS</Nav.Link>
                              <Nav.Link className="ml-auto" as={Link} to="/login">LOGIN</Nav.Link>

                        </Nav>

                  </Navbar.Collapse>
            </Navbar>
      );
}

export default NavBar;
