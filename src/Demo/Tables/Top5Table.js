import React from 'react';
import {Row, Col,  Table} from 'react-bootstrap';

import axios from 'axios';

import Aux from "../../hoc/_Aux";

class Top5Table extends React.Component {
    
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
        var url = "http://127.0.0.1/top5/" + JSON.parse(f);
        console.log("File url " + url);

        axios.get(url).then(function(data) {
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
                            <thead>
                                {this.props.header}
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

export default Top5Table;