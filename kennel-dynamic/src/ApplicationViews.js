import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './AnimalList'
import LocationList from './LocationList'
import EmployeeList from './EmployeeList'
import Animal from './Animal'


export default class ApplicationViews extends Component {
	render() {
		return (
			<React.Fragment>
				<Route exact path="/" component={LocationList} />
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