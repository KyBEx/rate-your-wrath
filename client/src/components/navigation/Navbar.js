import {Navbar, Nav, NavItem} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"
import React from "react";


export default function Navigation(props) {
    return (
        <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">Rate Your Wrath</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Login
          </NavItem>
          <NavItem eventKey={2} href="#">
            Sign up
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}
