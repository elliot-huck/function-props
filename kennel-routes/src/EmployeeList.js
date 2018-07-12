import React, { Component } from 'react'


export default class EmployeeList extends Component {

  state = {
    employees: [
      { id: 1, employeeName: "Jessica Younker" },
      { id: 2, employeeName: "Jordan Nelson" },
      { id: 3, employeeName: "Zoe LeBlanc" },
      { id: 4, employeeName: "Blaise Roberts" }
    ]
  }

  render() {
    return (
      <React.Fragment>
        <h2>Employees</h2>
        <ul>
        {
          this.state.employees.map(employee =>
            <li key={employee.id.toString()}>{employee.employeeName}</li>
          )
        }
        </ul>
      </React.Fragment>
    )
  }
}