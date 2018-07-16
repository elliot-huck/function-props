import React, { Component } from "react"


export default class Login extends Component {

  // Set initial state
  state = {
    email: "",
    password: "",
    rememberMe: false
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    if (evt.target.id === "rememberMe") {
      stateToChange[evt.target.id] = evt.target.checked;
    } else {
      stateToChange[evt.target.id] = evt.target.value
    }
    this.setState(stateToChange)
  }

  // Simplistic handler for login submit
  handleLogin = (evt) => {
    evt.preventDefault()

    /*
      Stores email and password in local storage if Remember Me was checked; otherwise, it is stored in session storage
    */
    if (this.state.rememberMe) {
      localStorage.setItem(
        "credentials",
        JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      )
    } else {
      sessionStorage.setItem(
        "credentials",
        JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      )
    }
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

        <label htmlFor="inputEmail">Email address</label>
        <input onChange={this.handleFieldChange}
          type="email"
          id="email"
          placeholder="Email address"
          required="" autoFocus=""
        />

        <label htmlFor="inputPassword">Password</label>
        <input onChange={this.handleFieldChange}
          type="password"
          id="password"
          placeholder="Password"
          required=""
        />

        <label htmlFor="inputRemember">Remember me</label>
        <input onChange={this.handleFieldChange}
          type="checkbox"
          id="rememberMe"
        />

        <button type="submit">Sign in</button>
      </form>
    )
  }
}