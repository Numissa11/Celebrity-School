import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import './Navbar.css';
import { Link } from 'react-router-dom';



function NavBar() {

      return (
            <Navbar bg="dark" variant="dark" expand="lg" >

                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                              <Nav.Link eventKey="consultancy"
                                    as={Link}
                                    to="/">HOME</Nav.Link>
                              <Nav.Link className="text-center"
                                    as={Link}
                                    to="/lessons">ALL LESSONS</Nav.Link>
                              <Nav.Link href="/login">LOGIN</Nav.Link>

                        </Nav>

                  </Navbar.Collapse>
            </Navbar>
      );
}

export default NavBar;
