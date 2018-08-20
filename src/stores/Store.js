import React, { Component } from 'react'
import './Store.css'
import axios from 'axios'
const config = require('../../config.js')

export default class Store extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      schedule: '',
      wifi: '',
      outlets: '',
      restrooms: '',
      seating: '',
      atmosphere: '',
      address: ''
    }
  }

  onChange = e => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  onSubmit = e => {
    e.preventDefault()

    const store = {
      name,
      schedule,
      wifi,
      outlets,
      restrooms,
      seating,
      atmosphere,
      address
    } = this.state

    // create a store
    axios.post(config.apiUrl + '/stores', store)
      .then(data => console.log(data))
      .catch(err => console.error(err))
    
    // get stores INDEX
    axios.get(config.apiUrl + '/stores')
      .then(data => console.log(data))
      .catch(err => console.error(err))
    
    // get store by name
    axios.get(config.apiUrl + '/stores', store)
      // if (store.name === target.value)
      // TODO: figure out what data is needed
      // to render only stores with 'name' === target
    
    // update a store with additional/corrected information
    axios.patch(config.apiUrl + '/stores', store)
  }
}
