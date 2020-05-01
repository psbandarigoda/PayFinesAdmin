import {Component} from "react";


export default class Fines extends Component{


    render() {
        return (
            <>
                <div className="container border-bottom">
                    <h4>Analysis report for {this.state.file.fileName}</h4>
                    <MDBTable bordered>
                        <MDBTableHead>
                            <tr className="bg-dark text-light">
                                <th>Line #</th>
                                <th>Statement</th>
                                <th>Tokens under the size</th>
                                <th>Cs</th>
                                <th>Ctc</th>
                                <th>Cnc</th>
                                <th>Ci</th>
                                <th>TW</th>
                                <th>Cps</th>
                                <th>Cr</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {this.state.results.map((result, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{result.statement}</td>
                                        <td>{result.tokensOnStatmentSize}</td>
                                        <td>{result.cs}</td>
                                        <td>{result.ctc}</td>
                                        <td>{result.cnc}</td>
                                        <td>{result.ci}</td>
                                        <td>{result.tw}</td>
                                        <td>{result.cps}</td>
                                        <td>{result.cr}</td>

                                    </tr>
                                )
                            )}
                            <tr className='bg-success'>
                                <td></td>
                                <td><h6>Cp</h6></td>
                                <td></td>
                                <td>{this.state.totalCs}</td>
                                <td>{this.state.totalCtc}</td>
                                <td>{this.state.totalCnc}</td>
                                <td>{this.state.totalCi}</td>
                                <td>{this.state.totalTW}</td>
                                <td>{this.state.totalCps}</td>
                                <td>{this.state.totalCr}</td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                </div>
            </>
        )
    }
}