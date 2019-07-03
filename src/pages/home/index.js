import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeWapper,HomeLeft, HomeRight,BackTop } from './style';
// import Topic from './component/Topic';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import Qrcode from './component/Qrcode'
import List from './component/List';
import { actionCreator } from './store';

class Home extends Component {

  handleScrollTop() {
    window.scrollTo(0,0);
  }
  
  render() {
    return (
      <HomeWapper>
        <HomeLeft>
        <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4675/569882aa7e239c755c754c4d170a859eca26f752.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
        {/* <Topic /> */}
        <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Qrcode />
          <Writer />
        </HomeRight>
        <BackTop onClick={this.handleScrollTop}>
          回到顶部
        </BackTop>
      </HomeWapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData();
  }
}
const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreator.getHomeInfo();
    dispatch(action);
  }
})

export default connect(null,mapDispatch)(Home);