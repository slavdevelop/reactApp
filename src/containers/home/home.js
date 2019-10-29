import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class HomeContainer extends PureComponent {
  render() {
    return (
      <div className="home-page">
        <h1>Home</h1>
      </div>
    );
  }
}

export default connect(
  state => ({
    platformType: state
  }),
  dispatch => ({
    actions: bindActionCreators({}, dispatch)
  })
)(HomeContainer);
