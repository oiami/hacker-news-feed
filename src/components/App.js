import React, { Component } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import NavBar from "./NavBar";
import NewsList from "./NewsList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <NewsList />
      </div>
    );
  }
}

export default App;
