import React from 'react';
import {Row, Col,  Table} from 'react-bootstrap';

import axios from 'axios';

import Aux from "../../hoc/_Aux";

class LatesUpdatesTable extends React.Component {
    
    constructor(props) {
        super(props) 
        this.state = { //state is by default an object
           countries: [
             
           ]
        }
     }

    intervalID;
    
      componentDidMount() {
        this.getData();
        this.intervalID = setInterval(this.getData.bind(this), 5000);
      }

      componentWillUnmount() {
        clearInterval(this.intervalID);
      }

      getData = () => {

        var th = this;
        axios.get("http://127.0.0.1/cumulative/1.json").then(function(data) {
            console.log("Fetched data "+ JSON.stringify(data.data));
            th.setState({
                countries: data.data.countries
            });
          });
        // Fetch from json and set here 
        
    }

    renderTableData() {
       return this.state.countries.slice(0,5).map((country, index) => {
           const {  flag ,name , cases, dead, rec } = country //destructuring
           return (
            <tr>
                <span >
                    <span class = "col-md" >
                        <img src={flag}></img>
                    </span>
                    {name}
                </span>
                <p>
                    <span class="badge badge-warning ml-1">{cases}</span>
                    <span class="badge badge-success ml-1">{dead}</span>
                    <span class="badge badge-danger ml-1">{rec}</span>
                </p>
            </tr>
        
           )
        })
     }


    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Table responsive = { false }
                            bordered striped size = "sm">
                            <thead>
                                Top 5 Updates
                            </thead>
                            <tbody>
                               {this.renderTableData()}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default LatesUpdatesTable;