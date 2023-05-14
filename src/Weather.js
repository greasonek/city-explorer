
import React from "react";
// import { ListGroup } from "react-bootstrap";


class Weather extends React.Component{

  
  render(){
    const WeatherDays = this.props.weatherForecast.map(element => 
    <WeatherDay element={element} />)
    return(
      <>
      <h3>Weather Information</h3>
      {WeatherDays}
      {/* <ListGroup> */}
    {/* <ListGroup.Item key={element.date}>{element.date} {element.description}</ListGroup.Item> */}
    {/* </ListGroup> */}
      </>
      )
  }
}

class WeatherDay extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: props.date,
      description: props.description
    }
  }
  render(){
    return(
      <>
     <div class="card">
      <div class="card-body">
      <h3 class="card-title">{this.props.element.date}</h3>
      <p class="card-text">{this.props.element.description}</p>
      </div>
     </div>
      </>
    )
  }
}

export default Weather;