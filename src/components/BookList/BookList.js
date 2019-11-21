import React from 'react'
import BookListItem from '../BookListItem/BookListItem'
import {connect} from 'react-redux'
import {withBookstoreService} from '../hoc/withBookstoreService'
import * as actions from '../../actions'
import compose from '../../utils/compose';

class BookList extends React.Component {

    componentDidMount() {
        const {bookstoreService} = this.props
        const data = bookstoreService.getBooks()

        this.props.booksLoaded(data)
    }

    render() {
        const {books} = this.props
        return (
            <ul>
                {books.map((book) => {
                    return (<li key={book.id}><BookListItem book={book} /></li>)
                })}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

const mapDispatchToProps = actions

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList)