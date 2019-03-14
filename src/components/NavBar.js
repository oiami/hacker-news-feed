import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <ul className="left hide-on-med-and-down">
            <li className="active">
              <a href="/">
                <strong>Hacker News</strong>
              </a>
            </li>
            <li>
              <a href="">New</a>
            </li>
            <li>
              <a href="">Past</a>
            </li>
            <li>
              <a href="">Comments</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
