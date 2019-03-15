import React, { Component } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import NavBar from "./NavBar";
import NewsList from "./NewsList";

class App extends Component {
  state = {
    activePage: "hackerNews"
  };

  handleNavBarClick = (e, active) => {
    e.preventDefault();
    this.setState({ activePage: active });
  };

  render() {
    return (
      <div className="container">
        <NavBar
          active={this.state.activePage}
          onClick={this.handleNavBarClick}
        />
        <NewsList />
      </div>
    );
  }
}

export default App;
