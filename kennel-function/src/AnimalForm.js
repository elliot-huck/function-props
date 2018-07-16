import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"


export default class AnimalForm extends Component {

  state = {
    name: "",
    breed: ""
  }

  handleChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  addAnimal = (evt) => {
    evt.preventDefault()
  }
  render() {
    return (
        <div className="card" style={{ width: `18rem` }}>
          <div className="card-body">
            <h5 className="card-title">Add your pet:</h5>
            <input type="text"
              id="name"
              placeholder="Name"
              onChange={this.handleChange}
              required=""
            />
            <input type="text"
              id="breed"
              placeholder="Breed"
              onChange={this.handleChange}
              required=""
            />
            <button onClick={() => props.checkInAnimal(this.state)}>Check in</button>
          </div>
        </div>
    )
  }
}
