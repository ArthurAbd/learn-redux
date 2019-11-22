const updateBasket = (state, action) => {

    if (state === undefined) {
        return {
            basketItems: [],
            orderTotal: 0
        }
    }

    switch (action.type) {
        case 'BOOK_ADDED':
            return updateOrder(state, action.payload, 1)
    
        case 'BOOK_DELETE':
            const {basketItems} = state.basket
            const item = basketItems.find((book) => book.id === action.payload)
            return updateOrder(state, action.payload, -item.count)

        case 'BOOK_DEC':
            return updateOrder(state, action.payload, -1)
    
        default:
            return state.basket;
    }
}

const updateBasketItems = (basketItems, item, idx) => {

    if (item.count === 0) {
        return [
        ...basketItems.slice(0, idx),
        ...basketItems.slice(idx + 1),
        ]
    }

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

const updateBasketTotal = (items) => {
    return items.reduce((acc, item) => {
        return item.total + acc
    }, 0)
}

const updateBasketTotalAndItems = (basketItems, newItem, findIndexBasketItem) => {
    const items = updateBasketItems(basketItems, newItem, findIndexBasketItem)
    return {
        basketItems: items,
        orderTotal: updateBasketTotal(items)
    }
}

const updateOrder = (state, bookId, count) => {
    const {bookList: {books}, basket: {basketItems}} = state

    const book = books.find((book) => book.id === bookId)
    const findIndexBasketItem = basketItems.findIndex((item) => item.id === bookId)
    const basketItem = basketItems[findIndexBasketItem]
    let newItem = newBasketItem(basketItem, book, count)
    
    return updateBasketTotalAndItems(basketItems, newItem, findIndexBasketItem)
}

export default updateBasket