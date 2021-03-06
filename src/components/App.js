import React, { Component } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import * as hackernews from "../apis/hackernews";
import NavBar from "./NavBar";
import NewsList from "./NewsList";
import Pagination from "./Pagination";
import Footer from "./Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePage: "hackerNews",
      page: 1,
      totalPages: 10,
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
    const topStories = await hackernews.getTopStories(this.state.activePage, 5);
    await this.setState({ totalPages: Math.ceil(topStories.length / 30) });

    const lastItem = this.state.page * 30;
    const currentPageStories = topStories.slice(lastItem - 30, lastItem);

    const newsLists = currentPageStories.map(storyId => {
      return hackernews.getStoryItem(storyId);
    });

    const result = await Promise.all(newsLists);
    this.setState({ newsItems: result });
  };

  handleNavBarClick = async (e, active) => {
    e.preventDefault();
    await this.setState({ activePage: active, newsItems: [] });
    try {
      await this.fetchNewsList();
    } catch (e) {
      throw new Error(e.message);
    }
  };

  handlePageClick = async (e, page) => {
    e.preventDefault();
    await this.setState({ page: page, newsItems: [] });
    await this.fetchNewsList();
  };

  render() {
    return (
      <div className="container">
        <NavBar
          active={this.state.activePage}
          onClick={this.handleNavBarClick}
        />
        <NewsList newsItems={this.state.newsItems} />
        <Pagination
          page={this.state.page}
          totalPage={this.state.totalPages}
          onClick={this.handlePageClick}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
