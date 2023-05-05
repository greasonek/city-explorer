import React from "react";


class Map extends React.Component{
  render(){

    let url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.lat},${this.props.lon}&size=600x600&zoom=13&`
    return(
      <>
        <img src ={url} alt="city map"/>
      </>
    )
  }
}

export default Map;