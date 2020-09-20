import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Navbar.css';




function NavBar() {
      let isBackgroundRed = true;
      

      const navbar = { color: 'grey', fontSize: '30px', fontFamily: 'serif', borderStyle: 'double' }
      const navbar2 = { marginLeft: '75%', color: 'grey', fontSize: '30px', fontFamily: 'serif', borderStyle: 'double' }
      return (
            <Navbar scrolling dark expand="md" fixed="top" >

                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="container-fluid"
                               activeKey='home'
                               onSelect={() => isBackgroundRed = false
                              }
                               
                              >

                              <Nav.Link
                                    as={Link}
                                    to="/" >HOME</Nav.Link>

                              <Nav.Link
                                    style={navbar2}
                                    as={Link}
                                    to="/lessons"
                                    eventKey="lessons"
                                    className={isBackgroundRed ? 'background-red' : 'background-blue'}
                                    >ALL LESSONS</Nav.Link>
                              <Nav.Link
                                    eventKey="login"
                                    
                                    className="ml-auto" as={Link} to="/login" style={navbar}>LOGIN</Nav.Link>

                        </Nav>

                  </Navbar.Collapse>
            </Navbar>
      );
}

export default NavBar;
