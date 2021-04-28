import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Login from './Login';
import Profile from './Profile';
import Bookshelf from './Bookshelf';
import { withAuth0 } from '@auth0/auth0-react';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    const { isAuthenticated } = this.props.auth0;
    console.log('app', this.props);
    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {!isAuthenticated ? <Login /> : <Bookshelf />}
              </Route>
              <Route exact path="/Profile">
                {isAuthenticated ? <Profile /> : ''}
              </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
