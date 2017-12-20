import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"
import React from "react";
import "./style.css";

export default function Navigation(props) {
    return (
      <Navbar className="nav" inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to ="/"><NavItem eventKey={1} href="#">Home</NavItem></LinkContainer>
            <LinkContainer to ="/blog"><NavItem eventKey={2} href="#">Blog</NavItem></LinkContainer>
          </Nav>
         </Navbar.Collapse>
      </Navbar>
  )
}
