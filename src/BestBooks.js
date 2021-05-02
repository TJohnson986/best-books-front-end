import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './BestBooks.css';



class BestBooks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  // getting our book information based on the users email
  componentDidMount = async () => {
    const backendBookInfo = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/book?user=${this.props.auth0.user.email}`)
    console.log('Got it', backendBookInfo);
    this.setState({
      books: backendBookInfo.data.favoriteBooks
    });
  }
  render() {

    return (
      // NEEED TO FINISH THE CAROUSEL FOR THE RENDERED BOOKS
        <Carousel className="carousel slide" data-ride="carousel">
          <h1>My books</h1>
          {this.state.books && this.state.books.map(book => <h2 key={book._id}>{book.bookName}</h2>)}
        </Carousel>
      
    )
  }
}

export default withAuth0(BestBooks);
