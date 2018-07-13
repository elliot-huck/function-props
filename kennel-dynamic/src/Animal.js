import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


export default props => {
  return (
    <div className="card" style={{ width: `18rem` }}>
      <div className="card-body">
        <h5 className="card-title">
          {props.pet.name}
        </h5>
        <p className="card-text">{props.pet.breed}</p>
        {
          <Link className="card-link"
            to={{
              pathname: `/animals/${props.pet.id}`,
              state: { dog: props.pet }
              // This needs to be clearer in the exercise that it's props.whatever
            }}>
            Details
          </Link>
        }
      </div>
    </div>
  )
}
