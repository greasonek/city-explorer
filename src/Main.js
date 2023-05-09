import React from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
import LocationIQ from "./LocationIQ";
import axios from "axios";
import Map from "./Map";
import Error from "./Error";
import Weather from "./Weather";

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      displayInfo: false,
      city: '',
      cityName: '',
      lat: '',
      lon: '',
      error: false,
      weatherForecast: []

    }
  }

  handleInput = (e) => {
    this.setState({city: e.target.value}
      , () => console.log(this.state.city)
    );
  }

  handleExplore = async (e) => {
    e.preventDefault();
    try{
    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`
    const response = await axios.get(url);
    console.log(response.data[0]);
    this.setState({
      displayInfo: true,
      cityName: response.data[0].display_name,
      lat: response.data[0].lat,
      lon: response.data[0].lon,
    })
    this.showWeather();
    }
    catch{this.setState({error: true})};
  }

  showWeather = async () => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.city}`
      const response = await axios.get(url);
      console.log(response.data);
      this.setState({weatherForecast: response.data}, 
      () => console.log(this.state.weatherForecast)
      )
    }
    catch(error){
      console.error(error.message);
    }
  }

  resetError = () => {
    this.setState({
      error: false,
      displayInfo: false
    });
  }
  
  render() {
    return(
    <>
      <Form onSubmit={this.handleExplore}>
        <Form.Group>
          <Form.Label>Enter a city location for more information!</Form.Label>
          <Form.Control type="text" placeholder="Enter a city location here" onChange={this.handleInput} />
        </Form.Group>
        <Button type="submit" onClick={this.resetError}>Explore!</Button>
        {this.state.displayInfo ?
        <>
        <LocationIQ/>

        <ListGroup>
          <ListGroup.Item>{this.state.cityName}</ListGroup.Item>
          <ListGroup.Item>The latitude for this location is {this.state.lat}</ListGroup.Item>
          <ListGroup.Item>The longitude for this location is {this.state.lon}</ListGroup.Item>
        </ListGroup>

        {this.state.weatherForecast.length > 0 && 
        <Weather 
          weatherForecast={this.state.weatherForecast}
        />}
        
        <Map
          lat={this.state.lat}
          lon={this.state.lon}
        />
        </>
        :
        null
        },
      </Form>
      {this.state.error &&
      <>
      <Error />
      </>
      }
    </>)
  }
}


export default Main;