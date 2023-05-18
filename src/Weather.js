
import React from "react";
import { Card } from "react-bootstrap";
// import { ListGroup } from "react-bootstrap";


class Weather extends React.Component{

  
  render(){
  
    const WeatherDays = this.props.weatherForecast.map((element, idx) => {
      // console.log(element);
    return <WeatherDay element={element} 
      key={idx}
    />})
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
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     date: props.date,
  //     temp: props.temp,
  //     description: props.description,
  //     icon: props.icon
  //   }
  // }
  render(){
    return(
      <>
     <Card>
      <Card.Body>
        <img class="card-img-top" src={require(`./Img/icons/${this.props.element.icon}.png`)} alt={this.props.element.description}></img>
      <Card.Title>{this.props.element.date}</Card.Title>
      <Card.Text>{this.props.element.description}</Card.Text>
      <Card.Text>{this.props.element.temp} {'\u00b0'}</Card.Text>
      </Card.Body>
     </Card>
      </>
    )
  }
}

export default Weather;