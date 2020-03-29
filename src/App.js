import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Appiness from './router';
import store from './store/index.js'
class App extends Component {
  
  componentDidMount() {
    
  }
  render() {
    return (
      <div>
        <Provider store={store}>
          <Appiness {...this.props} />
          </Provider>
      </div>
    );
  }
}
export default App;
