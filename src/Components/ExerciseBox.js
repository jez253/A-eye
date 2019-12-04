import React from 'react'
import axios from 'axios'
import {  Form, Button, Container, Row, Col, Card} from 'react-bootstrap';

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

export default function ExerciseBox() {
    return (
        <div>
            <Container>
            <Card style={{color: "black", width: "100%"}} body>This is some text within a card body.</Card>
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
    )
}
