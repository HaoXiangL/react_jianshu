import React, { Component, Fragment} from 'react';
import { Provider } from 'react-redux';
import Header from './common/header/index';
import {GlobalStyle} from './style';
import {Iconfont} from './statics/iconfont/iconfont';
import store from './store/index';
import { BrowserRouter, Route} from 'react-router-dom';
import Detail from './pages/detail';
import Home from './pages/home';
import Login from './pages/login';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <GlobalStyle />
          <Iconfont />
          <BrowserRouter>
            <Header />
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path='/detail/:id' component={Detail} />
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
