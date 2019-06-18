import React, { Component } from "react";
import SingInForm from "../../auth/SingInForm";
import SingUpForm from "../../auth/SingUpForm";
import { Route, NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import { signUp, signIn} from '../../../store/ducks/auth'
// import PropTypes from "prop-types";

export class AuthPage extends Component {
  // static propTypes = {};

  render() {
    return (
      <div>
        <h1>Auth Page</h1>
        <NavLink to="/auth/sign-in" activeStyle={{color : 'red'}}>sing in</NavLink>
        <NavLink to="/auth/sign-up" activeStyle={{color : 'red'}}>sing up</NavLink>

        <Route path="/auth/sign-in" render={() => <SingInForm onSubmit={this.handleSingIn} />} />
        <Route path="/auth/sign-up" render={() => <SingUpForm onSubmit={this.handleSingUp} />} />
      </div>
    );
  }

  handleSingIn = ({email, password}) => this.props.signIn(email, password)
  handleSingUp = ({email, password}) =>  this.props.signUp(email, password)
}

const putActionToProps = () => {
  return {
    signUp,
    signIn,
  }
}

export default connect(null, putActionToProps)(AuthPage);
