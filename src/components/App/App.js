import React from 'react'
import {Route, Switch} from 'react-router'

import HomePage from '../pages/HomePage'
import CardPage from '../pages/CardPage'
import Header from '../Header/Header'

const App = () => {
    return (
        <div className='card-page container'>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/card" component={CardPage} />
            </Switch>
        </div>
        
    )
}

export default App