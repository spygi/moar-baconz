/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
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
  var FluxProduct = require('./client/components/FluxProduct.react');
  AppRegistry.registerComponent('MoarBaconz', () => FluxProduct);
}
