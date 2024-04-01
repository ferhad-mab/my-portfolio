import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const NavBar = () => {
    return ( 

        <div style={{marginRight: '20px', marginLeft: '20px'}}>
            <Navbar expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#" style={{fontSize: '1.5rem'}}>ferhad baaqieel</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav
            className=" ms-auto align-items-center "
            style={{ maxHeight: '100px' }}
          >
            <Nav.Link href="#action1" style={{fontSize:'1.3rem'}}>About</Nav.Link>
            <Nav.Link href="#action2" style={{fontSize:'1.3rem'}}>Experience </Nav.Link>
            <Nav.Link href="#action2" style={{fontSize:'1.3rem'}}>Projects </Nav.Link>
            <Nav.Link href="#action2" style={{fontSize:'1.3rem'}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
        
     );
}
 
export default NavBar;