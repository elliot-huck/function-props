import React, { Component } from 'react'


export default class AnimalList extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Animals</h2>
        {/* {
          this.props.animalOwners.map(connection =>
            <div>
              "{(this.props.animals[connection.animalId - 1]).name}" (owner: {(this.props.owners[connection.ownerId - 1]).name})
            </div>
          )
        } */}
      </React.Fragment>
    )
  }
}