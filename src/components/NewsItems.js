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

export const transformData = item => {
  const host = new URL(item.url).host;
  const hostUrl = host
    .split(".")
    .slice(-2)
    .join(".");

  return {
    ...item,
    relativeUrl: hostUrl,
    diffTime: getDiffTime(item.time)
  };
};

export const NewsItem = props => {
  return props.items.map(data => {
    const item = transformData(data);
    return (
      <li className="collection-item">
        <a href={item.url}>
          <h6>
            {item.title} ({item.relativeUrl})
          </h6>
        </a>
        <a href="" />
        <p>
          {item.score} Points by {item.by} {item.diffTime} ago |{" "}
          {item.descendants} comments
        </p>
      </li>
    );
  });
};
