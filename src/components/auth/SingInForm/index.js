import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
// import PropTypes from 'prop-types'

export class SignInForm extends Component {
  // static propTypes = { }

  render() {
    const { handleSubmit } = this.props
    return (
      <div>
        <h2>Sing In</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <Field name="email" component="input" type="email"/>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Field name="password" component="input" type="password"/>
          </div>
          <div>
            <button type="submit">Sing In</button>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({ form: 'auth' })(SignInForm)
