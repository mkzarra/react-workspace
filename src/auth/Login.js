
import React, { Component } from "react";
import "./Login.css";
import axios from 'axios'
const config = require('../../config.js')

export default class Login extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  onChange = e => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  onSubmit = e => {
    e.preventDefault()

    const { email, password } = this.state

    axios.post(config.apiUrl + '/sign-in', { email, password })
      .then(data => console.log(data))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <form className="Login-form" onSubmit={this.onSubmit}>
          <label>Log In</label>
          <br />
          <input type="email" placeholder="email" name="email" value={email} onChange={this.onChange}></input>
          <br />
          <input type="password" placeholder="password" name="password" value={password} onChange={this.onChange}></input>
          <br />
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}