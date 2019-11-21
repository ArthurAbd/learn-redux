import React from 'react'
import BookListItem from '../BookListItem/BookListItem'
import Spinner from '../Spinner/Spinner'
import Error from '../Error/Error'
import {connect} from 'react-redux'
import {withBookstoreService} from '../hoc/withBookstoreService'
import {fetchBooks, bookAdded} from '../../actions'
import compose from '../../utils/compose';


const BookList = ({books, onAdded}) => {
    return (
        <div>
            {books.map((book) => {
                return (
                    <div key={book.id}>
                        <BookListItem 
                            onAdded={() => onAdded(book.id)}
                            book={book} />
                    </div>
                )
            })}
        </div>
    )
}

class BookListContainer extends React.Component {

    componentDidMount() {
        this.props.fetchBooks()      
    }

    render() {
        const {books, loading, error, onAdded} = this.props

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <Error />
        }

        return <BookList onAdded={onAdded} books={books} />
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookstoreService} = ownProps
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAdded: (id) => {
            return dispatch(bookAdded(id))
        }
        
    }
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)