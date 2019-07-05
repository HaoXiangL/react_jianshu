import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { HomeWapper,HomeLeft, HomeRight,BackTop } from './style';
// import Topic from './component/Topic';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import Qrcode from './component/Qrcode'
import List from './component/List';
import { actionCreator } from './store';

class Home extends PureComponent {
//PureComponent使用时必须要用immutable.js保证数据不被改变
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
        { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>
          ↑
        </BackTop> : null}
        
      </HomeWapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  };

  componentWillUnmount() {
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
};
const mapState = (state) => ({
  showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreator.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow() {
    if(document.documentElement.scrollTop > 200){
      dispatch(actionCreator.toggleTopShow(true))
    }else {
      dispatch(actionCreator.toggleTopShow(false))
    }
  }
})

export default connect(mapState,mapDispatch)(Home);