 
import React from 'react'

import {Nav, Navbar,NavDropdown, Form, FormControl,Button,ButtonGroup, Container, Col, Row, Image,ButtonToolbar, DropdownButton, Dropdown} from 'react-bootstrap'
// import {Link} from 'react-router-dom' problem here !
import aoc from '../images/aoc.png'
import {Link} from 'react-router-dom'
export default function Navbars() {
    
    
    return (
        <div>
        {/* <Navbar style={{float: 'right'}}>
         
        </Navbar> */}
        <Navbar  expand="lg" collapseOnSelect expand="lg">
        <Container>   
        <ButtonToolbar>
            <Link to="/login"><Button  className="mr-3" style={{ fontWeight: 'bold', color:'#777'}} variant="light" size="lg"><i className="fas fa-sign-in-alt" style={{padding: '5px'}}></i>دخول </Button></Link>
            <Link to="register"><Button  style={{ fontWeight: 'bold'}} variant="outline-success" size="lg" >سجل الان</Button></Link>
            </ButtonToolbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{color: '#38ef7d'}}>
          <Link to="/faq"><Nav.Link style={{fontWeight: 'bold', fontSize: '1.2rem'}} href="/faq">الاسئلة الاكثر تكرارا</Nav.Link></Link>
           {/* <Link to="/about"><Nav.Link style={{fontWeight: 'bold', fontSize: '1.2rem'}} href="/about">عن الجمعية</Nav.Link></Link>  */}
           <NavDropdown style={{fontWeight: 'bold', fontSize: '1.2rem'}} title="البرامج">
           <Link to="/about"><NavDropdown.Item href="/about">عن الجمعية</NavDropdown.Item></Link>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/mainpageregister">المنح والقروض</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
            <Nav.Link style={{fontWeight: 'bold', fontSize: '1.2rem'}} href="/blog">المدونة</Nav.Link>
            <Link to="/gallery"><Nav.Link style={{fontWeight: 'bold', fontSize: '1.2rem'}} href="/gallery">معرض الصور</Nav.Link></Link>
            <Link to="/students"><Nav.Link style={{fontWeight: 'bold', fontSize: '1.2rem'}} href="/students">طلابنا</Nav.Link></Link>
            <Link style={{textDecoration: 'none'}} to="/homepage"><Nav.Link style={{fontWeight: 'bold',fontSize: '1.2rem'}}>الرئيسية</Nav.Link></Link>

            
         </Nav>    
            <Navbar.Brand  href="/homepage">
                <Link to="/homepage"><Image src={aoc} style={{width: '200px', }} rounded /></Link>
            </Navbar.Brand>
        </Navbar.Collapse>
        </Container>
        <ButtonGroup >
            <DropdownButton as={ButtonGroup} variant="light" title="Language" size="lg">
            <Dropdown.Item>English</Dropdown.Item>
            <Dropdown.Item>Arabic</Dropdown.Item>
        </DropdownButton>
        </ButtonGroup>
    </Navbar>
</div>
    )
}
