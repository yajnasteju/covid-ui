import React, { Fragment } from 'react';
import {Row, Col, Card, Table, Tabs, Tab} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import MyCarousel from "../MyCarousel";

import BootstrapTable from '../Tables/BootstrapTable';

import TableCarousel from '../MyCarousel/TableCarousel';
import CounterCard from '../Other/CounterCard';

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import '../../assets/styles.css'
import LatesUpdatesTable from '../Tables/LatesUpdatesTable';

class Covid extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col md={6}>
                        <Row>
                            <Col md={4}>
                                <CounterCard type = "cases"></CounterCard>
                            </Col>
                            <Col md={4}>
                                <CounterCard type = "recovered"></CounterCard>
                            </Col>
                            <Col md={4}>
                                <CounterCard type = "dead"></CounterCard>
                            </Col>
                            
                        
                        </Row>
                        <MyCarousel></MyCarousel>
                            
                        <Row>
                            <Col md={6}>
                                <TableCarousel></TableCarousel>
                                
                            </Col>
                            <Col md={6} style={{paddingTop : 18}}>
                                <LatesUpdatesTable></LatesUpdatesTable>                                
                            </Col>

                        </Row>
                       
                    </Col>

                    <Col md={2} style={{padding : 0} } >
                        <BootstrapTable file = "1.json">    </BootstrapTable>
                    </Col>
                    <Col md={2} style={{paddingRight : 0}} >
                        <BootstrapTable file = "2.json">    </BootstrapTable>
                    </Col>
                    <Col md={2} style={{padding:  0}}>
                    <div class="microsoft container">
                        <p class="marquee">
                            <BootstrapTable file = "3.json">    </BootstrapTable>
                        </p>
                    </div>
                    </Col>
                </Row>
                
            </Aux>
        );
    }
}

export default Covid;