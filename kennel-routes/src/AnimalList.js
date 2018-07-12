import React, { Component } from 'react'


export default class AnimalList extends Component {

  state = {
    animals: [
      { id: 1, name: "Doodles" },
      { id: 2, name: "Jack" },
      { id: 3, name: "Angus" },
      { id: 4, name: "Henley" },
      { id: 5, name: "Derkins" },
      { id: 6, name: "Checkers" }
    ],
    owners: [
      { id: 1, name: "Ryan Tanay" },
      { id: 2, name: "Emma Beaton" },
      { id: 3, name: "Dani Adkins" },
      { id: 4, name: "Adam Oswalt" },
      { id: 5, name: "Fletcher Bangs" },
      { id: 6, name: "Angela Lee" }
    ],
    animalOwners: [
      { connectionId: 1, ownerId: 1, animalId: 2 },
      { connectionId: 2, ownerId: 3, animalId: 4 },
      { connectionId: 3, ownerId: 5, animalId: 6 },
      { connectionId: 4, ownerId: 6, animalId: 5 },
      { connectionId: 5, ownerId: 4, animalId: 3 },
      { connectionId: 6, ownerId: 2, animalId: 1 }
    ]
  }

  render() {
    return (
      <React.Fragment>
        <h2>Animals</h2>
        <ul>
        {
          this.state.animalOwners.map(connection =>
            <li key={connection.connectionId.toString()}>
              "{(this.state.animals[connection.animalId - 1]).name}" (owner: {(this.state.owners[connection.ownerId - 1]).name})
            </li>
          )
        }
        </ul>
      </React.Fragment>
    )
  }
}