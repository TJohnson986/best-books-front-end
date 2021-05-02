import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import { withAuth0 } from '@auth0/auth0-react';

class MyFavoriteBooks extends React.Component {
  render() {
    // const {user, isAuthenticated} = this.props.auth0;
    // console.log(user);
    return (
      <div>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>These are my favorite books!</p>
        </Jumbotron>
      </div>
    )
  }
}

export default (MyFavoriteBooks);