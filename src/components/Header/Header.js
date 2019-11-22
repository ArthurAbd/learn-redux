import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './Header.css'

const Header = ({total}) => {
    console.log(total)


    return (
        <div className='header mt-2 border-bottom d-flex justify-content-between align-items-center' >
            <Link to='/'>
                <div className='header__title text-dark'>ReStore</div>
            </Link>
            <Link to='/card'>
                <div className='header__basket'>Корзина ({total} руб.)</div>
            </Link>
            
        </div>
    )
}

const mapStateToProps = ({basket : {orderTotal}}) => {
    return {
        total: orderTotal
    }
}

export default connect(mapStateToProps)(Header)