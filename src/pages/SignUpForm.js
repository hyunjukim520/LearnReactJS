import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    hasAgreed: false
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
            <label htmlFor="name" className="FormField__Label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="FormField__Input"
              placeholder="Enter your full name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
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
            <label className="FormField__CheckboxLabel">
              <input
                type="checkbox"
                name="hasAgreed"
                className="FormField__Checkbox"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />
              I agree all statements in
              <a href="" className="FormField__TermsLink">
                terms of service
              </a>
            </label>
          </div>
          <div className="FormField">
            <button className="FormField__Button mr-20">Sign up</button>
            <Link to="/sign-in" className="FormField__Link">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
