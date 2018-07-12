import React, { Component } from "react"
import EmployeeList from "./EmployeeList"
import LocationList from "./LocationList"
import AnimalList from "./AnimalList"


export default class Kennel extends Component {

  render() {
    return (
      <React.Fragment>
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
        <AnimalList animals={this.state.animals} owners={this.state.owners} animalOwners={this.state.animalOwners} />
      </React.Fragment>
    );
  }
}