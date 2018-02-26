import {Navbar, Nav, NavItem} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"
import React from "react";


export default function Navigation(props) {
    console.log(props);
    console.log(typeof props.match.path)
    return (
        <Navbar inverse collapseOnSelect id="custom-nav">
      <Navbar.Header>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
            {props.match.path !== "/" &&
                <LinkContainer to="/"><NavItem eventKey={2} href="#">
                    Home
                </NavItem></LinkContainer>
            }
            {props.match.path !== "/login" &&
                <LinkContainer to="/login"><NavItem eventKey={1} href="#">
                    Login
                </NavItem></LinkContainer>
            }
            {props.match.path !== "/signup" &&
                <LinkContainer to ="/signup"><NavItem eventKey={3} href="#">
                    Sign up
                </NavItem></LinkContainer>
            }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)
}
