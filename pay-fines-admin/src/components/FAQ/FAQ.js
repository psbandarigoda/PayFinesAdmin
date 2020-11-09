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

                        <h2>Frequently Asked Questions</h2>

                        <div class="accordion">
                            <div class="accordion-item">
                                <a>What can JavaScript Do?</a>
                                <div class="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <a>How JavaScript Can Modify HTML and CSS Values?</a>
                                <div class="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <a>What Is SVG?</a>
                                <div class="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <a>Is FAQ Section Matters In Website?</a>
                                <div class="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <a>How To Create a Light FAQ Element?</a>
                                <div class="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
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
