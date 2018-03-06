import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

const UserProfile = (props) => {
  return (
    <div>
      <h1>Profile Page</h1>

      <button onClick={() => props.onUserAuthentication(false, props.history)}>Log Out</button>
    </div>
  );
}

export default connect(null, actions)(UserProfile);