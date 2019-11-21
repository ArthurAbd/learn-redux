const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SECCESS',
        payload: newBooks
    }
}

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

const bookAdded = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

const bookDel = (bookId) => {
    return {
        type: 'BOOK_DELETE',
        payload: bookId
    }
}

const bookDec = (bookId) => {
    return {
        type: 'BOOK_DEC',
        payload: bookId
    }
}

const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(booksRequested())
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)))
}

export {
    bookDec,
    bookDel,
    bookAdded,
    fetchBooks
}