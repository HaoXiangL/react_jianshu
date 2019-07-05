import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Login extends PureComponent {
  render() {
    return (
      <div>login</div>
    )
  }


}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState,mapDispatch)(Login);