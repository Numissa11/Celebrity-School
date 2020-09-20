import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import './Navbar.css';
import { Link } from 'react-router-dom';



function NavBar() {
      const navbar = { color: 'grey', fontSize: '30px', fontFamily:'serif', borderStyle: 'double'  }
      const navbar2 = { marginLeft: '75%', color: 'grey', fontSize: '30px', fontFamily:'serif', borderStyle: 'double' }
      return (
            <Navbar scrolling dark expand="md" fixed="top" >

                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="container-fluid" >

                              <Nav.Link
                                    as={Link}
                                    to="/" >HOME</Nav.Link>

                              <Nav.Link

                                    style={navbar2}
                                    as={Link}
                                    to="/lessons">ALL LESSONS</Nav.Link>
                              <Nav.Link className="ml-auto" as={Link} to="/login" style={navbar}>LOGIN</Nav.Link>

                        </Nav>

                  </Navbar.Collapse>
            </Navbar>
      );
}

export default NavBar;
