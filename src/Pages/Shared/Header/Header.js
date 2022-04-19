import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);

  const handelSignOut = () => {
    signOut(auth);
  }
  return (
    <div >
      
      <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">The Fixpert</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/whyme">Why Me</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/About">About</Nav.Link>

            </Nav>
            <Nav>

              {
                user ?
                  <button onClick={handelSignOut}>Sign Out</button>

                  :

                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='header-tittle'>
    <h2 >The Fixpert Mr.Min is Home Appliance Service person</h2>
    <p> I'm (Mr.Min) courteous, respecting your home and your family. My attention to detail ensures quality, safe work every time!</p>

  </div>
    </div>
    
  );
};

export default Header;