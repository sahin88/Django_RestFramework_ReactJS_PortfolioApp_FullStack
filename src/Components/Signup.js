import React, { Component } from "react";
import Footer from "./Footer";

export class Signup extends Component {
  render() {
    return (
      <div>
        <div className="loginPage">
          <h2> Sign Up Page</h2>
          <form action="/Home.js" className="signupPageForm" method="post">
            <div className="inputBox">
              <input
                placeholder="Username"
                id="username"
                name="username"
                type="text"
                required
              />
            </div>

            <div className="inputBox">
              <input
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                required
              />
            </div>
            <div className="inputBox">
              <input
                placeholder="Email"
                id="email"
                name="email"
                type="email"
                required
              />
            </div>
            <div>
              <a style={{ color: "#fff" }} href="/login">
                Already have an Account?
              </a>
            </div>
            <input id="submit" name="submit" value="Sign Up" type="submit" />
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Signup;
