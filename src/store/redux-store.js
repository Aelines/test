import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import employeesReducer from './employeesReducer';

let reducers = combineReducers({
  employees: employeesReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
