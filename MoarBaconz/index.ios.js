/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry
} = React;

// Temporary switches to develop login form in parallel
var displayLoginForm = true;
var displaySignUpForm = true;

if (displayLoginForm) 
{
  if (displaySignUpForm) {
    var SignUp = require('./client/components/SignUp.react');
    AppRegistry.registerComponent('MoarBaconz', () => SignUp);
  }
  else {
    var Login = require('./client/components/Login.react');
    AppRegistry.registerComponent('MoarBaconz', () => Login);
  }
}
else 
{
  var List = require('./client/components/List.react');
  AppRegistry.registerComponent('MoarBaconz', () => List);
}
