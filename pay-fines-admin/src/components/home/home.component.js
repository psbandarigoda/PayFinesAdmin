import React, {Component} from "react";
import {MDBBtn, MDBIcon, MDBMask} from "mdbreact";


import "../include/style.css";

export default class UserLogin extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>
                <div className="bg">
                    <div className="col-md-6">
                        <MDBMask className="flex-center flex-column text-white text-center">
                            <span className="space-5"></span>
                            <h2 className="h1 display-3">Welcome, to Sri Lanka Police</h2>
                            <br/>
                            <h5 className="col-md-10">CCT is a free open source tool that analyse the complexity of your
                                source code
                                right away , without any extra setup. It also store code files for future mesurments
                                detection.</h5>
                            <br/>
                            <MDBBtn outline color="white" className="mb-5" href="/fines"><MDBIcon icon="clone"
                                                                                                  className="mr-2"></MDBIcon>Start</MDBBtn>
                        </MDBMask>
                    </div>
                </div>

            </div>
        );
    }

}
