import React, { Component } from "react";
import {
  MDBMask,MDBBtn,MDBIcon
} from "mdbreact";


import app from '../firebase/firebase';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Background from '../include/images/cct_background.jpg';

import "../include/style.css";
import swal from "sweetalert";

const Employee = props => (
    <tr>
        <td>{props.employee.firstName}</td>
        <td>{props.employee.lastName}</td>
        <td>{props.employee.address}</td>
        <td className='align-content-center'>
            <div className='btn-group'>
                <button type = "button" onClick={props.editEmployee} className='btn btn-primary'><i className="fa fa-edit"></i></button>
                <button type = "button" onClick={props.deleteEmployee} className='btn btn-danger'><i className="fa fa-trash"></i></button>
            </div>
        </td>
    </tr>
)

export default class UserLogin extends Component {

    constructor(props) {
        super(props);

        this.employeeRef = app.database().ref("employee");

        this.state = {
            id : '',
            firstName : '',
            lastName : '',
            address : '',

            employees : [],

            action : 'add'
        }
    }

    componentDidMount(){
        this.loadAllEmployees();
              /*
            if(!localStorage.getItem('status')){
              this.props.history.push("/login")
            }
               */
     }

    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    flushData = (e) =>{
        this.setState({
            id : '',
            firstName : '',
            lastName : '',
            address : '',
        })
    }

    loadAllEmployees = () =>{
        this.employeeRef.on('value',(snapshot)=>{
            let outEmployees = snapshot.val();
            let newEmployees = [];

            for( let employee in outEmployees ){
                newEmployees.push({
                    id : employee,
                    firstName : outEmployees[employee].firstName,
                    lastName : outEmployees[employee].lastName,
                    address : outEmployees[employee].address
                })
            }

            this.setState({
                employees : newEmployees
            })
        })
    }

    onSubmitDetails = (e) =>{
        e.preventDefault();

        const newEmployee = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            address : this.state.address
        }

        if( this.state.action === 'add' ){

            const newKey = this.employeeRef.push().key;

            this.employeeRef.child(newKey).set(newEmployee)
                .then(res=>{
                    swal("Success","Employee details recorded !","success");
                    this.flushData();
                })
                .catch(err=>{
                    console.log(err);
                });

        }else if( this.state.action === 'edit' ){

            console.log(this.state.id);

            this.employeeRef.child(this.state.id).update(newEmployee)
                .then(res=>{
                    swal("Success","Employee details updated !","success");
                    this.flushData();
                    this.setState({
                        action : 'add'
                    })
                })
                .catch(err=>{
                    console.log(err);
                })
        }
    }

    onEditEmployee = (index, obj, e ) => {
        this.setState({
            action : 'edit',
            id : obj.id,
            firstName : obj.firstName,
            lastName : obj.lastName,
            address : obj.address
        })
    }

    onDeleteEmployee = (index, obj, e) => {

        swal({
            title: "Warning",
            text: "Are you sure you want to delete this employee record ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    this.employeeRef.child(obj.id).remove()
                        .then(res=>{
                            swal("Success", "Employee details deleted ! ", "success" );
                            this.flushData();
                        })
                        .catch(err=>{
                            console.log(err);
                        })
                }
            });
    }

    employeeList = () =>{
        return this.state.employees.map((currentEmployee, i)=>{
            return <Employee employee = {currentEmployee} key = {i} editEmployee = {this.onEditEmployee.bind(this,i , currentEmployee )} deleteEmployee = {this.onDeleteEmployee.bind(this,i,currentEmployee)}/>
        })
    }

    render() {
        return (

         <div >
           <div className="bg">
              <div className="col-md-6">
                <MDBMask  className="flex-center flex-column text-white text-center">
                  <span className="space-5"></span>
                  <h2 className="h1 display-3">Welcome, to Sri Lanka Police</h2>
                  <br/>
                  <h5 className="col-md-10">CCT is a free open source tool that analyse the complexity of your source code
                    right away , without any extra setup. It also store code files for future mesurments detection.</h5>
                  <br />
                  <MDBBtn outline color="white" className="mb-5"  href="/upload"><MDBIcon icon="clone" className="mr-2"></MDBIcon>Start</MDBBtn>
                </MDBMask>
              </div>
           </div>

             <div class="row">
                 <div class="col">
                     <form className= 'form-group container' onSubmit={this.onSubmitDetails} >
                         <input id = "firstName" onChange={this.handleChange} value = {this.state.firstName} type="text" placeholder="First Name" className='form-control' />
                         <br/>
                         <input id = "lastName" onChange={this.handleChange}  value={this.state.lastName} type="text" placeholder="Last Name" className='form-control' />
                         <br/>
                         <input id = "address" onChange={this.handleChange}  value = {this.state.address} type="text" placeholder="Address" className='form-control' />
                         <br/>

                         {this.state.action === 'add' ?
                             <input type = "submit" className="btn btn-secondary" value="Submit Details"/>
                             :
                             <input type = "submit" className="btn btn-primary" value="Update Details"/>
                         }

                     </form>
                 </div>
                 <div class="col">
                     <div className='container'>
                         <table className="table table-bordered table-hover" >
                             <thead >
                             <tr className="bg-dark text-light">
                                 <th> First Name </th>
                                 <th> Last Name </th>
                                 <th> Address </th>
                                 <th> Action </th>

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
        );
    }

}
