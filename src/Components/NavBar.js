import React from 'react'
import { Nav, Form, Navbar, NavDropdown, Button, FormControl} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function NavBar() {
    return (
        <div className="App">
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">A-eye</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Lessons" id="basic-nav-dropdown">
                            <LinkContainer to = "/Exercise"></LinkContainer>
                                <NavDropdown.Item href="#action/3.1">
                                    Statical Models
                                </NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item href="#action/3.2">SQL</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Python:Pandas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Tensorflow</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">R</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">ML Models</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
        
    )
}
