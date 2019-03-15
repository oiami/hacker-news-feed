import React, { Component } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import NavBar from "./NavBar";
import NewsList from "./NewsList";
import * as hackernews from "../apis/hackernews";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePage: "hackerNews",
      newsItems: []
    };
  }
  componentDidMount() {
    try {
      this.fetchNewsList();
    } catch (e) {
      throw new Error(e.message);
    }
  }

  fetchNewsList = async () => {
    const topStories = await hackernews.getTopStories(5);

    const newsLists = topStories.map(storyId => {
      return hackernews.getStoryItem(storyId);
    });

    const result = await Promise.all(newsLists);
    this.setState({ newsItems: result });
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
        <NewsList newsItems={this.state.newsItems} />
      </div>
    );
  }
}

export default App;
