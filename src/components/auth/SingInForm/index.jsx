import React from 'react'
import { reduxForm, Field } from 'redux-form'
import validator  from 'email-validator'
import ErrorField  from '../ErrorField'

export const SignInForm = props => {
  const { handleSubmit } = props
  return (
    <div>
      <h2>Sing In</h2>
      <form onSubmit={handleSubmit}>
        <Field name="email" type="email" component={ErrorField}/>
        <Field name="password" type="password" component={ErrorField}/>
        <div>
          <button type="submit">Sing In</button>
        </div>
      </form>
    </div>
  )
}

const validate = ({email, password}) => {
  const errors = {}
  if(!email) errors.email = 'email is requared'
  else if(!validator.validate(email)) errors.email = 'invalid email'

  if(!password) errors.password = 'password is requared'
  else if(password.length < 8) errors.password = 'password too short'

  return errors
}

export default reduxForm({ form: 'auth', validate })(SignInForm)
