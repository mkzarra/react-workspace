import React, { Component } from "react";
import axios from 'axios'
import "./Register.css";
const config = require('../../config.js')

export default class Register extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      password_confirmation: ''
    }
  }

  onChange = e => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  onSubmit = e => {
    e.preventDefault()

    const { email, password, password_confirmation } = this.state
    
    axios.post(config.apiUrl + '/sign-up', { email, password, password_confirmation })
      .then(data => console.log(data))
      .catch(err => console.error(err))
  }

  render() {
    const { email, password, password_confirmation } = this.state
    return (
      <div>
        <form className="Register-form" onSubmit={this.onSubmit}>
          <label>Sign Up</label>
          <br />
          <input type="email" placeholder="email" name="email" value={email} onChange={this.onChange}></input>
          <br />
          <input type="password" placeholder="password" name="password" value={password} onChange={this.onChange}></input>
          <br />
          <input type="password" placeholder="confirm password" name="password_confirmation" value={password_confirmation} onChange={this.onChange}></input>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}