import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { Container } from "react-bootstrap";


class App extends React.Component{
  render(){
    return(
      <>
      <Container>

        <Header />
        <Main />
        <Footer />
      </Container>
      </>
    )
  }
}

export default App;
