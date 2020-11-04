import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  state = {};

  render() {
    return (
      <header className="header flex">
        <Link to="/">
          <h1>Brew Explorer</h1>
        </Link>

        <nav className="flex">
          <Link to="/newbeer">
            <button>+ Add</button>{" "}
          </Link>

          <input type="text" placeholder="🔎" />
          <img src="" alt="" className="ProfilePic" />
        </nav>
      </header>
    );
  }
}

export default Header;
