
import React from "react";
import { Card } from "react-bootstrap";
// import { ListGroup } from "react-bootstrap";


class Movies extends React.Component{

  
  render(){
    const MovieStr = this.props.movieArr.map((element, idx) =>
      <Movie element={element} 
        key={idx}
      />)
    return(
      <>
      <h3>Movies</h3>
      {MovieStr}
     </>
      )
  }
}

class Movie extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: props.title,
      overview: props.overview,
      release_date: props.release_date
    }
  }
  render(){
    return(
      <>
      <div className="movies">
      <Card>
        <Card.Img src={`https://image.tmdb.org/t/p/w500/${this.props.element.poster}`} alt="movie poster"/>
        <Card.Body>
        <Card.Title>{this.props.element.title}</Card.Title>
        <Card.Text>{this.props.element.overview}</Card.Text>
        <Card.Text>{this.props.element.release_date}</Card.Text>
      </Card.Body>
    </Card>
    </div>
      </>
    )
  }
}


export default Movies;