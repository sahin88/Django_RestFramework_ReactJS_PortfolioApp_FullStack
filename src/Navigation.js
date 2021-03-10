import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { FiLogIn } from "react-icons/fi";

export class Navigation extends Component {
  hamburgerButton = () => {
    let slidingHeader = document.getElementById("slidingHeader");
    if (slidingHeader.classList.contains("container")) {
      slidingHeader.classList.remove("container");
      slidingHeader.classList.add("container1");
    } else {
      slidingHeader.classList.remove("container1");
      slidingHeader.classList.add("container");
    }
  };
  clickedPage = () => {
    let navLink = document.getElementById("navLink");
    console.log("navLink", navLink.classList());
  };
  render() {
    return (
      <div>
        <header className="headerPosition">
          <div>
            <h1>
              SMO<span className="headerSpan">Web</span>
            </h1>
          </div>
          <div id="slidingHeader" className="container">
            <ul>
              <li>
                <NavLink
                  className="navLink"
                  id="navLink"
                  to="/"
                  activeClassName="is-active"
                  exact={true}
                >
                  <FaHome className="iconStyle" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navLink"
                  to="/about"
                  activeClassName="is-active"
                  exact={true}
                >
                  <FaQuestion className="iconStyle" />
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navLink project"
                  to="/projects"
                  activeClassName="is-active"
                  exact={true}
                >
                  <GoProject className="iconStyle" />
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navLink "
                  to="/github"
                  activeClassName="is-active"
                  exact={true}
                >
                  {" "}
                  <FiLogIn className="iconStyle" />
                 Github
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navLink "
                  to="/online-cv"
                  activeClassName="is-active"
                  exact={true}
                >
                  {" "}
                  <FiLogIn className="iconStyle" />
                Online CV
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="hamburgerButton" onClick={this.hamburgerButton}>
            <li>
              <GiHamburgerMenu />
            </li>
          </div>
        </header>
      </div>
    );
  }
}

export default Navigation;
