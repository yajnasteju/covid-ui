import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

class BootstrapTable extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Table responsive = { false }
                            bordered striped size = "sm">
                            <tbody>
                            <tr>
                                    <span >
                                        <span class = "col-md" >
                                            <img src="https://www.countryflags.io/in/flat/32.png"></img>
                                        </span>
                                        India
                                    </span>
                                    <p>
                                            <span class="badge badge-warning ml-1">3,343,777</span>
                                            <span class="badge badge-success ml-1">343,777</span>
                                            <span class="badge badge-danger ml-1">123,343</span>
                                    </p>
                                </tr>
                                <tr>
                                    <span >
                                        <span class = "col-md" >
                                            <img src="https://www.countryflags.io/in/flat/32.png"></img>
                                        </span>
                                        India
                                    </span>
                                    <p>
                                            <span class="badge badge-warning ml-1">3,343,777</span>
                                            <span class="badge badge-success ml-1">343,777</span>
                                            <span class="badge badge-danger ml-1">123,343</span>
                                    </p>
                                </tr>
                                <tr>
                                    <span >
                                        <span class = "col-md" >
                                            <img src="https://www.countryflags.io/in/flat/32.png"></img>
                                        </span>
                                        India
                                    </span>
                                    <p>
                                            <span class="badge badge-warning ml-1">3,343,777</span>
                                            <span class="badge badge-success ml-1">343,777</span>
                                            <span class="badge badge-danger ml-1">123,343</span>
                                    </p>
                                </tr>
                                <tr>
                                    <span >
                                        <span class = "col-md" >
                                            <img src="https://www.countryflags.io/in/flat/32.png"></img>
                                        </span>
                                        India
                                    </span>
                                    <p>
                                            <span class="badge badge-warning ml-1">3,343,777</span>
                                            <span class="badge badge-success ml-1">343,777</span>
                                            <span class="badge badge-danger ml-1">123,343</span>
                                    </p>
                                </tr>
                                <tr>
                                    <span >
                                        <span class = "col-md" >
                                            <img src="https://www.countryflags.io/in/flat/32.png"></img>
                                        </span>
                                        India
                                    </span>
                                    <p>
                                            <span class="badge badge-warning ml-1">3,343,777</span>
                                            <span class="badge badge-success ml-1">343,777</span>
                                            <span class="badge badge-danger ml-1">123,343</span>
                                    </p>
                                </tr>
                            </tbody>
                        </Table>
                    
                        
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default BootstrapTable;