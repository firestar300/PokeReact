var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var store = require('configureStore').configure();
var PokeApp = require('PokeApp');
var PokeAPI = require('PokeAPI');

console.log(PokeAPI);
PokeAPI.setAll();
// store.subscribe(() => {
//   PokeAPI.setAll();
// });

// Load foundation
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyle');

ReactDOM.render(
  <Provider store={store}>
    <PokeApp />
  </Provider>,
  document.getElementById('app')
);
