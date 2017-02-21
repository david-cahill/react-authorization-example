import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk'
import userReducer from './reducers/UserReducer.js'
import bottomNavigationReducer from './reducers/BottomNavigationReducer.js'

const reducer = combineReducers({
  userReducer,
  bottomNavigationReducer
})

const enhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

const store = createStore(reducer, enhancer);

export default store
