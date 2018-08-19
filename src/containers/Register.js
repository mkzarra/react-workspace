import React, { Component } from "react";
import "./Register.css";

export default class Register extends Component {
  render() {
    return (
      <div>
        <form className="Register-form">
          <label>Sign Up</label>
          <br />
          <input type="email" placeholder="your email"></input>
          <br />
          <input type="password" placeholder="password"></input>
          <br />
          <input type="password" placeholder="confirm password"></input>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}