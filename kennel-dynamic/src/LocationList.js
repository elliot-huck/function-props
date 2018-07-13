import React, { Component } from 'react'
import Location from "./Location"


export default class LocationList extends Component {

  state = {
    locations: [
      { id: 1, name: "Nashville North", address: "400 Pet Blvd" },
      { id: 2, name: "Nashville South", address: "5533 Kennel St" }
    ]
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