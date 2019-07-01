import { createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

//导入redux-devtools-extension中的函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  //redux中间件redux-thunk
  //action与store之间
  applyMiddleware(thunk)
));

export default store;