import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top'  bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">The Fixer Man</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/About">About</Nav.Link>
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
     
    </Nav>
    <Nav>
      {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
      <Nav.Link as={Link} to="/login">
       Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;