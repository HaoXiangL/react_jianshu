import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrpper, SearchInfo
  , SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style';
import { actionCreators }  from './store';


class Header extends Component {
  getListArea = () => {
    const { focused, list, page,totalPage,mouseIn, handleMouseEnter, handleMouseLeave,handleChangePage } = this.props;

    const newList = list.toJS();
    const pageList = [];
    if(newList.length){
      for(let i = (page - 1) * 9; i < page * 9 ; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>
            {newList[i]}
          </SearchInfoItem>
        )
      }
    }
    if(focused || mouseIn) {
      return(
        <SearchInfo 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
              <SearchInfoTitle>
                热门搜索
                <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage,this.spinIcon)}>
                <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>换一批
                </SearchInfoSwitch>
              </SearchInfoTitle>
              <SearchInfoList>
                {pageList}
              </SearchInfoList>
            </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props;
    return (
      <HeaderWrapper>
        <Logo href='/' />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrpper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
              &#xe60c;
            </i>
            {this.getListArea()}
          </SearchWrpper>
        </Nav>
        <Addition>
          <Button className='writting'><i className="iconfont">&#xe62d;</i>写文章</Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

//无状态组件
// const Header = (props) => {
  
// }

//   handleInputFocus() {
//     this.setState({
//       focused: true
//     })
//   }

//   handleInputBlur() {
//     this.setState({
//       focused: false
//     })
//   }


const mapStateToProps = (state) => {
  return {
    //使用redux-immutable库
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    totalPage: state.getIn(['header','totalPage']),
    mouseIn: state.getIn(['header','mouseIn'])

    // focused: state.get('header').get('focused')
    //immutable需要get方法传入
    // focused: state.header.get('focused')
    // focused: state.header.focused
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },

    handleInputBlur() {
      const action = actionCreators.searchBlur();
      dispatch(action);
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page,totalPage,spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
      if(originAngle) {
        originAngle = parseInt(originAngle, 10);
      }else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate('+(originAngle + 360)+'deg)';
      console.log(originAngle);
      if(page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      }else {
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}

// export default Header;
export default connect(mapStateToProps, mapDispathToProps)(Header)