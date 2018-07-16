import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import ApiController from "../ApiController";

export default class SearchBar extends Component {

  dynamicSearch(evt) {
    const searchText = evt.target.value;
    console.log(searchText)
    ApiController.searchAll("employees", searchText)
      .then(matchedEmployees => {
        matchedEmployees.forEach(element => {
          console.log(element)

        });
      })
  }

  render() {
    return (
      <input type="text"
        placeholder="Search"
        // onChange={this.dynamicSearch}
      />
    )
  }
}