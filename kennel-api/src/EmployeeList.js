import React, { Component } from 'react'
import Employee from './Employee';


export default class EmployeeList extends Component {

  state = {
    employees: []
  }

  componentDidMount () {
    fetch("http://localhost:5050/employees")
    .then(e => e.json())
    .then(allEmployees => this.setState({ employees: allEmployees }))
}

  render() {
    return (
      <React.Fragment>
        <h2>Employees</h2>
        <ul>
          {
            this.state.employees.map(person =>
              <Employee key={person.id.toString()} worker={person} />
            )
          }
        </ul>
      </React.Fragment>
    )
  }
}