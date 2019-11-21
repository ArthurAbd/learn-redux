import React from 'react'
import {Route, Switch} from 'react-router'

import HomePage from '../pages/HomePage'
import CardPage from '../pages/CardPage'

const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/card" component={CardPage} />
        </Switch>
    )
}

export default App