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
                                <div className="card-header">  GALLE </div>
                                <div className="card-body">
                                    <p> Email: gallemain@police.lk </p>
                                    <p> Phone : 0912222223 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-header">  HIKKADUWA </div>
                                <div className="card-body">
                                    <p> Email: hikkaduwa@police.lk </p>
                                    <p> Phone : 0912222224 </p>
                                </div>
                            </div>                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-header">  BADDEGAME </div>
                                <div className="card-body">
                                    <p> Email: baddegama22@police.lk </p>
                                    <p> Phone : 0912222225 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-header">  HABARADUWA </div>
                                <div className="card-body">
                                    <p> Email: habaraduwa@police.lk </p>
                                    <p> Phone : 0912222226 </p>
                                </div>
                            </div>
                        </div>
                    </div><br/>

                    <div className="row">
                        <div className="col-3">
                            <div className="card">
                                <div className="card-header">  AMBALANGODA </div>
                                <div className="card-body">
                                    <p> Email: ambalangoda@police.lk </p>
                                    <p> Phone : 0912222227 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-header">  MAPALAGAME </div>
                                <div className="card-body">
                                    <p> Email: mapalagame@police.lk </p>
                                    <p> Phone : 0912222228 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-header">  NAGODA </div>
                                <div className="card-body">
                                    <p> Email: nagoda@police.lk </p>
                                    <p> Phone : 0912222229 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-header">  PODDALA </div>
                                <div className="card-body">
                                    <p> Email: poddala@police.lk </p>
                                    <p> Phone : 0912222230 </p>
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
