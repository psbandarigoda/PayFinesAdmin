import React, {Component} from "react";
import TopNavbar from "../include/topNavBar.component";
import "../include/style.css";
import "./Contact-Style.css";
import SecondNavBar from "../include/SecondNavBar";


export default class Contact extends Component {


    constructor(props) {
        super(props);

        this.state = {}

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
                <h2><span className="turquoise">Contact</span> Information</h2>
                <div id="contact" className="form-3">
                    <div className="row">
                        <div className="col-3">
                            <div className="card">
                                <div className="card-header">  Hikkaduwa </div>
                                <div className="card-body">
                                    <p> Email: hikkaduwa@police.lk </p>
                                    <p> Phone : 0912269876 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-header">  Hikkaduwa </div>
                                <div className="card-body">
                                    <p> Email: hikkaduwa@police.lk </p>
                                    <p> Phone : 0912269876 </p>
                                </div>
                            </div>                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-header">  Hikkaduwa </div>
                                <div className="card-body">
                                    <p> Email: hikkaduwa@police.lk </p>
                                    <p> Phone : 0912269876 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-header">  Hikkaduwa </div>
                                <div className="card-body">
                                    <p> Email: hikkaduwa@police.lk </p>
                                    <p> Phone : 0912269876 </p>
                                </div>
                            </div>
                        </div>
                    </div><br/>

                    <div className="row">
                        <div className="col-3">
                            <div className="card">
                                <div className="card-header">  Hikkaduwa </div>
                                <div className="card-body">
                                    <p> Email: hikkaduwa@police.lk </p>
                                    <p> Phone : 0912269876 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-header">  Hikkaduwa </div>
                                <div className="card-body">
                                    <p> Email: hikkaduwa@police.lk </p>
                                    <p> Phone : 0912269876 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-header">  Hikkaduwa </div>
                                <div className="card-body">
                                    <p> Email: hikkaduwa@police.lk </p>
                                    <p> Phone : 0912269876 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-header">  Hikkaduwa </div>
                                <div className="card-body">
                                    <p> Email: hikkaduwa@police.lk </p>
                                    <p> Phone : 0912269876 </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/**/}
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
}
