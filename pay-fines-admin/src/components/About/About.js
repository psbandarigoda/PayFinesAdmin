import React, {Component} from "react";
import TopNavbar from "../include/topNavBar.component";
import "../include/style.css";
import "./About-Style.css";
import SecondNavBar from "../include/SecondNavBar";


export default class About extends Component {


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


                        <div> <h5> <u> About This Application </u> </h5> </div>

                     <div>
                         <p> </p>
                         <h1 align='center' style={{color: "#0040ff"}}>  Automated Traffic Fine Payment System  </h1>
                         <h2 align = 'center'> Sri Lanka Police Department</h2>
                         <h3 align = 'center'> <marquee> Sri Lanka Police Traffic Work Management </marquee> </h3>
                     </div>
                         <div>


                             <ul>
                         <li><h5> The application was developed by targetting the Sri Lankan pplice officers to ease their activities with the traffic department section. </h5> </li>
                         <li> <h5> The main purpose of implementing this system is the inefficient working processes and the time wastage with the existing methods. </h5> </li>

                                 <li> <h5>  The system helps to elieminate the folowing discrepencies </h5> </li>
                                 <ol>
                                  <li> <h6> New visits to the police station to collect the license. </h6></li>
                                 <li> <h6> Waiting in the long queues at the post office to pay the fine amount. </h6></li>
                                     <li> <h6> Inabilities to pay the fine amount during "Poya" days and Public holidays.</h6></li>
                                  </ol>
                             </ul>
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
