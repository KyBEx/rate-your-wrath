import {Navbar, Nav, NavItem} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"
import React from "react";


export default function Navigation(props) {
    return (
        <Navbar inverse collapseOnSelect id="custom-nav">
      <Navbar.Header>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer to="/login"><NavItem eventKey={1} href="#">
            Login
          </NavItem></LinkContainer>
          <LinkContainer to ="/signup"><NavItem eventKey={2} href="#">
            Sign up
          </NavItem></LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}
