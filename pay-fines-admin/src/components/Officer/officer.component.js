import React, {Component} from "react";
import "../include/style.css";
import app from "../firebase/firebase";
import swal from "sweetalert";
import {Nav, Navbar} from "react-bootstrap";
import NavLink from "react-bootstrap/NavLink";
import {MDBBtn} from "mdbreact";
import TopNavbar from "../include/topNavBar.component";
import SecondNavBar from "../include/SecondNavBar";

const Employee = props => (
    <tr>
        <td>{props.employee.name}</td>
        <td>{props.employee.password}</td>
        <td>{props.employee.contactNo}</td>
        <td className='align-content-center'>
            <div className='btn-group'>
                <button type="button" onClick={props.editEmployee} className='btn btn-primary'><i
                    className="fa fa-edit"></i></button>
                <button type="button" onClick={props.deleteEmployee} className='btn btn-danger'><i
                    className="fa fa-trash"></i></button>
            </div>
        </td>
    </tr>
);

export default class Officer extends Component {
    constructor(props) {
        super(props);

        this.employeeRef = app.database().ref("Officers");

        this.state = {
            id: '',
            name: '',
            password: '',
            contactNo: '',

            employees: [],

            action: 'add'
        }
    }

    componentDidMount() {
        this.loadAllEmployees();
        /*
      if(!localStorage.getItem('status')){
        this.props.history.push("/login")
      }
         */
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    flushData = (e) => {
        this.setState({
            id: '',
            name: '',
            password: '',
            contactNo: '',
        })
    }

    loadAllEmployees = () => {
        this.employeeRef.on('value', (snapshot) => {
            let outEmployees = snapshot.val();
            let newEmployees = [];

            for (let employee in outEmployees) {
                newEmployees.push({
                    id: employee,
                    name: outEmployees[employee].name,
                    password: outEmployees[employee].password,
                    contactNo: outEmployees[employee].contactNo
                })
            }

            this.setState({
                employees: newEmployees
            })
        })
    }

    onSubmitDetails = (e) => {
        e.preventDefault();

        const newEmployee = {
            name: this.state.name,
            password: this.state.password,
            contactNo: this.state.contactNo
        }

        if (this.state.action === 'add') {

            const newKey = this.employeeRef.push().key;

            this.employeeRef.child(this.state.id).set(newEmployee)
                .then(res => {
                    swal("Success", "Employee details recorded !", "success");
                    this.flushData();
                })
                .catch(err => {
                    console.log(err);
                });

        } else if (this.state.action === 'edit') {

            console.log(this.state.id);

            this.employeeRef.child(this.state.id).update(newEmployee)
                .then(res => {
                    swal("Success", "Employee details updated !", "success");
                    this.flushData();
                    this.setState({
                        action: 'add'
                    })
                })
                .catch(err => {
                    swal("Warning", "Officer Reg.No Empty !", "warning");
                    this.flushData();
                    console.log(err);
                })
        }
    }

    onEditEmployee = (index, obj, e) => {
        this.setState({
            action: 'edit',
            id: obj.id,
            name: obj.name,
            password: obj.password,
            contactNo: obj.contactNo
        })
    }

    onDeleteEmployee = (index, obj, e) => {

        swal({
            title: "Delete",
            text: "Are you sure you want to delete this employee record ?",
            icon: "info",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    this.employeeRef.child(obj.id).remove()
                        .then(res => {
                            swal("Success", "Employee details deleted ! ", "success");
                            this.flushData();
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
            });
    }

    employeeList = () => {
        return this.state.employees.map((currentEmployee, i) => {
            return <Employee employee={currentEmployee} key={i}
                             editEmployee={this.onEditEmployee.bind(this, i, currentEmployee)}
                             deleteEmployee={this.onDeleteEmployee.bind(this, i, currentEmployee)}/>
        })
    }

    render() {
        return (
            <div class="container-fluid">
                <div className="row">
                    <TopNavbar/>
                    <SecondNavBar/>
                </div>
                {/*<div className="row">*/}
                {/*    <Navbar brand='React-Bootstrap' className="container-fluid">*/}
                {/*        <Nav>*/}
                {/*            <MDBBtn href="/fines" className="col-md-2 btn btn-sm btn-outline-secondary">Home</MDBBtn>*/}
                {/*            <NavLink className="col-md-6" style={{fontSize:"large", fontWeight: "bold"}}>Traffic Officers Details</NavLink>*/}
                {/*            <NavLink href="/fines">Fines</NavLink>*/}
                {/*            <NavLink href='/fineMoreDetails'>Fine'sMoreDetails</NavLink>*/}
                {/*            <NavLink href="/officer" style={{fontWeight: "bold"}}>Officer</NavLink>*/}
                {/*            <NavLink to='/#'>Rules</NavLink>*/}
                {/*            <NavLink to='/#'>Contact</NavLink>*/}
                {/*            <NavLink to='/Contact'>Contact</NavLink>*/}
                {/*            <NavLink to='/Contact'>Contact</NavLink>*/}
                {/*        </Nav>*/}
                {/*    </Navbar>*/}
                {/*</div>*/}
                <br/>
                <h3 ><span className="turquoise">Officers' Administrating </span></h3>
                <br/>


                <div class="row">
                    <div class="col-4">
                        <form className='form-group container' onSubmit={this.onSubmitDetails}>
                            <input id="id" onChange={this.handleChange} value={this.state.id} type="text"
                                   placeholder="reg.no" className='form-control'/>
                            <br/>
                            <input id="name" onChange={this.handleChange} value={this.state.name} type="text"
                                   placeholder="name" className='form-control'/>
                            <br/>
                            <input id="password" onChange={this.handleChange} value={this.state.password} type="text"
                                   placeholder="password" className='form-control'/>
                            <br/>
                            <input id="contactNo" onChange={this.handleChange} value={this.state.contactNo} type="text"
                                   placeholder="contactNo" className='form-control'/>
                            <br/>

                            {this.state.action === 'add' ?
                                <input type="submit" className="btn btn-secondary" value="Submit Details"/>
                                :
                                <input type="submit" className="btn btn-primary" value="Update Details"/>
                            }

                        </form>
                    </div>
                    <div class="col-8">
                        <div className='container'>
                            <table className="table table-bordered table-hover">
                                <thead>
                                <tr className="bg-dark text-light">
                                    <th> Name</th>
                                    <th> Password</th>
                                    <th> ContactNo</th>
                                    <th> Action</th>

                                </tr>
                                </thead>
                                <tbody>
                                {this.employeeList()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        )

    }

}
