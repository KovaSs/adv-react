import React, { Component } from "react";
import SingInForm from "../../auth/SingInForm";
import SingUpForm from "../../auth/SingUpForm";
import { Route, NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import {singUp} from '../../../store/ducks/auth'
// import PropTypes from "prop-types";

export class AuthPage extends Component {
  // static propTypes = {};

  handleSingIn = values => {
    console.log('handleSingIn', values)
  }

  handleSingUp = ({email, password}) =>  this.props.singUp(email,password)

  render() {
    return (
      <div>
        <h1>Auth Page</h1>
        <NavLink to="/auth/singin" activeStyle={{color : 'red'}}>sing in</NavLink>
        <NavLink to="/auth/singup" activeStyle={{color : 'red'}}>sing up</NavLink>

        <Route path="/auth/singin" render={() => <SingInForm onSubmit={this.handleSingIn} />} />
        <Route path="/auth/singup" render={() => <SingUpForm onSubmit={this.handleSingUp} />} />
      </div>
    );
  }
}

const putActionToProps = () => {
  return {
    singUp
  }
}

export default connect(null, putActionToProps)(AuthPage);
