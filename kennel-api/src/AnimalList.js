import React, { Component } from 'react'
import Animal from './Animal';


export default class AnimalList extends Component {

  state = {
    animals: []
  }

  componentDidMount () {
    fetch("http://localhost:5050/animals")
    .then(e => e.json())
    .then(allAnimals => this.setState({ animals: allAnimals }))
}

  render() {
    return (
      <React.Fragment>
        <h2>Animals</h2>
        <ul>
          {
            this.state.animals.map(creature =>
              <Animal key={creature.id.toString()} pet={creature} />
            )
          }
        </ul>
      </React.Fragment>
    )
  }
}

  // "{(this.state.animals[connection.animalId - 1]).name}"(owner: { (this.state.owners[connection.ownerId - 1]).name})