import React, { Component } from 'react'
import Animal from './Animal';
import ApiController from './ApiController';


export default class AnimalList extends Component {

  state = {
    animals: []
  }

  componentDidMount() {
    ApiController.getAll("animals")
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