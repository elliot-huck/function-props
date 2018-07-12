import React, { Component } from 'react'


export default class EmployeeList extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Employees</h2>
        {
          this.props.employees.map(employee =>
            <div>
              {employee.name}
            </div>
          )
        }
      </React.Fragment>
    )
  }
}