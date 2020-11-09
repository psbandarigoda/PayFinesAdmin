import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../include/style.css";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";
import {Image} from "react-bootstrap";

export default class TopNavbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    if (localStorage.getItem('status')) {
      return (
        <MDBNavbar color="primary-color-dark" dark expand="md" className="container-fluid">
          <MDBNavbarBrand>
            <Image source={('images/sri_lanka_police_logo.png')} />
            <Link to ="/"><strong className="white-text">Sri Lanka Police</strong></Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              {/*<MDBNavItem>*/}
              {/*  <MDBNavLink className="waves-effect waves-light" to="#!">*/}
              {/*    <MDBIcon fab icon="twitter" />*/}
              {/*  </MDBNavLink>*/}
              {/*</MDBNavItem>*/}
              {/*<MDBNavItem>*/}
              {/*  <MDBNavLink className="waves-effect waves-light" to="#!">*/}
              {/*    <MDBIcon fab icon="google-plus-g" />*/}
              {/*  </MDBNavLink>*/}
              {/*</MDBNavItem>*/}
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" />{" "+localStorage.getItem('name')}
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="/logout">Logout</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      );
    }
    else {
      return <div />;
    }
  }
}
