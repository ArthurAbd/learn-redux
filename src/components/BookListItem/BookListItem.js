import React from 'react'
import './BookListItem.css'

const BookListItem = ({book, onAdded}) => {
    const {title, author, price, img} = book
    return (
        <div className='book-list-item d-flex my-5 px-5'>
            <img className='book__img' src={img} alt={title} />
            <div className='mx-5 d-flex flex-column justify-content-between'>
                <div>
                    <h2>{title}</h2>
                    <p className="book__autor my-2">Автор: {author}</p>
                </div>
                <div className="book__price">Цена: {`${price} Руб.`}</div>
                <div>
                    <button onClick={onAdded}
                        className='btn btn-info'>Добавить в корзину</button>
                </div>
            </div>
        </div>
    )
}

export default BookListItem