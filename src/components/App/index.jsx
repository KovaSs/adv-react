import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { Route } from 'react-router-dom'
import AdminPage from '../routes/AdminPage'
import AuthPage from '../routes/AuthPage'
import history from '../../history'

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history} >
        <Route path="/admin" component={AdminPage}/>
        <Route path="/auth" component={AuthPage}/>
      </ConnectedRouter>
    );
  }
}

export default App;
