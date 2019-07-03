import { fromJS } from 'immutable';
import * as actionType from './actionType'

//immutable对象，可以防止state的修改

//home的reducer，划分redcer
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommandList: [],
  articlePage: 1
});
  
  export default (state = defaultState, action) => {
    switch(action.type) {
      case actionType.CHANGE_HOME_DATA:
        return  state.merge({
          topicList: fromJS(action.topicList),
          articleList: fromJS(action.articleList),
          recommandList: fromJS(action.recommandList)
        })
      case actionType.ADD_ARTICLE_LIST:
        //concat追加数据(加载更多)
        return  state.merge({
          'articleList': state.get('articleList').concat(action.list),
          'articlePage': action.nextPage
        })      
      default:
        return state
    }
  }