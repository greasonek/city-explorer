import React from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
import LocationIQ from "./LocationIQ";
import axios from "axios";
import Map from "./Map";
import Error from "./Error";
import Weather from "./Weather";
import Movies from "./Movies";
import Restaurants from "./Yelp";
import "./main.css";
import "./movies.css"


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
      weatherForecast: [],
      movieArr: [],
      yelpArr: [],
      location: []

    }
  }

  handleInput = (e) => {
    this.setState({city: e.target.value}
      , () => console.log(this.state.city)
    );
  }

  handleExplore = async (e) => {
    e.preventDefault();
    let lat,lon;
    try{
    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`
    const response = await axios.get(url);
    console.log(response.data[0]);
    lat = response.data[0].lat;
    lon = response.data[0].lon
    this.setState({
      displayInfo: true,
      cityName: response.data[0].display_name,
      lat: response.data[0].lat,
      lon: response.data[0].lon,
    })
  }
    catch{this.setState({error: true})};
    this.showWeather(lat, lon);
    this.showMovies();
    this.showRestaurants();
  }


  showWeather = async (lat, lon) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}&searchQuery=${this.state.city}`;
      const response = await axios.get(url);
      console.log(response.data);
      this.setState({weatherForecast: response.data}, 
      // () => console.log(this.state.weatherForecast),
      )
    }
    catch(error){
      console.error(error.message);
    }
  }

  showMovies = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/movies?city=${this.state.city}`;
      const response = await axios.get(url);
      console.log(response.data);
      this.setState({movieArr: response.data},
      // () => console.log(this.state.movieArr),
      )
    }
    catch(error){
      console.log(error.message);
    }
  }

  showRestaurants = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/yelp?location=${this.state.city}`;
      console.log(url);
      // let url = `https://api.yelp.com/v3/businesses/search?location=${this.state.city}&sort_by=best_match&limit=20'`
      // let url = `https://api.yelp.com/v3/autocomplete?text=del&latitude=${this.state.lat}&longitude=-${this.state.lon}`;
      const response = await axios.get(url);
      console.log(response.data);
      this.setState({yelpArr: response.data},
        // () => console.log(this.state.yelpArr),
        )
    }
    catch(error){
      console.log(error.message);
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

<Map
  lat={this.state.lat}
  lon={this.state.lon}
/>
        {this.state.weatherForecast.length > 0 && 
        <Weather 
          weatherForecast={this.state.weatherForecast}
        />}

        {this.state.movieArr.length > 0 &&
        <Movies
          movieArr={this.state.movieArr}
        />}
        
        {this.state.yelpArr.length > 0 &&
        <Restaurants
          yelpArr={this.state.yelpArr}
        />}

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