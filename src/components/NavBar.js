import React from 'react';
import { Navbar, Nav,Row,Col } from 'react-bootstrap'
import './Navbar.css';
import NavbarLogo from '../images/logo.png'



function NavBar() {

    return (

        <Navbar inverse fluid scrolling light fixed="top" >
         <Row style={{width:'100%'}}>
             <Col md={4}>
             <Navbar.Brand href="https://www.celebrityschool.in/" >
                <img 
                alt="Cschool logo"
                src={NavbarLogo}
                />
            </Navbar.Brand>
             </Col>
             <Col md={4}></Col>
             <Col md={4}>
             <Nav className="mr-auto">
                <Nav.Link style = {{borderStyle: 'solid', color: 'whitesmoke', borderRadius: '25px', marginLeft: '1.8rem' }} href="https://www.celebrityschool.in/online-all-classes" > ALL LESSONS </Nav.Link>

                <Nav.Link style = {{borderStyle: 'solid', color: 'whitesmoke', borderRadius: '25px', marginLeft: '1.8rem' }} className="links2" href="" > LOGIN </Nav.Link>
            </Nav>
             </Col>
         </Row>
           

        </Navbar>





    );
}

export default NavBar;