import React, { Component } from "react";
import { Link } from "react-router-dom";

export class SignInForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label htmlFor="email" className="FormField__Label">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="FormField__Input"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label htmlFor="password" className="FormField__Label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="FormField__Input"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign in</button>
            <Link to="/" className="FormField__Link">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
