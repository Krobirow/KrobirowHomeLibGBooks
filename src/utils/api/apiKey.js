import * as axios from "axios";

export const booksApi = {
    getBooks(bookTitle = "") {
        const baseUrl = "https://www.googleapis.com/books/v1/volumes?q=";
        const key = "AIzaSyBQ9_JjFfomoe0KWRfPTMbdRFku293uPu8";
        return axios.get(`${baseUrl}${bookTitle}&projection=lite&key=${key}`).then(response => response.data);
    }
}
