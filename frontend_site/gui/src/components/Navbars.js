 
import React from 'react'

import {Nav, Navbar, Form, FormControl,Button,ButtonGroup, Container, Col, Row, Image,ButtonToolbar} from 'react-bootstrap'
// import {Link} from 'react-router-dom' problem here !
import aoc from './images/aoc.png'

export default function Navbars() {
    return (
        <div>
        <Navbar  expand="lg">
        <Container>   

        <Navbar.Brand  href="/homepage">
         <Image src={aoc} style={{width: '200px', }} rounded />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{color: '#38ef7d'}}>
            <Nav.Link style={{fontWeight: 'bold',fontSize: '1.2rem'}} href="/homepage">Home</Nav.Link>
            <Nav.Link style={{fontWeight: 'bold', fontSize: '1.2rem'}} href="/about">About</Nav.Link>
            <Nav.Link style={{fontWeight: 'bold', fontSize: '1.2rem'}} href="#link">Concat</Nav.Link>
            <Nav.Link style={{fontWeight: 'bold', fontSize: '1.2rem'}} href="/gallery">gallery</Nav.Link>
        </Nav>     
        <ButtonToolbar>
                <Button  className="mr-3" style={{ fontWeight: 'bold', color:'#777'}} variant="light" size="lg" >Login</Button>
                <Button  style={{ fontWeight: 'bold'}} variant="outline-success" size="lg">Register</Button>
            </ButtonToolbar>
            {/* <ButtonToolbar>
            <Button  style={{ fontWeight: 'bold'}} variant="light" size="lg" >Login</Button>
            <Button style={{ fontWeight: 'bold'}} variant="outline-success">Register</Button>


            </ButtonToolbar> */}
       </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}
