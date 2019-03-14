import React, { Component } from "react";
import { NewsItem } from "./NewsItems";
import * as hackernews from "../apis/hackernews";

class NewsList extends Component {
  constructor() {
    super();
    this.state = {
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
    const topStories = await hackernews.getTopStories(30);

    const newsLists = topStories.map(storyId => {
      return hackernews.getStoryItem(storyId);
    });

    const result = await Promise.all(newsLists);
    this.setState({ newsItems: result });
  };

  render() {
    return (
      <ul className="collection">
        <NewsItem items={this.state.newsItems} />
      </ul>
    );
  }
}

export default NewsList;
