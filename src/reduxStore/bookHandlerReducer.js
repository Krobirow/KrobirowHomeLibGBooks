import { booksApi } from "../utils/api/apiKey";

const SET_BOOKS = "SET_BOOKS";
const SEARCH_BOOK = "SEARCH_BOOK";
const FORM_SUBMITED = "FORM_SUBMITED";

let initialState = {
    inputValue: "",
    formSubmited: false,
    books: [],
};

const bookHandlerReducer = (state = initialState, action) => {
	switch (action.type) {
        case SET_BOOKS: 
            return {
                ...state,
                books: action.books.filter( (eachBook) => {
                    return eachBook.volumeInfo.title.toLowerCase().substring(0, state.inputValue.length) === state.inputValue.toLowerCase();
                })
            }
        case FORM_SUBMITED:
            return {
                ...state,
                formSubmited: action.formStatus
            }
        case SEARCH_BOOK:
                return {
                    ...state,
                    inputValue: action.inputValue,
                }
		default:
			return state;
	}
}

export default bookHandlerReducer;

export const setBooks = (books) => ({type: SET_BOOKS, books});
export const searchBook = (inputValue) => ({type: SEARCH_BOOK, inputValue});
export const isFormSubmited = (formStatus) => ({type: FORM_SUBMITED, formStatus});

export const getBooks = (bookTitle) => async dispatch => {
    let data = await booksApi.getBooks(bookTitle);
	dispatch(setBooks(data.items));
};
