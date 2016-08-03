var React = require('react');
var ReactDOMServer = require('react-dom/server');
var RoutingContext = require('react-router').RoutingContext;
module.exports = (renderProps) => <RoutingContext {...renderProps} />;
