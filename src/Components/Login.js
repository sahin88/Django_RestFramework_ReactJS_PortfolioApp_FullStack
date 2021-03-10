import React, { Component } from "react";
import Footer from "./Footer";
import { Link, } from "react-router-dom";
import {connect} from 'react-redux'
import DjangoCSRFToken from "django-react-csrftoken";
import  * as actions  from '../actions/auth'

export class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email:"",
       password:"",
       loginErrors:""
    }

    this.handleChange= this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }
  

  handleChange(event){
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleSubmit(event){
      const{ email, password}=this.state
      event.preventDefault();
     this.props.authlogin(email,password)
    
    }

    



  render() {
    return (
      <div>
        <div className="loginPage">
          <h2> Login page</h2>
          <form onSubmit={this.handleSubmit} className="signupPageForm" method="post">
          <DjangoCSRFToken />
            <div className="inputBox">
              <input
                placeholder="Username"
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="inputBox">
              <input
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </div>

            <Link style={{ color: "#ffff" }} to="/signup">
              Don't have any Account yet?
            </Link>
            <Link style={{ color: "#ffff" }} to="/reset-password">
              Forget your password?
            </Link>

            <input id="submit" name="submit" value="Login" type="submit" />
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapsDispatchToProps = (dispatch) => {
  return {
    authlogin: (email, password) => {
      dispatch(actions.login(email, password));
    },
  };
};

const mapsStateToProps = (state) => {
  return {
    token: state.token,
    isAuthenticated: state.isAuthenticated,
  };
};


export default 
  connect(mapsStateToProps, mapsDispatchToProps)(Login);