import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

export default props => {
  return (
    <div className="card" style={{ width: `18rem` }}>
      <div className="card-body">
        <h5 className="card-title">
          {props.building.name}
        </h5>
        <p className="card-text">{props.building.address}</p>
        {
          <Link className="card-link"
            to={{
              pathname: `/locations/${props.building.id}`,
              state: { office: props.building }
            }}>
            Details
          </Link>
        }
      </div>
    </div>
  )
}
