import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Login.css';
import LoginButton from './LoginButton';
import { withAuth0 } from "@auth0/auth0-react";

class Login extends React.Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          <LoginButton />
          {isAuthenticated ? user.name : ''}
          {isAuthenticated ? <img src={user.picture} alt="userImage" /> : ''}
        </Card.Body>
      </Card>
    )
  }
}

export default withAuth0(Login);
