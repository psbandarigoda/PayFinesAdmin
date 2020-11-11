import React, {Component} from "react";
import swal from "sweetalert";
import {MDBBtn, MDBIcon} from "mdbreact";
import TopNavbar from "../include/topNavBar.component";
import "../include/style.css";
import app from "../firebase/firebase";
import SecondNavBar from "../include/SecondNavBar";


const FinesTable = props => (
    // <tr>
    //     <td>{props.finesTable.dl}</td>
    //     <td>{props.finesTable.name}</td>
    //     <td>{props.finesTable.officerId}</td>
    //     <td>{props.finesTable.total}</td>
    //     <td>{props.finesTable.status}</td>
    //     <td className='align-content-center'>
    //         <div className='btn-group'>
    //             <button type="button" onClick={props.viewFines} className='btn btn-primary'><i
    //                 className="fa fa-eye"></i></button>
    //             <button type="button" onClick={props.deleteFines} className='btn btn-danger'><i
    //                 className="fa fa-trash"></i></button>
    //         </div>
    //     </td>
    // </tr>

        <div className="row">
            <div className="card">
                <div className="card-header">  Fine Details </div>
                <div className="card-body">
                    <p> DL : {props.finesTable.dl} </p>
                    <p> name : {props.finesTable.name} </p>
                    <p> Officer : {props.finesTable.officerId} </p>
                    <p> Total : {props.finesTable.total} </p>
                    <p> Status : {props.finesTable.status} </p>
                    <p> Rules : {props.finesTable.email} </p>
                    <p> Rules : {props.finesTable.rule[1]} </p>
                </div>
            </div>
        </div>
)

const SingleFine = props => (
    <tr>
        <td>{props.finesTable.dl}</td>
        <td>{props.finesTable.name}</td>
        <td>{props.finesTable.officerId}</td>
        <td>{props.finesTable.total}</td>
        <td>{props.finesTable.status}</td>
    </tr>
)

export default class FineMoreDetails extends Component {

    singleFines;
    searchDL;

    constructor(props) {
        super(props);

        this.finesRef = app.database().ref("Fines");

        this.state = {
            id: '',
            dl: '',
            name: '',
            officerId: '',
            total: '',
            status: '',
            rule: [],
            email: '',

            fines: [],

            action: 'add',
        }
        this.handleChange = this.handleChange.bind(this);

    }


    componentDidMount() {
        this.searchByDl();

        let search = this.props.location.search;
        let params = new URLSearchParams(search);
        this.searchDL = params.get('id');
        console.log("res: "+this.searchDL);
    }

    loadAllFines = () => {
        this.finesRef.on('value', (snapshot) => {
            let outFines = snapshot.val();
            let newFines = [];

            for (let fines in outFines) {
                newFines.push({
                    id: fines,
                    dl: outFines[fines].dl,
                    name: outFines[fines].name,
                    officerId: outFines[fines].officerId,
                    total: outFines[fines].total,
                    status: outFines[fines].status
                })
            }

            this.setState({
                fines: newFines
            })
        })
    }

    searchByDl = () => {
        this.finesRef.on('value', (snapshot) => {
            let outFines = snapshot.val();
            let newFines = [];

            for (let fines in outFines) {
                if (outFines[fines].dl === this.searchDL) {
                    newFines.push({
                        id: fines,
                        dl: outFines[fines].dl,
                        name: outFines[fines].name,
                        officerId: outFines[fines].officerId,
                        total: outFines[fines].total,
                        status: outFines[fines].status,
                        email: outFines[fines].email,
                        rule: outFines[fines].rule
                    })
                } else {
                    console.log("empty=====");
                }

            }

            this.setState({
                fines: newFines
            })
        })
    }

    searchByDlCustom = () => {
        this.searchDL = this.state.value;
        this.searchByDl();
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleChange2(event) {
        this.setState({officer: event.target.value});
    }

    handleChange3(event) {
        this.setState({paidStatus: event.target.value});
    }

    onDeleteFines = (index, obj, e) => {

        swal({
            title: "Delete",
            text: "Are you sure you want to delete this Fines record ?",
            icon: "info",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    this.finesRef.child(obj.id).remove()
                        .then(res => {
                            swal("Success", "Fines details deleted ! ", "success");
                            this.flushData();
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
            });
    }

    onViewFines = (index, obj, e) => {

        return this.state.fines.map((index, obj) => {
            return <SingleFine finesTable={obj} key={index}/>
        })
        console.log(this.singleFines.total)

    }

    finesList = () => {
        return this.state.fines.map((currentFines, i) => {
            return <FinesTable finesTable={currentFines} key={i}
                               deleteFines={this.onDeleteFines.bind(this, i, currentFines)}
                               viewFines/>
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <TopNavbar/>
                    <SecondNavBar/>

                </div>
                {/*<div className="row">*/}
                {/*    <Navbar brand='React-Bootstrap' className="container-fluid">*/}
                {/*        <Nav>*/}
                {/*            <MDBBtn href="/fines" className="col-md-2 btn btn-sm btn-outline-secondary">Home</MDBBtn>*/}
                {/*            <NavLink className="col-md-6" style={{fontSize:"large", fontWeight: "bold"}}>Fines Details</NavLink>*/}
                {/*            <NavLink href="/fines">Fines</NavLink>*/}
                {/*            <NavLink href='/fineMoreDetails' style={{fontWeight: "bold"}}>Fine'sMoreDetails</NavLink>*/}
                {/*            <NavLink href="/officer">Officer</NavLink>*/}
                {/*            <NavLink to='/#'>Rules</NavLink>*/}
                {/*            <NavLink to='/#'>Contact</NavLink>*/}
                {/*            <NavLink to='/Contact'>Contact</NavLink>*/}
                {/*            <NavLink to='/Contact'>Contact</NavLink>*/}
                {/*        </Nav>*/}
                {/*    </Navbar>*/}
                {/*</div>*/}
                <br/>

                {/**/}
                <h3 style={{"marginBottom":"30"}}><span className="turquoise">Find More Details</span> of Fine</h3>
                <br/>

                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <div className="card-header"> Search By Fine ID </div>
                                <div className="card-body">
                                <input id="searchDL" onChange={this.handleChange} value={this.state.value} type="text"
                                       placeholder="Driving License"/>
                                <MDBBtn className="btn-round mr-1 btn btn-default" onClick={this.searchByDlCustom}>
                                    <MDBIcon icon="search"/></MDBBtn>
                                {/*    <input type="submit" className="btn btn-secondary" value="Submit Details"/>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br/>

                {/**/}
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="container">
                            {this.finesList()}
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
        );
    }
}
