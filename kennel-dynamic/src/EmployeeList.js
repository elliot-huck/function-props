import React, { Component } from 'react'
import Employee from './Employee';


export default class EmployeeList extends Component {

  state = {
    employees: [
      { id: 1, name: "Jessica Younker" },
      { id: 2, name: "Jordan Nelson" },
      { id: 3, name: "Zoe LeBlanc" },
      { id: 4, name: "Blaise Roberts" }
    ]
  }

  render() {
    return (
      <React.Fragment>
        <h2>Employees</h2>
        <ul>
        {
          this.state.employees.map(employee =>
            <Employee key={employee.id.toString()} employee={employee} />
          )
        }
        </ul>
      </React.Fragment>
    )
  }
}