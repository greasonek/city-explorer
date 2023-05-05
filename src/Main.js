import React from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
import LocationIQ from "./LocationIQ";
import axios from "axios";

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      displayInfo: false,
      city: '',
      cityName: '',
      lat: '',
      lon: ''

    }
  }

  handleInput = (e) => {
    this.setState({city: e.target.value}
      , () => console.log(this.state.city)
    );
  }

  handleExplore = async (e) => {
    e.preventDefault();
    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`
    const response = await axios.get(url);
    console.log(response.data[0]);
    this.setState({
      displayInfo: true,
      cityName: response.data[0].display_name,
      lat: response.data[0].lat,
      lon: response.data[0].lon

    })
    }
  
  render() {
    return(
    <>
      <Form onSubmit={this.handleExplore}>
        <Form.Group>
          <Form.Label>Enter a city location for more information!</Form.Label>
          <Form.Control type="text" placeholder="Enter a city location here" onChange={this.handleInput} />
        </Form.Group>
        <Button type="submit">Explore!</Button>
        {this.state.displayInfo ?
        <>
        <ListGroup>
          <ListGroup.Item>{this.state.cityName}</ListGroup.Item>
          <ListGroup.Item>The latitude for this location is {this.state.lat}</ListGroup.Item>
          <ListGroup.Item>The longitude for this location is {this.state.lon}</ListGroup.Item>
        </ListGroup>
        <LocationIQ/>
        </>
        :
        null
        }
      </Form>
    </>)
  }
}


export default Main;