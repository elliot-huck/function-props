import React, { Component } from 'react'
import Location from "./Location"


export default class LocationList extends Component {

  state = {
    locations: []
  }

  componentDidMount() {
    fetch("http://localhost:5050/locations")
      .then(e => e.json())
      .then(allLocations => this.setState({ locations: allLocations }))
  }

  render() {
    return (
      <React.Fragment>
        <h2>Locations</h2>
        <ul>
          {
            this.state.locations.map(place =>
              <Location key={place.id.toString()} building={place} />
            )
          }
        </ul>
      </React.Fragment>
    )
  }
}