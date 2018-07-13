import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

export default props => {
  return (
    <div className="card" style={{ width: `18rem` }}>
      <div className="card-body">
        <h5 className="card-title">
          {props.worker.name}
        </h5>
        <p className="card-text">{props.worker.title}</p>
        {
          <Link className="card-link"
            to={{
              pathname: `/employees/${props.worker.id}`,
              state: { teammate: props.worker }
            }}>
            Details
          </Link>
        }
      </div>
    </div>
  )
}
