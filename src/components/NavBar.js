import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import './Navbar.css';
import NavbarLogo from '../images/logo.png'



function NavBar() {

    return (

        <Navbar fluid scrolling light fixed="top" >
            <Navbar.Brand href="https://www.celebrityschool.in/" >
                <img
                    alt="Cschool logo"
                    src={NavbarLogo}
                />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link style={{ color: 'whitesmoke', borderStyle: 'double', borderRadius: '25px' }} href="https://www.celebrityschool.in/online-all-classes" > ALL LESSONS </Nav.Link>

                <Nav.Link style={{
                    color: 'whitesmoke', borderStyle: 'double', borderRadius: '25px', marginLeft: '1.8rem' }} className="links2" href="" > LOGIN </Nav.Link>
            </Nav>

        </Navbar>





    );
}

export default NavBar;