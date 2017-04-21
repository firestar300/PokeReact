var {combineReducers, compose, createStore} = require('redux');
var {pokemonReducer, searchTextReducer} = require('reducers');

export var configure = (initialState = {}) => {
  var reducer = combineReducers({
    pokemon: pokemonReducer,
    searchText: searchTextReducer
  });

  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  var store = createStore(reducer, initialState, composeEnhancers());

  return store;
};
