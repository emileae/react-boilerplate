var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation

$(document).foundation();

// load custom styles
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>Boilerplate 3</p>,
  document.getElementById('app')
);
