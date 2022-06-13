import todosReducerState from "./services/reducers/TodoReducerState";

const {createStore, applyMiddleware} = require("redux");
const { default: thunk } = require("redux-thunk");


const store = createStore(todosReducerState,applyMiddleware(thunk))

export default store;