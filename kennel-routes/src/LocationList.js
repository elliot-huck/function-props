import React, { Component } from 'react'
import ListItems from "./ListItems"


export default class LocationList extends Component {

  state = {
    locations: [
      { id: 1, name: "Nashville North" },
      { id: 2, name: "Nashville South" }
    ]
  }

  render() {
    return (
      <React.Fragment>
        <h2>Locations</h2>
        <ul>
          {
            this.state.locations.map(location =>
              <ListItems key={location.id.toString()} listItem={location} />
            )
          }
        </ul>
      </React.Fragment>
    )
  }
}