import React, { Component, Fragment} from 'react';
import { Provider } from 'react-redux';
import Header from './common/header/index';
import {GlobalStyle} from './style';
import {Iconfont} from './statics/iconfont/iconfont';
import store from './store/index';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <GlobalStyle />
          <Iconfont />
          <Header />
        </Provider>
      </Fragment>
    );
  }
}

export default App;
