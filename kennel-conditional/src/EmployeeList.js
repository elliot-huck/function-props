import React, { Component } from 'react'
import Employee from './Employee';


export default class EmployeeList extends Component {

  state = {
    employees: [
      { id: 1, name: "Jessica Younker", title: "Senior Dog Walker II" },
      { id: 2, name: "Jordan Nelson", title: "Associate Kibble Manager" },
      { id: 3, name: "Zoe LeBlanc", title: "Executive Vice President of Chew Toys" },
      { id: 4, name: "Blaise Roberts", title: "Chief Animal Resources Officer" }
    ]
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