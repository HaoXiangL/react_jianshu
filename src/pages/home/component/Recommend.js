import React, { PureComponent } from 'react';
import { RecommandItem,RecommandInfo } from '../style';
import { connect } from 'react-redux';

class Recommand extends PureComponent {
  render() {
    const { list }  = this.props;
    return (
      <RecommandItem>
        {
          list.map((item) => {
            return (
              <RecommandInfo key={item.get('id')}>
                <img className='recommandpic' alt='' src={item.get('imgUrl')} />
              </RecommandInfo>
            )
          })
        }
      </RecommandItem>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home','recommandList'])
})
export default connect(mapState,null)(Recommand);