import React from 'react';
import {Row, Col,  Table} from 'react-bootstrap';

import axios from 'axios';

import Aux from "../../hoc/_Aux";

class BootstrapTable extends React.Component {
    
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
        var f = JSON.stringify(this.props.file);
        var url = "http://127.0.0.1/cumulative/" + JSON.parse(f);
        console.log("File url " + url);

        axios.get(url).then(function(data) {
            console.log("Fetched data "+ JSON.stringify(data.data));
            th.setState({
                countries: data.data.countries
            });
          });
        
    }

    renderTableData() {
        console.log("teju : " + JSON.parse(JSON.stringify(this.state)));
        return this.state.countries.map((country, index) => {
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
                    <span class="badge badge-success ml-1">{rec}</span>
                    <span class="badge badge-danger ml-1">{dead}</span>
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

export default BootstrapTable;