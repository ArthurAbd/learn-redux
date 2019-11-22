import React from 'react'
import {bookDel, bookDec, bookAdded} from '../../actions'
import {connect} from 'react-redux'
import './Basket.css'

const Basket = ({items, total, onInc, onDec, onDel}) => {

    const renderRow = (item, idx) => {
        const {id, title, count, total} = item
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{total} руб.</td>
                <td>
                <button onClick={() => onDel(id)}
                    className="mx-1 btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
                <button onClick={() => onInc(id)}
                    className="mx-1 btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-plus-circle" />
                </button>
                <button onClick={() => onDec(id)}
                    className="mx-1 btn btn-outline-warning btn-sm float-right">
                    <i className="fa fa-minus-circle" />
                </button>
                </td>
            </tr>
        )
    }

    return (
        <div className='basket'>
            <h2>Корзина</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Товар</th>
                        <th>Количество</th>
                        <th>Цена</th>
                        <th>Действие</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(renderRow)}
                </tbody>
            </table>
            <div className="total">
                Сумма: {total} руб.
            </div>
        </div>
    )
}

const mapStateToProps = ({basket : {basketItems, orderTotal}}) => {
    return {
        items: basketItems,
        total: orderTotal,
    }
}

const mapDispatchToProps = {
        onDec: bookDec,
        onInc: bookAdded,
        onDel: bookDel
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)