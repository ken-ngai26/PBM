require('../../style/style.less');

import React from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';

import App from '../App';

export default class Root extends React.Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store} >
        <div>
          <App />
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
};

