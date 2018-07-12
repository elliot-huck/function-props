import React, { Component } from 'react'

export default props => {
  return <li key={props.id.toString()}>{props.name}</li>
}