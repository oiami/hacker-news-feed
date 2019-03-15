import React from "react";
import moment from "moment";

export const getDiffTime = postTime => {
  const postDate = moment.unix(postTime);
  const date = moment();

  let diff = date.diff(postDate, "hours");
  if (diff < 1) return `${date.diff(postDate, "minutes")} minutes`;
  if (diff === 1) return `${diff} hour`;
  if (diff < 24) return `${diff} hours`;
  if (diff < 48) return "1 day";
  else return `${date.diff(postDate, "days")} days`;
};

export const getRelativeUrl = url => {
  try {
    const host = new URL(url).host;
    return host
      .split(".")
      .slice(-2)
      .join(".");
  } catch (e) {
    return "";
  }
};

export const NewsItem = props => {
  return props.items.map(item => {
    const relativeUrl = getRelativeUrl(item.url);
    const diffTime = getDiffTime(item.time);

    return (
      <li key={item.id} className="collection-item">
        <a href={item.url}>
          <h6>
            {item.title} {relativeUrl ? relativeUrl : ""}
          </h6>
        </a>
        <a href="" />
        <p>
          {item.score} Points by {item.by} {diffTime} ago | {item.descendants}{" "}
          comments
        </p>
      </li>
    );
  });
};
