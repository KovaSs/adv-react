import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

export class UnAutorized extends Component {
  // static propTypes = { }

  render() {
    return (
      <div>
        <h1>UnAutorized, please <Link to="/auth/sing-in">Sing In</Link></h1>
      </div>
    )
  }
}

export default UnAutorized
