import React from 'react'

const ErrorField = ({input, type, meta: {error, touched}}) => {
  const errorText = touched && error && <div style={{color:"red"}}>{error}</div>
  return (
    <div>
      <label htmlFor={input.name}>{input.name}</label>
      <input {...input} type={type}/>
      {errorText}
    </div>
  )
}

export default ErrorField
