import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './AnimalList'
import Animal from './Animal'
import LocationList from './LocationList'
import Location from './Location'
import EmployeeList from './EmployeeList'


export default class ApplicationViews extends Component {
	render() {
		return (
			<React.Fragment>
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
							return <Animal animal={props.location.state.animal} />
						}
					}
				/>
				<Route path="/employees" component={EmployeeList} />
			</React.Fragment>
		)
	}
}