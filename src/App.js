import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Container, Nav, Form, Navbar, NavDropdown, Button, Row, Col, FormControl} from 'react-bootstrap';
import axios from 'axios';

function runCompiler(e)  {
  
  
  e.preventDefault();
  let data = document.getElementById("compiler").value;
  const result = document.getElementById('resultDiv');
  // const data = JSON.stringify(data1);
  console.log(data);
  axios.post('http://localhost:3000/compiler', {
      sourcecode: data
    
  })
      .then((response) => {
        var element = document.getElementById('result');
        element.innerHTML = response.data;
        console.log(element);
        result.appendChild(element);
       
      
    }, (error) => {
        console.log(error);

        result.appendChild("error with compilation")
    });
}

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">A-eye</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Statical Models</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Data Science Tools</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    <header className="App-header">
        <div id = "wrapper">
          <Container>
            <Row>
              <Col>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                      <div className="form-group">
                          <label htmlFor="exampleFormControlTextarea1">
                          CodeBox
                          </label>
                          <textarea
                          className="form-control"
                          id="compiler"
                          rows="25"
                          cols="80"
                          />
                      </div>
                      <div className="text-center">
                        <Button variant="primary" type="submit" justify-content= "center" onClick={runCompiler}>
                          Submit
                        </Button>
                      </div>
                      
                  </Form.Group>
                </Form>
              </Col>
              <Col>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                      <div className="form-group">
                          <label htmlFor="exampleFormControlTextarea1">
                          Result
                          </label>
                          
                          <div id="resultDiv">
                            <p style={{color: "red"}} id="result"></p>
                          </div>
                          
                      </div>
                      
                      
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </div>
  );
}
                        
export default App;
