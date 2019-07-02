import React, { Component } from 'react';
import { HomeWapper,HomeLeft, HomeRight } from './style';
// import Topic from './component/Topic';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import List from './component/List';

class Home extends Component {
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
          <Writer />
        </HomeRight>
      </HomeWapper>
    )
  }
}

export default Home;