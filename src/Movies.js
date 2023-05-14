
import React from "react";
// import { ListGroup } from "react-bootstrap";


class Movies extends React.Component{

  
  render(){
    const MovieStr = this.props.movieArr.map(element =>
      <Movie element={element} />)
    return(
    <>
      <h3>Movies</h3>
      {MovieStr}
      {/* <ListGroup>
        {this.props.movieArr.map(element =>
          <ListGroup.Item key={element.movies}>{element.title} {element.overview}</ListGroup.Item>
          )}
        {console.log(this.props.movieArr)}
      </ListGroup> */}

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
      image_url: props.poster_path,
      releasedDate: props.released_on
    }
  }
  render(){
    return(
      <>
      <div className="movies">
      <div class="card">
        <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/{this.props.element.image_url}" alt="movie poster"/>
        <div class="card-body">
        <h3 class="card-title">{this.props.element.title}</h3>
        <p class="card-text">{this.props.element.overview}</p>
        <p class="card-text">{this.props.element.released_on}</p>
      </div>
    </div>
    </div>
      </>
    )
  }
}


export default Movies;