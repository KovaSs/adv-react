import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router'
import history from '../../history'

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history} >
        <div>
          Hello world!
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
