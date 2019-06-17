import React, { Component } from "react";
import SingInForm from "../../auth/SingInForm";
// import PropTypes from "prop-types";

export class AuthPage extends Component {
  // static propTypes = {};

  render() {
    return (
      <div>
        <h1>Auth Page</h1>
        <SingInForm />
      </div>
    );
  }
}

export default AuthPage;
