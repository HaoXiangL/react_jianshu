import axios from 'axios';
import * as actionType from './actionType'
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
  type: actionType.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommandList: result.recommandList
})

const addHomeList = (list, nextPage) => ({
  type: actionType.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    });
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page='+ page).then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result,page + 1));
    });
  }
  
}

export const toggleTopShow = (show) => ({
  type: actionType.TOGGLE_SCROLL_TOP,
  show
})