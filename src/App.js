import React, { Component, Fragment} from 'react';
import { Provider } from 'react-redux';
import Header from './common/header/index';
import {GlobalStyle} from './style';
import {Iconfont} from './statics/iconfont/iconfont';
import store from './store/index';
import { BrowserRouter, Route} from 'react-router-dom';
import Detail from './pages/detail';
import Home from './pages/home';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <GlobalStyle />
          <Iconfont />
          <Header />
          <BrowserRouter>
            <Route path='/' exact component={Home} />
            <Route path='/detail' component={Detail} />
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
