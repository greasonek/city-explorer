import React from "react";
import { ListGroup } from "react-bootstrap";


class Movies extends React.Component{

  
  render(){
    return(
    <>
      <h3>Movies</h3>
      <ListGroup>
        {this.props.movieArr.map(element =>
          <ListGroup.Item key={element.movies}>{element.title} {element.overview}</ListGroup.Item>
          )}
        {console.log(this.props.movieArr)}
      </ListGroup>

    </>
      )
  }
}


export default Movies;