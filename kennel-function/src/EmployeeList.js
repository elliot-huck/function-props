import React, { Component } from 'react'
import Employee from './Employee';
import ApiController from './ApiController';


export default class EmployeeList extends Component {

  state = {
    employees: []
  }

  fireEmployee = (employeeId) => {
    // Delete the specified animal from the API
    fetch(`http://localhost:5050/employees/${employeeId}`, {
      method: "DELETE"
    })
      // When DELETE is finished, retrieve the new list of animals
      .then(() => {
        // Remember you HAVE TO return this fetch to the subsequenet `then()`
        return fetch("http://localhost:5050/employees")
      })
      // Once the new array of animals is retrieved, set the state
      .then(e => e.json())
      .then(employeeList => {
        this.setState({
          employees: employeeList
        })
      })
  }

  componentDidMount() {
    ApiController.getAll("employees")
      .then(allEmployees => this.setState({ employees: allEmployees }))
  }

  render() {
    return (
      <React.Fragment>
        <h2>Employees</h2>
        <ul>
          {
            this.state.employees.map(person =>
              <Employee
                key={person.id.toString()}
                worker={person}
                fire={this.fireEmployee}
              />
            )
          }
        </ul>
      </React.Fragment>
    )
  }
}