import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <div className="navbar">
        <Navbar collapseOnSelect expand="lg" bg="myBg" variant="dark">
          <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/profile">Profile</Link>
          {isAuthenticated ? <LogoutButton /> : ''}
        </Navbar >
      </div>
    );
  }
}

export default withAuth0(Header);
