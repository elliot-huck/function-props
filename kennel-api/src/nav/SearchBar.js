import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export default class SearchBar extends Component {
  render() {
    return (
      <input type="text" placeholder="Search" />
    )
  }
}