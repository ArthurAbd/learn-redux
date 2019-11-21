import React from 'react'

const BookListItem = ({book}) => {
    const {title, author} = book
    return (
        <React.Fragment>
            <p className="h2">{title}</p>
            <p className="h4">{author}</p>
        </React.Fragment>
    )
}

export default BookListItem