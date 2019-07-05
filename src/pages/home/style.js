import styled from 'styled-components';

export const HomeWapper = styled.div`
  overflow: hidden;
  width: 980px;
  margin 0 auto;
`

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
    border-radius: 6px;
  }
`

export const HomeRight = styled.div`
  width: 280px;
  padding-top: 30px;
  margin-left: 40px;
  float: left;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0px 10px 0px;
  margin-left :-18px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left :18px;
  padding-right: 10px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  background: #f7f7f7;
  margin-bottom: 18px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block
    width: 148px;
    height: 98px;
    float: right;
    border-radius: 10px;
  }
`

export const ListInfo = styled.div`
  width: 458px;
  height: 134px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 18px;
    font-size: 13px;
    color: #999;
  }
`


export const RecommandItem = styled.div`
  box-sizing: border-box;
  margin-top: -4px;
  padding-bottom: 4px;
  width: 100%;
`
export const RecommandInfo = styled.div`
  margin: 0px 0px 6px;
  width: 100%;
  height: 50px;
  .recommandpic {
    display: block
    width: 100%;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`
export const QrcodeWrapper = styled.div`
  overflow: hidden;
  padding: 10px 22px;
  margin-bottom: 30px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  .qrcode {
    width: 60px;
    height: 60px;
    opacity: .85;
    float: left;
  }
`

export const QrcodeInfo = styled.div`
  display: inline-block;
  float: left;
  vertical-align: middle;
  margin-left: 7px;
  .title {
    font-size: 15px;
    line-height: 30px;
    color: #333;
  }
  .desc {
    margin-top: 4px;
    line-height: 20px;
    font-size: 13px;
    color: #999;
  }
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  border-radius: 20px;
  text-align: center;
  color: #fff;
  cursor: pointer;
`

export const BackTop = styled.div`
  position: fixed;
  right: 30px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
  cursor: pointer;
`

