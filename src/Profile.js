import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import './Profile.css'

// class component
class Profile extends React.Component {
  render() {
    // use withAuth0 on the export for any classs that uses auth0 information
    const { user, isAuthenticated, isLoading } = this.props.auth0;
    if (isLoading) {
      return <div>Loading...</div>
    } else if (isAuthenticated) {
      return (
        <div className="profile">
          <img id="Picture" src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      );
    } else {
      return '';
    }
  }
}

export default withAuth0(Profile);
