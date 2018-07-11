import React, { Component } from 'react'


export default class AnimalList extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Animals</h2>
        {
          this.props.animals.map(animal =>
            <div>
              {animal.name}
            </div>
          )
        }
      </React.Fragment>
    )
  }
}