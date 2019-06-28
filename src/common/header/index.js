import React, {Component} from 'react';
import { HeaderWrapper, Logo, Nav,NavItem, NavSearch, Addition,Button, SearchWrpper } from './style';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            focused: false
        };
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    render() {
        return (
            <HeaderWrapper>
                <Logo href='/'/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
                    <SearchWrpper>
                        <NavSearch
                            className={this.state.focused ? 'focused' : ''}
                            onFocus={this.handleInputFocus}
                            onBlur={this.handleInputBlur}
                        ></NavSearch>
                        <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe60c;</i>
                    </SearchWrpper>
                </Nav>
                <Addition>
                    <Button className='writting'><i className="iconfont">&#xe62d;</i>写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

    handleInputFocus() {
        this.setState({
            focused: true
        })
    }

    handleInputBlur() {
        this.setState({
            focused: false
        })
    }
}

export default Header;