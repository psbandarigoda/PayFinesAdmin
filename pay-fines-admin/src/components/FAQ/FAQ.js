import React, {Component} from "react";
import TopNavbar from "../include/topNavBar.component";
import "../include/style.css";
import "./FAQ-Style.css";
import SecondNavBar from "../include/SecondNavBar";


export default class FAQ extends Component {


    constructor(props) {
        super(props);

        this.state = {

        }

    }


    componentDidMount() {

    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <TopNavbar/>
                    <SecondNavBar/>

                </div>
                <br/>

                {/**/}
                <div className="container">
                    <div className="row">


                        <p> </p>

                        <div class="accordion">
                            <div class="accordion-item">
                                <h4> <b> 1.	How to add a new police officer into the system?</b> </h4>
                                <div class="content">
                                    <p> 1.1	Go to the “Officer” tab.<br/>
                                        1.2	Fill the details<br/>
                                        1.3	Click “SUBMIT DETAILS”</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h4> <b> 2.	How to remove a police officer from the system? </b> </h4>
                                <div class="content">
                                    <p> 2.1	Go to the “Officer” tab.<br/>
                                        2.2	Click “Delete” button.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h4> <b> 3.	How to edit details of an officer? </b> </h4>
                                <div class="content">
                                    <p>3.1	Go to the “Officer” tab.<br/>
                                        3.2	Click “Edit” button.
                                    </p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h4><b> 4.	How to change my password? </b> </h4>
                                <div class="content">
                                    <p>4.1	Go to the “Officer” tab.<br/>
                                        4.2	Click “Edit” button.

                                    </p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h4> <b> 5.	How to view more details about fine details.? </b> </h4>
                                <div class="content">
                                    <p> 5.1 Go to the "Fines" Tab. <br/>
                                        5.2 Click on the view button.
                                    </p>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>

                {/**/}
                <br/>
                <br/>
            </div>
        );
    }
}
