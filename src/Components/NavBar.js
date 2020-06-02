import React from 'react'
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import logo from '../images/logo.png'

// document.addEventListener('DOMContentLoaded', function() {
//     // When the event DOMContentLoaded occurs, it is safe to access the DOM
  
//     // When the user scrolls the page, execute myFunction 
//     window.addEventListener('scroll', myFunctionForSticky);
  
//     // Get the navbar
//     var navbar = document.getElementById("myHeader");
  
//     // Get the offset position of the navbar
//     var sticky = navbar.offsetTop;
  
//     // Add the sticky class to the navbar when you reach its scroll position. 
//     // Remove "sticky" when you leave the scroll position
  
//     function myFunctionForSticky() {
//       if (window.pageYOffset >= sticky) {
//         console.log("window.pageYOffset >= sticky");
//       } else {
//         console.log("Not window.pageYOffset >= sticky");
//       }
//       if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky");
//       } else {
//         navbar.classList.remove("sticky");
//       }
//     }
  
//     /*Toggle between adding and removing the "responsive" class to topnav
//     when the user clicks on the icon*/
  
//     function myFunctionForResponsive() {
//       navbar.classList.toggle('responsive');
//     }
//   })

export default function NavBar() {
    return (
        <div className="App">
            <div class="header" id="myHeader"> 
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/Homepage">
                        <img src={logo} style={{width:80, marginTop: -1}} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-dropdown" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link className="text-white" href="/Homepage">Home</Nav.Link>
                        <NavDropdown bsPrefix="navd" title="Lessons" id="nav-dropdown">
                            <LinkContainer to = "/Stats">
                                <NavDropdown.Item>
                                    Statical Models
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to = "/SQL">
                                <NavDropdown.Item>
                                    SQL
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to = "/Python">
                                <NavDropdown.Item>
                                    Python:Pandas
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to = "/Tensorflow">
                                <NavDropdown.Item>
                                    Tensorflow
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to = "/R">
                                <NavDropdown.Item>
                                    R
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to = "/MLModels">
                                <NavDropdown.Item>
                                    Machine Learning Models
                                </NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
        
    )
}
