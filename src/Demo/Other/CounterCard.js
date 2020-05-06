import React from 'react';
import {Row, Col, Card, Table, Tabs, Tab} from 'react-bootstrap';

import axios from 'axios';

import Aux from "../../hoc/_Aux";

class CounterCard extends React.Component {
    
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
        var url = "http://127.0.0.1/top5/Top5_World.json";
        axios.get(url).then(function(data) {
            th.setState({
                countries: data.data.countries
            });
          });
        
    }

    renderTableData() {
        const type = this.props.type;
        
        return this.state.countries.map((country, index) => {
           const {  flag ,name , cases, dead, rec } = country //destructuring
           var count , header , cssClass ,cssClass2;
           
           if(type == "cases"){
                count = cases;
                header = " Total Cases";
                cssClass = "feather icon-users f-30 text-c-yellow";
                cssClass2 = "badge badge-warning ml-2";
           }
            else if (type == "dead")
            {
                count = dead;
                header = " Total Deaths";
                cssClass = "feather icon-users f-30 text-c-red";
                cssClass2 = "badge badge-danger ml-2";
            }
            else if (type == "recovered")
            {
                count = rec;
                header = " Total Recovered";
                cssClass = "feather icon-users f-30 text-c-green";
                cssClass2 = "badge badge-success ml-2";
            }
           return (
                <Card.Body className='border-bottom'>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-3">
                            <i className={cssClass}/>
                        </div>
                        <div className="col-md-9">
                            <h3 className="f-w-300">
                                <span class={cssClass2}>  {count}
                                </span>
                            </h3>
                            <span className="d-block text-uppercase">{header}</span>
                        </div>
                    </div>
                </Card.Body>
           )
        })
     }


    render() {
        return (
            <Aux>
                {this.renderTableData()}
            </Aux>
        );
    }
}

export default CounterCard;