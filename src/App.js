import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__Aside" />
        <div className="App__Form">
          <div className="PageSwitcher">
            <a href="#" className="PageSwitcher__Item">
              Sign In
            </a>
            <a
              href="#"
              className="PageSwitcher__Item PageSwitcher__Item--Active"
            >
              Sign Up
            </a>
          </div>
          <div className="FormTitle">
            <a href="#" className="FormTitle__Link">
              Sign In
            </a>
            or
            <a href="#" className="FormTitle__Link FormTitle__Link--Active">
              Sign up
            </a>
          </div>

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
                />
              </div>
              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                  <input
                    type="checkbox"
                    name="hasAgreed"
                    className="FormField__Checkbox"
                  />
                  I agree all statements in
                  <a href="" className="FormField__TermsLink">
                    terms of service
                  </a>
                </label>
              </div>
              <div className="FormField">
                <button className="FormField__Button mr-20">Sign up</button>
                <a href="#" className="FormField__Link">
                  I'm already member
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
