import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const LoginWrapper = styled.div`
z-index: 0;
  position: absolute;
  left:0;
  right:0;
  bottom:0;
  top: 56px;
  background: #eee;
`

export const LoginBox= styled.div`
  width: 400px;
  height: 200px;
  margin: 156px auto;
  padding-top: 0px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
`

export const LoginPic= styled.div`
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
  margin: 0 auto;
`

export const Input= styled.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  margin: 10px auto;
  color: #777;
`

export const Button= styled.div`
  width: 220px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  margin: 10px auto;
  color: #fff;
  background: #3194d0;
  border-radius: 15px;
  margin: 10px auto;
  text-align: center;
`