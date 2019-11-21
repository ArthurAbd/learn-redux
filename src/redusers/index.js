const intialState = {
    books: []
}

const reduser = (state = intialState, action) => {

    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            }
    
        default:
            return state
    }
}

export default reduser