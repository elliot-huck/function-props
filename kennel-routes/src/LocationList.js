import React, { Component } from 'react'


export default class LocationList extends Component {

  state = {
    locations: [
      { id: 1, locationName: "Nashville North" },
      { id: 2, locationName: "Nashville South" }
    ]
  }

  render() {
    return (
      <React.Fragment>
        <h2>Locations</h2>
        <ul>
        {
          this.state.locations.map(location =>
            <li key={location.id.toString()}>{location.locationName}</li>
          )
        }
        </ul>
      </React.Fragment>
    )
  }
}