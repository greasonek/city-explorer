import React from "react";
import { Card } from "react-bootstrap";

class Restaurants extends React.Component {


  render(){
    const YelpStr = this.props.yelpArr.map((element, idx) =>
    <Yelp element={element}
    key={idx}
    />)
    return(
      <>
      <h3>Restaurants</h3>
      {YelpStr}
      </>
    )
  }
}

class Yelp extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
      // restName: props.name,
      // title: props.title,
      // rating: props.rating,
      // price: props.price,
      // address: props.location,
      // phone: props.display_phone,
      // img: props.image_url
    // }
  // }

  render() {
    console.log(this.props.element);
    return(
      <>
      <div className="restaurants">
      <Card>
      <Card.Body>
      <Card.Title>{this.props.element.restName}</Card.Title>
      <Card.Text>Rating: {this.props.element.rating} ⭐</Card.Text>
      <Card.Text>Price Range: {this.props.element.price}</Card.Text>
      {/* <Card.Text>{this.props.element.address}</Card.Text> */}
      <Card.Text>Call Now! {this.props.element.phone}</Card.Text>
      </Card.Body>

      </Card>
      </div>
      </>
    )
  }
}


export default Restaurants;