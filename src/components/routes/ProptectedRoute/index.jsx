import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { moduleName } from '../../../store/ducks/auth'
import UnAutorized from '../../auth/UnAutorized';
// import PropTypes from 'prop-types'

export class ProptectedRoute extends Component {
  // static propTypes = { }

  render() {
    const { component, ...rest } = this.props
    return <Route {...rest} render={this.renderProtected} />
  }

  renderProtected = routeProps => {
    const { component : ProptectedComponent, authorized } = this.props
    return authorized ? <ProptectedComponent {...routeProps} /> : <UnAutorized />
  }
}

const putStateToProps = state => {
  return {
    autorized: !!state[moduleName].user
  }
}

export default connect(putStateToProps, null, null, {pure: false})(ProptectedRoute)