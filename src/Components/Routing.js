import React, { Component } from "react";
import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./NotFound";
import Secret from "./Secret";
import Login from "./Login";
import Signup from "./Signup";
import ResetPassword from "./ResetPassword";
import ResetPasswordConfirm from "./ResetPasswordConfirm";
import Active from './Active'
export class Routing extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/github" render={() => (window.location = "https://github.com/sahin88")} />
          <Route exact path="/online-cv" render={() => (window.location = "https://sahin88.github.io/cv1/dist/")} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route exact path="/password/reset/confirm/:uid/:token" component={ResetPasswordConfirm} />
          <Route exact path="/activate/:uid/:token" component={Active} />
          {/* <ProtectedRoute exact path="/sefil" component={Secret} /> */}
          {/* <Route exact component={NotFound} /> */}
        </Switch>
      </div>
    );
  }
}

export default Routing;
