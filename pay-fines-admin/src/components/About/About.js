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

                        <h2>About</h2>




                    </div>

                </div>

                {/**/}
                <br/>
                <br/>
            </div>
        );
    }
}
