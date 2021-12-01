import { createStore, applyMiddleware, combineReducers } from 'redux'
import { dataReduser } from './dataReduser';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { getApi } from './../data/data';
import { colorReduser } from './colorReduser';

const rootReducer = combineReducers({
  dataReduser,
  colorReduser
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

store.dispatch(getApi())
