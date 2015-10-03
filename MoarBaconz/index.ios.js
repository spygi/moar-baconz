/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry
} = React;

// Temporary switch to develop login form in parallel
var displayLoginForm = true;

if (displayLoginForm) 
{
  var FluxLogin = require('./client/components/FluxLogin.react');
  AppRegistry.registerComponent('MoarBaconz', () => FluxLogin);
}
else 
{
  var Item = require('./client/components/Item.react');
  AppRegistry.registerComponent('MoarBaconz', () => Item);
}