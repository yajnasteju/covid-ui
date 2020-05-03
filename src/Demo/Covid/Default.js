import React, { Fragment } from 'react';
import {Row, Col, Card, Table, Tabs, Tab} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import MyCarousel from "../MyCarousel";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import '../../assets/styles.css'
import BootstrapTable from '../Tables/BootstrapTable';

class Covid extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col md={2}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4 '>Total Infected</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                            <i className="feather text-c-red f-30 m-r-5"/>2,456,777</h3>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4 '>Total Deceased</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                            <i className="feather text-c-red f-30 m-r-5"/>2,456,777</h3>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4 '>Total Recovered</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                            <i className="feather text-c-red f-30 m-r-5"/>2,456,777</h3>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4 '>Total Infected</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                            <i className="feather text-c-red f-30 m-r-5"/>2,456,777</h3>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4 '>Total Deceased</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                            <i className="feather text-c-red f-30 m-r-5"/>2,456,777</h3>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4 '>Total Recovered</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                            <i className="feather text-c-red f-30 m-r-5"/>2,456,777</h3>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    

                </Row>
                <Row>
                    <Col md={6}>
                        <MyCarousel></MyCarousel>
                    </Col>
                
                    <Col md={2} >
                            <BootstrapTable>    </BootstrapTable>
                    </Col>
                    <Col md={2} >
                            <BootstrapTable>    </BootstrapTable>
                    </Col>
                    <Col md={2} >
                            <BootstrapTable>    </BootstrapTable>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Covid;