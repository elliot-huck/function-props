import { Route } from 'react-router-dom'
import React, { Component } from "react"

import AnimalList from './AnimalList'
import Animal from './Animal'

import LocationList from './LocationList'
import Location from './Location'

import EmployeeList from './EmployeeList'
import Employee from './Employee'

import Login from './Login'


export default class ApplicationViews extends Component {

	// Check if credentials are in local storage
	isAuthenticated = () => localStorage.getItem("credentials") !== null

	render() {
		return (
			<React.Fragment>
				<Route path="/login" component={Login} />
				
				<Route exact path="/" component={LocationList} />
				<Route path="/locations/:locationId"
					render={
						(props) => {
							return <Location building={props.location.state.office} />
						}
					}
				/>

				<Route exact path="/animals" component={AnimalList} />
				<Route path="/animals/:animalId"
					render={
						(props) => {
							return <Animal pet={props.location.state.dog} />
						}
					}
				/>

				<Route exact path="/employees" component={EmployeeList} />
				<Route path="/employees/:employeeId"
					render={
						(props) => {
							return <Employee worker={props.location.state.teammate} />
						}
					}
				/>
			</React.Fragment>
		)
	}
}