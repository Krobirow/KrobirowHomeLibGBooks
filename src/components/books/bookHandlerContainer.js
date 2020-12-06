import React from 'react';
import { connect } from 'react-redux';
import BookCard from './bookCard/bookCard';
import './bookHandler.scss';
import BooksSearch from './booksSearch/booksSearch';
import { getBooks, searchBook, isFormSubmited } from '../../reduxStore/bookHandlerReducer';
import { reset } from 'redux-form';

class BookHandlerContainer extends React.Component {
  state = {
    typingTimeout: 0
  }

  onFormSubmit = (formData) => {
    if (this.state.typingTimeout) {
      clearTimeout(this.state.typingTimeout);
    }
    this.props.isFormSubmited(true);
    this.props.getBooks(formData.bookTitle);
    this.props.resetForm();
  }

  valueSender = (e) => {
    this.props.searchBook(e.target.value);
    if(e.target.value !== "" && e.target.value !== undefined ) {
      if (this.state.typingTimeout) {
        clearTimeout(this.state.typingTimeout);
      }
      this.setState({
        typingTimeout: setTimeout(() => {
          this.props.getBooks(e.target.value);
          this.props.isFormSubmited(false);
        }, 2000)
      });
    }
  }

  render() {
    return (
      <div className="bookHandlerContainer container">
        <BooksSearch books={this.props.books} valueSender={this.valueSender} onSubmit={this.onFormSubmit}/>
        <BookCard books={this.props.books}/>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
	return {
    books: state.bookHandlerReducer,
	}
}

const mapDispatchToProps = dispatch => {
  return {
    searchBook: (value) => dispatch(searchBook(value)),
    getBooks: (bookTitle) => dispatch(getBooks(bookTitle)),
    isFormSubmited: (formStatus) => dispatch(isFormSubmited(formStatus)),
    resetForm: () => dispatch(reset('formCreateNewBook'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookHandlerContainer);