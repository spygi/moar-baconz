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
  var Login = require('./client/components/Login.react');
  AppRegistry.registerComponent('MoarBaconz', () => Login);
}
else 
{
  var Item = require('./client/components/Item.react');
  AppRegistry.registerComponent('MoarBaconz', () => Item);
}