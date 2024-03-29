import React from 'react';
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";

import LatesUpdatesTable from '../Tables/LatesUpdatesTable';
import Top5Table from '../Tables/Top5Table';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 20
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
class TableCarousel extends React.Component{

      
  intervalID;
  state = {
    rand: "100",
  }

  componentDidMount() {
    //this.getData();

    /*
      Now we need to make it run at a specified interval,
      bind the getData() call to `this`, and keep a reference
      to the invterval so we can clear it later.
    */
   //this.intervalID = setInterval(this.getData.bind(this), 5000);
  }

  componentWillUnmount() {
    /*
      stop getData() from continuing to run even
      after unmounting this component. Notice we are calling
      'clearTimeout()` here rather than `clearInterval()` as
      in the previous example.
    */
    //clearInterval(this.intervalID);
  }

  getData = () => {
    this.setState({
        rand : Math.random( 100000)
    });
}

render() {
  return (
    <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    arrows = {false}
    autoPlay
    autoPlaySpeed={5000}
    infinite
    customTransition="transform 300ms ease-in-out"
    ssr
    partialVisbile
    deviceType="desktop"
    itemClass="image-item"
    responsive={responsive}>

      <Top5Table file = "Top5_North America.json"
                  header = "Top 5 North America"></Top5Table> 
      <Top5Table file = "Top5_South America.json"
                  header = "Top 5 South America"></Top5Table>                       
      <Top5Table file = "Top5_Europe.json"
                  header = "Top 5 Europe"></Top5Table>                       
      <Top5Table file = "Top5_Asia.json"
                  header = "Top 5 Asia"></Top5Table>                       
      <Top5Table file = "Top5_Africa.json"
                  header = "Top 5 Africa"></Top5Table>                       
  
    </Carousel>
  );
}
};

export default TableCarousel;
