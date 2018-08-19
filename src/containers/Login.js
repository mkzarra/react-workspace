
import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <div>
        <form className="Login-form">
          <label>Log In</label>
          <br />
          <input type="email" placeholder="email"></input>
          <br />
          <input type="password" placeholder="password"></input>
          <br />
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}