import React, { Component } from "react";
import withRouter, { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
    MDBDropdownItem, MDBIcon, MDBBtn,

} from "mdbreact";
import NavLink from "react-bootstrap";

export default class SecondNavBar extends Component {

    fineLink = false;
    fineMoreDetailsLink = false;
    officerLink = false;
    rulesLink = false;
    aboutLink = false;
    contactLink = false;
    FAQLink = false;

    state = {
        isOpen: false
    };

    constructor(props) {
        super(props);
        console.log("link: --- "+window.location.pathname);
        if(window.location.pathname === "/fines"){
            this.fineLink = true;
        }else if(window.location.pathname === "/fineMoreDetails"){
            this.fineMoreDetailsLink = true;
        }else if(window.location.pathname === "/officer"){
            this.officerLink = true;
        }else if(window.location.pathname === "/fineMoreDetails"){
            this.rulesLink = true;
        }else if(window.location.pathname === "/about"){
            this.aboutLink = true;
        }else if(window.location.pathname === "/contact"){
            this.contactLink = true;
        }else if(window.location.pathname === "/faq"){
            this.FAQLink = true;
        }

    }



    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };
    render() {
        if (localStorage.getItem('status')) {
            return (
                <MDBNavbar color="blue-grey" dark expand="md" className="container-fluid">
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem className="col-md-3">
                                <MDBBtn href="/fines" className="col-md-12 btn-round mr-1 btn btn-info">Home
                                    <MDBIcon icon="home"/></MDBBtn>
                            </MDBNavItem>
                            <MDBNavItem className="col-md-4">
                            </MDBNavItem>
                            <MDBNavItem/>
                            <MDBNavLink className="col-md-2" to="/fines" active={this.fineLink}>Fines</MDBNavLink>
                            <MDBNavLink className="col-md-4" to='/fineMoreDetails' active={this.fineMoreDetailsLink}>Fine'sMoreDetails</MDBNavLink>
                            <MDBNavLink className="col-md-2" to="/officer" active={this.officerLink}>Officer</MDBNavLink>
                            {/*<MDBNavLink className="col-md-2" to='/Contact' active={false}>Rules</MDBNavLink>*/}
                            <MDBNavLink className="col-md-2" to='/about' active={this.aboutLink}>About</MDBNavLink>
                            <MDBNavLink className="col-md-2" to='/contact' active={this.contactLink}>Contact</MDBNavLink>
                            <MDBNavLink className="col-md-2" to='/faq' active={this.FAQLink}>FAQ</MDBNavLink>
                        </MDBNavbarNav>
                        <MDBNavbarNav >

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
