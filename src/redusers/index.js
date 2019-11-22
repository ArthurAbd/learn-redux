import updateBookList from './bookList'
import updateBasket from './basket'

const reduser = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        basket: updateBasket(state, action)
    }
}

export default reduser