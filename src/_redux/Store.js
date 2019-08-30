import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'

import Todo from '../_reducers/Todo'
import User from '../_reducers/User'

// this global states
const reducers = combineReducers({
    Todo,User
})
export default Store = createStore(
    reducers,
    applyMiddleware(promise, logger)
)  