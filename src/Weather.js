// import axios from "axios";
import React from "react";
import { ListGroup } from "react-bootstrap";


class Weather extends React.Component{

  
  render(){
    return(
      <>
      <h3>Weather Information</h3>
      <ListGroup>
        {this.props.weatherForecast.map(element => 
      <ListGroup.Item key={element.date}>{element.date} {element.description}</ListGroup.Item>
        )}
      </ListGroup>

      </>
      )
  }
}

export default Weather;