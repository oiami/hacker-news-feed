import React from "react";
import { NewsItem } from "./NewsItems";

const NewsList = ({ newsItems }) => {
  return (
    <ul className="collection">
      <NewsItem items={newsItems} />
    </ul>
  );
};

export default NewsList;
