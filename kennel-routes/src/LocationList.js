import React, { Component } from 'react'


export default class LocationList extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Locations</h2>
        {
          this.props.locations.map(location =>
            <div>
              {location.name}
            </div>
          )
        }
      </React.Fragment>
    )
  }
}