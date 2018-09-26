import { createStore, applyMiddleware, combineReducers } from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({ }),

export default() => {
  return createStore(
    rootReducer,
    applyMiddleware(logger, thunkMiddleware)
  )
}