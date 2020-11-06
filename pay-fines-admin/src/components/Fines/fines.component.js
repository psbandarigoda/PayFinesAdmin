import React, {Component} from "react";
import app from "../firebase/firebase";
import swal from "sweetalert";
import "../include/style.css";
import {MDBBtn, MDBIcon} from "mdbreact";
import {Nav, Navbar} from 'react-bootstrap';
import NavLink from "react-bootstrap/NavLink";
import TopNavbar from "../include/topNavBar.component";
import * as Route from "react-router-dom";
import FineMoreDetails from "../FineMoreDetails/FineMoreDetails.component";
import * as queryString from "@babel/core";

const FinesTable = props => (
    <tr>
        <td>{props.finesTable.dl}</td>
        <td>{props.finesTable.name}</td>
        <td>{props.finesTable.officerId}</td>
        <td>{props.finesTable.total}</td>
        <td>{props.finesTable.status}</td>
        <td className='align-content-center'>
            <div className='btn-group'>
                <div><NavLink href={'/fineMoreDetails?id=' + props.finesTable.dl}>
                <button type="button" onClick={props.viewFines} className='btn btn-primary'><i
                    className="fa fa-eye"></i></button></NavLink></div>
                <div style={{marginTop:9}}><button type="button" onClick={props.deleteFines} className='btn btn-danger'><i
                    className="fa fa-trash"></i></button></div>
            </div>
        </td>
    </tr>
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

const singleFines = {
    id: '',
    dl: '',
    name: '',
    officerId: '',
    total: '',
    status: '',

    fines: [],

    action: 'add'
}

const options = [{key: 1, text: 'Choice 1', value: 1}, {key: 2, text: 'Choice 2', value: 2}]


export default class Fines extends Component {

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

            fines: [],

            action: 'add',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
    }

    componentDidMount() {
        this.loadAllFines();
        /*
      if(!localStorage.getItem('status')){
        this.props.history.push("/login")
      }
         */
    }

    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.id]: e.target.value
    //     })
    // }
    //
    // flushData = (e) => {
    //     this.setState({
    //         id: '',
    //         firstName: '',
    //         lastName: '',
    //         address: '',
    //     })
    // }

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

            console.log("vvvvvvvvvvvvvvvv: " + this.state.value);


            for (let fines in outFines) {
                if (outFines[fines].dl === this.state.value) {
                    console.log("ccccc: " + outFines[fines].dl + "===" + this.state.value);
                    newFines.push({
                        id: fines,
                        dl: outFines[fines].dl,
                        name: outFines[fines].name,
                        officerId: outFines[fines].officerId,
                        total: outFines[fines].total,
                        status: outFines[fines].status
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

    searchByOfficer = () => {
        this.finesRef.on('value', (snapshot) => {
            let outFines = snapshot.val();
            let newFines = [];

            console.log("officer id reseave: " + this.state.officer);


            for (let fines in outFines) {
                if (outFines[fines].officerId === this.state.officer) {
                    console.log("check 2 : " + outFines[fines].officerId + "===" + this.state.officer);
                    newFines.push({
                        id: fines,
                        dl: outFines[fines].dl,
                        name: outFines[fines].name,
                        officerId: outFines[fines].officerId,
                        total: outFines[fines].total,
                        status: outFines[fines].status
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

    searchByPaidStatus = () => {
        this.finesRef.on('value', (snapshot) => {
            let outFines = snapshot.val();
            let newFines = [];

            console.log("paid status: " + this.state.paidStatus);


            for (let fines in outFines) {
                if (outFines[fines].status === this.state.paidStatus) {
                    console.log("check 2 : " + outFines[fines].status + "===" + this.state.paidStatus);
                    newFines.push({
                        id: fines,
                        dl: outFines[fines].dl,
                        name: outFines[fines].name,
                        officerId: outFines[fines].officerId,
                        total: outFines[fines].total,
                        status: outFines[fines].status
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

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleChange2(event) {
        this.setState({officer: event.target.value});
    }

    handleChange3(event) {
        this.setState({paidStatus: event.target.value});
    }

    // onSubmitDetails = (e) => {
    //     e.preventDefault();
    //
    //     const newEmployee = {
    //         firstName: this.state.firstName,
    //         lastName: this.state.lastName,
    //         address: this.state.address
    //     }
    //
    //     if (this.state.action === 'add') {
    //
    //         const newKey = this.finesRef.push().key;
    //
    //         this.finesRef.child(newKey).set(newEmployee)
    //             .then(res => {
    //                 swal("Success", "Employee details recorded !", "success");
    //                 this.flushData();
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //             });
    //
    //     } else if (this.state.action === 'edit') {
    //
    //         console.log(this.state.id);
    //
    //         this.finesRef.child(this.state.id).update(newEmployee)
    //             .then(res => {
    //                 swal("Success", "Employee details updated !", "success");
    //                 this.flushData();
    //                 this.setState({
    //                     action: 'add'
    //                 })
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //             })
    //     }
    // }
    //
    // onEditEmployee = (index, obj, e) => {
    //     this.setState({
    //         action: 'edit',
    //         id: obj.id,
    //         firstName: obj.firstName,
    //         lastName: obj.lastName,
    //         address: obj.address
    //     })
    // }

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

        // Route.NavLink('/fineMoreDetails',FineMoreDetails);

        // this.singleFines = obj;

        // this.singleFines.id = obj.id;
        // this.singleFines.dl = obj.dl;
        // this.singleFines.name = obj.name;
        // this.singleFines.officerId = obj.officerId;
        // this.singleFines.total = obj.total;
        // this.singleFines.status = obj.status;
        // return this.state.fines.map((index, obj) => {
        // return <SingleFine finesTable={obj} key={index}/>
        // })
        // console.log(this.singleFines.total)

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
                <TopNavbar></TopNavbar>
                </div>
                <div className="row">
                    <Navbar brand='React-Bootstrap' className="container-fluid">
                        <Nav>
                            <MDBBtn href="/fines" className="col-md-2 btn btn-sm btn-outline-secondary">Home</MDBBtn>
                            <NavLink className="col-md-6" style={{fontSize:"large", fontWeight: "bold"}}>Fines Details</NavLink>
                            <NavLink href="/fines" style={{fontWeight: "bold"}}>Fines</NavLink>
                            <NavLink href='/fineMoreDetails'>Fine'sMoreDetails</NavLink>
                            <NavLink href="/officer">Officer</NavLink>
                            <NavLink to='/#'>Rules</NavLink>
                            <NavLink to='/#'>About</NavLink>
                            <NavLink to='/Contact'>Contact</NavLink>
                            <NavLink to='/Contact'>FAQ</NavLink>
                        </Nav>
                    </Navbar>
                </div>
                <br/>

                {/**/}
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <form className='form-group container'>
                                <input id="searchDL" onChange={this.handleChange} value={this.state.value} type="text"
                                       placeholder="Driving License" className='form-control'/>
                                <MDBBtn className="btn btn-sm btn-outline-secondary" onClick={this.searchByDl}>
                                    <MDBIcon icon="search"/></MDBBtn>
                                {/*    <input type="submit" className="btn btn-secondary" value="Submit Details"/>*/}
                            </form>
                        </div>
                        <div className="col-3">
                            <form className='form-group container'>
                                <input id="officer" onChange={this.handleChange2} value={this.state.officer} type="text"
                                       placeholder="Officer RegNo" className='form-control'/>
                                <MDBBtn className="btn btn-sm btn-outline-secondary" onClick={this.searchByOfficer}>
                                    <MDBIcon icon="search"/></MDBBtn>
                                {/*    <input type="submit" className="btn btn-secondary" value="Submit Details"/>*/}
                            </form>
                        </div>
                        <div className="col-3">
                            <form className='form-group container'>
                                <input id="paidStatus" onChange={this.handleChange3} value={this.state.paidStatus} type="text"
                                       placeholder="Paid Status" className='form-control'/>
                                <MDBBtn className="btn btn-sm btn-outline-secondary" onClick={this.searchByPaidStatus}>
                                    <MDBIcon icon="search"/></MDBBtn>
                                {/*    <input type="submit" className="btn btn-secondary" value="Submit Details"/>*/}
                            </form>
                        </div>
                        <div className="col-3">
                            <form className='form-group container'>
                                <MDBBtn className="btn btn-sm btn-outline-secondary" onClick={this.loadAllFines}>Sync All
                                    <MDBIcon icon="sync"/></MDBBtn>
                                {/*    <input type="submit" className="btn btn-secondary" value="Submit Details"/>*/}
                            </form>
                        </div>
                    </div>
                </div>
                {/**/}

                <br/>
                <br/>
                <div class="row">
                    {/*    <div class="col">*/}
                    {/*        <form className='form-group container' onSubmit={this.onSubmitDetails}>*/}
                    {/*            <input id="firstName" onChange={this.handleChange} value={this.state.firstName} type="text"*/}
                    {/*                   placeholder="First Name" className='form-control'/>*/}
                    {/*            <br/>*/}
                    {/*            <input id="lastName" onChange={this.handleChange} value={this.state.lastName} type="text"*/}
                    {/*                   placeholder="Last Name" className='form-control'/>*/}
                    {/*            <br/>*/}
                    {/*            <input id="address" onChange={this.handleChange} value={this.state.address} type="text"*/}
                    {/*                   placeholder="Address" className='form-control'/>*/}
                    {/*            <br/>*/}

                    {/*            {this.state.action === 'add' ?*/}
                    {/*                <input type="submit" className="btn btn-secondary" value="Submit Details"/>*/}
                    {/*                :*/}
                    {/*                <input type="submit" className="btn btn-primary" value="Update Details"/>*/}
                    {/*            }*/}

                    {/*        </form>*/}
                    {/*    </div>*/}
                    <div class="col">
                        <div className='container'>
                            <table className="table table-bordered table-hover">
                                <thead>
                                <tr className="bg-dark text-light">
                                    <th> DL</th>
                                    <th> Name</th>
                                    <th> Officer</th>
                                    <th> Total</th>
                                    <th> Status</th>
                                    <th> Action</th>

                                </tr>
                                </thead>
                                <tbody>
                                {this.finesList()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                {/*<div class="row">*/}
                {/*    <table className="table table-bordered table-hover">*/}
                {/*        <thead>*/}
                {/*        <tr className="bg-dark text-light">*/}
                {/*            <th> DL</th>*/}
                {/*            <th> Name</th>*/}
                {/*            <th> Officer</th>*/}
                {/*            <th> Total</th>*/}
                {/*            <th> Status</th>*/}
                {/*            <th> Action</th>*/}

                {/*        </tr>*/}
                {/*        </thead>*/}
                {/*        <tbody>*/}
                {/*        {this.onViewFines()}*/}
                {/*        </tbody>*/}
                {/*    </table>*/}
                {/*   /!*<h5>{this.singleFines}</h5>*!/*/}

                {/*</div>*/}

                {/*<MDBBtn outline color="white" className="mb-5" href="/officer"><MDBIcon icon="clone"*/}
                {/*                                                                        className="mr-2"></MDBIcon>Start</MDBBtn>*/}
            </div>

        );
    }
}
