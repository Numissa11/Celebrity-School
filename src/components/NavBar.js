import React from 'react';
import { Navbar, Nav, Row, Col, Modal, } from 'react-bootstrap';
import './Navbar.css';
import NavbarLogo from '../images/logo.png'
import Login from './Login';

class NavBar extends React.Component {
    constructor() {
        super()
        
        this.handleShow = this.handleShow.bind(this)
    }


    state = { isSignedIn: false, show: false }
          // MODAL OPEN FUNCTION
    handleShow() {
        this.setState({
            show: true
        })
    }
    // MODAL CLOSE FUNCTION
    handleClose() {
        this.setState({
            show: false
        })
    }

    render() {
        return (

            <div>

                <Navbar inverse fluid scrolling light fixed="top" >
                    <Row style={{ width: '100%' }}>
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
                                <Nav.Link style={{ borderStyle: 'solid', color: 'whitesmoke', borderRadius: '25px', marginLeft: '1.8rem' }} href="https://www.celebrityschool.in/online-all-classes" > ALL LESSONS </Nav.Link>

                                <Nav.Link style={{ borderStyle: 'solid', color: 'whitesmoke', borderRadius: '25px', marginLeft: '1.8rem' }} className="links2" onClick={this.handleShow.bind(this)} > LOGIN </Nav.Link>
                            </Nav>
                        </Col>
                    </Row>


                </Navbar>
                <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>   </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* CALLING LOGIN FUNCTIONALITY FOR FIREBASE */}
                        <Login />
                    </Modal.Body>
                </Modal>
            </div >



        );
    }
}

export default NavBar;