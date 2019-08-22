import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import reducer from './index'

const rootReducer = (history) => combineReducers({
  reducer: reducer,
  router: connectRouter(history)
})

export default rootReducer