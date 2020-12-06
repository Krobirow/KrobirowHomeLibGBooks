import React from 'react';
import './bookCard.scss';

import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';

const fadeInDownAN = keyframes`${fadeInDown}`;
const FadeInDownDiv = styled.div`animation: 1s ${fadeInDownAN};`;

const BookCard = ({books}) => {
    const eachCard = books.books.map(oneBook => {
        return (
            <FadeInDownDiv key={oneBook.id} className={`${books.books.length <= 1 ? "col-12 mb-3 mt-3" : (books.books.length === 2) ? "col-xl-3 col-lg-4 col-md-5 col-sm-12 col-12 mb-3 mt-3" : "col-xl-3 col-lg-4 col-md-5 col-sm-12 col-12 mb-3 mt-3"} `}>
                <div className={`cardWrapper card row no-gutters ${(books.inputValue.length >= 1 && books.books.length >= 1) ? "show" : "d-none"} `}>
                    <div className={`offset-md-1 col-md-10 d-flex justify-content-between`}>
                        <a href={`${oneBook.volumeInfo.infoLink}`} target="_blank">
                            <div className="card-body d-flex flex-column">
                                <div className="col-12">
                                    <img src={`${oneBook.volumeInfo ? oneBook.volumeInfo.imageLinks.thumbnail : null }`} alt=""/>
                                </div>
                                <div className="col-12">
                                    <div className="cardColumn pb-2">
                                        <p className="card-title text-success p-0 m-0">Author Name:</p>
                                        <p className="card-title text-primary p-0 m-0">{oneBook.volumeInfo ? oneBook.volumeInfo.authors : null}</p>
                                    </div>
                                    <div className="cardColumn pb-2">
                                        <p className="card-text text-success p-0 m-0">Book Title: </p>
                                        <p className="card-text text-primary">{oneBook.volumeInfo ? oneBook.volumeInfo.title : null}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </FadeInDownDiv>
        )
    });

    return (
        <div className="row no-gutters">
            {(eachCard.length >= 1 && books.formSubmited) ? eachCard : <div className={"col-12 d-flex justify-content-center my-3"}>No results found, but You can add a new book</div>}
        </div>
    );
}

export default BookCard;
