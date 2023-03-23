
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{borderRadius:'5px' ,border:'2px solid blue',margin:'5px 0'}}>
        <Container>
          <Navbar.Brand href="/">ICC-Worldcup</Navbar.Brand>
          <Nav className="me-auto">
           <Nav.Link href="/">Home</Nav.Link> 
             
           <Nav.Link href="/ground">Ground</Nav.Link>
            <Nav.Link href="/Price">Price</Nav.Link>

            
          </Nav>
        </Container>
      </Navbar >
      
    </>
  );
}

export default ColorSchemesExample;