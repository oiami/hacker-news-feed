import React from "react";

const navBar = {
  hackerNews: "Hacker News",
  newest: "New",
  past: "Past",
  comments: "Comments"
};

const NavBar = ({ active, onClick }) => {
  const navBarList = Object.keys(navBar).map(key => {
    return (
      <li
        onClick={e => onClick(e, key)}
        key={key}
        className={active === key ? "active" : ""}
      >
        <a href="#">{navBar[key]}</a>
      </li>
    );
  });

  return (
    <nav>
      <div className="nav-wrapper">
        <ul className="left hide-on-med-and-down">{navBarList}</ul>
      </div>
    </nav>
  );
};

export default NavBar;
