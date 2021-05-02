import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css'
import { Jumbotron } from 'react-bootstrap';

// class component
class Profile extends React.Component {
  render() {
    // use withAuth0 on the export for any classs that uses auth0 information
    const { user, isAuthenticated } = this.props.auth0;
    return (
      <div>
        <Jumbotron className="profile">
          {isAuthenticated ? user.name : ''}
          {isAuthenticated ? <img src={user.picture} alt="profile pic" /> : ''}
          {isAuthenticated ? user.email : ''}
        </Jumbotron>
      </div>
    );
  }
}


export default withAuth0(Profile);
