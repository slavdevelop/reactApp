import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ProfileContainer extends PureComponent {
  render() {
    return (
      <div className="profile-page">
        <h1>Profile</h1>
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
)(ProfileContainer);
