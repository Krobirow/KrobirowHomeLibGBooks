import React from 'react';
import './booksSearch.scss';
import { reduxForm } from 'redux-form';
import { required, maxStringLength } from "../../../utils/validators/validators";
import { Input, createField } from '../formControls/formControls';

const SearchForm = ({books, handleSubmit, valueSender}) => {
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="mb-3 d-flex flex-column position-relative">
        <div className="d-flex flex-row">
          <>
            {createField("text", "Provide a book title", "bookTitle", [required, maxStringLength], Input, "col-12 form-control booktitle", `${books.inputValue}`, valueSender)}
          </>
          <button className="btn btn-primary searchBTN my-1 mx-2" type="submit">Search</button>
        </div>
        <div className={`dropdown-menu searchResults ${(books.inputValue.length >= 1 && books.books.length >= 1 && books.formSubmited === false) ? "show" : "d-none"}`}>
          {books.books.length >= 1 ? (books.books.map(oneBook => <a key={oneBook.id} className="dropdown-item" href="/" onClick={handleSubmit}>{oneBook.volumeInfo ? oneBook.volumeInfo.title : null}</a>)) : null}
        </div>
      </div>
    </form>
  )
}

const BooksSearch =  reduxForm({form:"searchBookForm"})(SearchForm);
export default BooksSearch;