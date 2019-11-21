import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className='header mt-2 border-bottom d-flex justify-content-between align-items-center' >
            <Link to='/'>
                <div className='header__title text-dark'>ReStore</div>
            </Link>
            <Link to='/card'>
                <div className='header__basket'>5 вещей на сумму ($200)</div>
            </Link>
            
        </div>
    )
}

export default Header