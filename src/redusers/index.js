const intialState = {
    books: [],
    loading: true,
    error: null,
    basketItems: [],
    orderTotal: 200
}

const updateBasketItems = (basketItems, item, idx) => {
    if (idx === -1) {
        return [
            ...basketItems,
            item
        ]
    }

    return [
        ...basketItems.slice(0, idx),
        item,
        ...basketItems.slice(idx + 1),
    ]
}

const newBasketItem = (basketItem, book = {}, count) => {
    if (basketItem) {
        return {
            ...basketItem,
            count: basketItem.count + count,
            total: basketItem.total + count * book.price
        }
    } else {
        return {
            id: book.id,
            title: book.title,
            count: 1,
            total: book.price
        }
    }
}

const updateOrder = (state, bookId) => {
    const {books, basketItems} = state

    const book = books.find((book) => book.id === bookId)
    const findIndexBasketItem = basketItems.findIndex((item) => item.id === bookId)
    const basketItem = basketItems[findIndexBasketItem]
    let newItem = newBasketItem(basketItem, book)

    
    return {
        ...state,
        basketItems: updateBasketItems(state.basketItems, newItem, findIndexBasketItem)
    }
}

const reduser = (state = intialState, action) => {

    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            }
            
        case 'FETCH_BOOKS_SECCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            }

        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }
        
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload)
    
        case 'BOOK_DELETE':
            const bookIdDel = action.payload
            const findIndexBasketItemDel = state.basketItems.findIndex((item) => item.id === bookIdDel)
            console.log(findIndexBasketItemDel)
            return {
                ...state,
                basketItems: [
                    ...state.basketItems.slice(0, findIndexBasketItemDel),
                    ...state.basketItems.slice(findIndexBasketItemDel + 1), 
                ]
                
            }

        // case 'BOOK_DELETE':
        //     const bookIdDel = action.payload
        //     const findIndexBasketItemDel = state.basketItems.findIndex((item) => item.id === bookIdDel)
        //     console.log(findIndexBasketItemDel)
        //     return {
        //         ...state,
        //         basketItems: [
        //             ...state.basketItems.slice(0, findIndexBasketItemDel),
        //             ...state.basketItems.slice(findIndexBasketItemDel + 1), 
        //         ]
                
        //     }

        default:
            return state
    }
}

export default reduser