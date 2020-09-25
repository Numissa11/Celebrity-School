import React from 'react';
import {Modal, } from 'react-bootstrap';
import './Navbar.css';
import NavbarLogo from '../images/logo.png'
import Login from './Login';


/*  <img
          alt="Productized logo"
          src={NavbarLogo}
          width="140"
          height="44"
          className="d-inline-block align-top logo"
        />*/

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

                         {/* NAVBAR */}

<header className='toolbar'>
    <nav className='toolbar_navigation'>
        <div></div>

        <div className='toolbar_logo'>
            <a href='www.celebrityschool.in'>
        <img
          alt="Productized logo"
          src={NavbarLogo}
          width="140"
          height="44"
          className="d-inline-block align-top logo"
        />
        </a>
        </div>
        <div className="spacer"></div>
        <div className='toolbar_navigation_items'> 
            <ul>
                <li><a href='/login'>LOGIN</a></li>
                <li><a href='lessons'>ALL LESSONS</a></li>

            </ul>
        </div>
    </nav>
</header>
    

                         {/* MODAL */}

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