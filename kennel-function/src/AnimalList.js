import React, { Component } from 'react'
import Animal from './Animal';
import ApiController from './ApiController';


export default class AnimalList extends Component {

  state = {
    animals: []
  }

  checkOutAnimal = (animalId) => {
    // Delete the specified animal from the API
    fetch(`http://localhost:5050/animals/${animalId}`, {
      method: "DELETE"
    })
      // When DELETE is finished, retrieve the new list of animals
      .then(() => {
        // Remember you HAVE TO return this fetch to the subsequenet `then()`
        return fetch("http://localhost:5050/animals")
      })
      // Once the new array of animals is retrieved, set the state
      .then(a => a.json())
      .then(animalList => {
        this.setState({
          animals: animalList
        })
      })
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
              <Animal
                key={creature.id.toString()}
                pet={creature}
                checkOutAnimal={this.checkOutAnimal}
              />
            )
          }
        </ul>
      </React.Fragment>
    )
  }
}

  // "{(this.state.animals[connection.animalId - 1]).name}"(owner: { (this.state.owners[connection.ownerId - 1]).name})